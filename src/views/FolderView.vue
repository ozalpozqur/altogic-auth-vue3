<template></template>

<script setup>
import { useFileStore } from '@/stores/file';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
const storage = useFileStore();
watch(
	() => storage.filterFiles,
	filtered => {
		console.log(filtered);
	}
);
</script>

<style scoped></style>
