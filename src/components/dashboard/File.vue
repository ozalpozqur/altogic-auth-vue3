<template>
	<div class="cursor-pointer p-2 flex items-center justify-center border aspect-square flex-col gap-2">
		<div class="flex-1 w-full h-12 overflow-hidden flex items-center justify-center">
			<img draggable="false" class="object-contain" :src="file.publicPath" :alt="file.fileName" />
		</div>
		<span class="file-name text-center text-sm font-medium mt-auto">{{ file.fileName }}</span>
	</div>
</template>

<script setup>
defineProps({
	file: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.file-name {
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
