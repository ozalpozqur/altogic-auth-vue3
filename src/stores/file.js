import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import altogic from '@/libs/altogic';
import { useAuthStore } from '@/stores/auth';
import { useToast } from 'vue-toastification';
import slugify from 'slugify';
import { useRoute } from 'vue-router';

export const useFileStore = defineStore('file', () => {
	const _files = ref(null);
	const _folders = ref([]);
	const fileLoading = ref(false);
	const folderLoading = ref(false);
	const auth = useAuthStore();
	const toast = useToast();
	const route = useRoute();

	async function getFiles() {
		fileLoading.value = true;
		const { data, errors } = await altogic.storage
			.bucket(auth.isAuthenticated ? auth.user.email.split('@')[0] : 'root')
			.listFiles(`userId == '${auth.user._id}'`, {
				limit: 100,
				sort: {
					field: 'uploadedAt',
					direction: 'desc',
				},
			});
		fileLoading.value = false;
		if (errors) {
			console.log(errors);
			toast.error("Couldn't get files");
			return;
		}
		_files.value = data;
	}

	async function getFolders() {
		folderLoading.value = true;
		const { data, errors } = await altogic.db.model('folders').filter(`user == '${auth.user._id}'`).get();
		folderLoading.value = false;
		if (errors) {
			toast.error("Couldn't get folders");
			return;
		}
		_folders.value = data;
	}

	async function createFolder(name) {
		const { data, errors } = await altogic.db
			.model('folders')
			.create({ name, user: auth.user._id, slug: slugify(name, { lower: true }) });
		if (errors) {
			toast.error("Couldn't create folder");
			return;
		}
		_folders.value.push(data);
	}

	const addFiles = files => {
		if (Array.isArray(files)) {
			_files.value.unshift(...files);
		} else {
			_files.value.unshift(files);
		}
	};

	const files = computed(() => _files.value);
	const folders = computed(() => _folders.value);
	const filteredFiles = computed(() => {
		const tag = route.params.slug;
		if (!tag) return files.value;
		return files.value?.filter(file => file.tags?.includes(route.params.slug));
	});

	return {
		getFiles,
		filteredFiles,
		fileLoading,
		getFolders,
		createFolder,
		files,
		folders,
		addFiles,
	};
});
