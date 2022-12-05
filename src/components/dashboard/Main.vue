<template>
	<Teleport to="body">
		<Modal title="Create Folder" :open="modalStatus" :close="closeModal">
			<form class="flex flex-col gap-2" @submit.prevent="folderHandler">
				<div class="flex flex-col gap-1">
					<label for="folderName">Folder Name</label>
					<input
						id="folderName"
						placeholder="Type your folder name"
						class="border-[#D8D6DE] rounded w-full"
						type="text"
						required
						v-model="folderName"
					/>
				</div>
				<Button class="self-end">Create Folder</Button>
			</form>
		</Modal>
	</Teleport>
	<div class="p-8 flex flex-col gap-4">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2 md:flex-row justify-between md:items-center">
				<h1 class="font-medium text-3xl lg:text-[30px] xl:text-[38px]">My Drive</h1>
				<div class="flex gap-2">
					<Button @click="openModal" class="px-6">Create Folder</Button>
					<Button variant="primary" class="px-6">Upload File</Button>
				</div>
			</div>
			<form class="flex items-center justify-center w-full">
				<input
					placeholder="Search File, Folder, Drive name"
					class="!border-[#D9D9D9] !ring-0 h-[40px] flex-1 !outline-none placeholder-gray-400"
					type="text"
				/>
				<button class="border text-gray-400 border-[#D9D9D9] border-l-0 w-[40px] h-[40px] shrink-0">
					<Icon name="search" />
				</button>
			</form>
		</div>
		<ListFolders />
		<router-view />
		<ListFiles />
	</div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';
import Icon from '@/components/Icon.vue';
import ListFiles from '@/components/dashboard/ListFiles.vue';
import ListFolders from '@/components/dashboard/ListFolders.vue';
import Modal from '@/components/ui/Modal.vue';
import { ref } from 'vue';
import { useFileStore } from '@/stores/file';

const storage = useFileStore();
const folderName = ref('');
const creatingFolder = ref(false);

const modalStatus = ref(false);
const closeModal = () => {
	modalStatus.value = false;
};
const openModal = () => {
	modalStatus.value = true;
};

const folderHandler = async () => {
	creatingFolder.value = true;
	await storage.createFolder(folderName.value);
	creatingFolder.value = false;
	folderName.value = '';
	closeModal();
};
</script>
