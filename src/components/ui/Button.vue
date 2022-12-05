<template>
	<button
		class="border-2 rounded-[10px] relative active:top-0.5 transition font-medium whitespace-nowrap text-[15px] py-2 p-4"
		:class="{
			'text-primary border-primary': variant === 'outline',
			'bg-primary border-primary text-white': variant === 'primary',
		}"
	>
		<slot />
	</button>
</template>

<script setup>
defineProps({
	variant: {
		type: String,
		default: 'outline',
	},
});
</script>
