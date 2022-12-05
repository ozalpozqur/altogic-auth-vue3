<script setup>
import { useAuthStore } from '@/stores/auth';
import { useHead } from '@vueuse/head';
import { onMounted } from 'vue';
import SideBar from '@/components/dashboard/SideBar.vue';
import Main from '@/components/dashboard/Main.vue';
import { useFileStore } from '@/stores/file';

useHead({ title: 'Dashboard - Image Uploader' });
const auth = useAuthStore();
const storage = useFileStore();

onMounted(() => {
	console.log('onMounted');
	storage.getFiles();
	storage.getFolders();
});
</script>

<template>
	<section class="grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[260px_1fr] h-full">
		<SideBar />
		<Main />
	</section>
</template>
