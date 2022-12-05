<template>
	<div class="flex items-center justify-center h-32" v-if="storage.folderLoading">
		<Loading class="w-20 h-20" />
	</div>
	<div class="space-y-1" v-else-if="storage.folders && storage.folders.length > 0">
		<h4 class="font-medium text-xl">Folders</h4>
		<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2">
			<Folder v-for="folder in storage.folders" :folder="folder" :key="folder._id" />
			<Button
				@click="router.push({ name: 'dashboard' })"
				class="!p-1 !px-2 col-start-1 col-end-3 !w-fit justify-self-end"
				>Clear</Button
			>
		</div>
	</div>
</template>

<script setup>
import { useFileStore } from '@/stores/file';
import Folder from '@/components/dashboard/Folder.vue';
import Loading from '@/components/ui/Loading.vue';
import Button from '@/components/ui/Button.vue';
import router from '@/router';
const storage = useFileStore();
</script>
