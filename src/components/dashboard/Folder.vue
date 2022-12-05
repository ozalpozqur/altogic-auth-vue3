<template>
	<router-link
		active-class="ring ring-2 ring-offset-2 ring-primary"
		:to="{ name: 'folder', params: { slug: folder.slug } }"
		class="cursor-pointer p-2 flex items-center justify-center border aspect-square flex-col gap-2"
	>
		<div class="flex-1 w-full h-12 overflow-hidden flex items-center justify-center">
			<FolderIcon class="text-primary" />
		</div>
		<span class="folder-name text-center text-sm font-medium mt-auto">{{ folder.name }}</span>
	</router-link>
</template>

<script setup>
import FolderIcon from '@/components/ui/FolderIcon.vue';

defineProps({
	folder: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.folder-name {
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
