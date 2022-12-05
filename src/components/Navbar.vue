<template>
	<nav class="h-[70px] min-h-[70px]: bg-primary flex sticky top-0 z-[50]">
		<div class="flex items-center justify-between w-full px-4 md:px-8">
			<div class="flex items-center gap-4">
				<router-link to="/" class="text-white font-bold text-lg md:text-2xl">Image Uploader</router-link>
			</div>
			<div class="flex items-center gap-1" v-if="!isAuthenticated">
				<router-link
					active-class="bg-white text-gray-900"
					to="/login"
					class="text-white font-medium px-2 py-1 transition rounded"
					>Sign in</router-link
				>
				<router-link
					active-class="bg-white text-gray-900"
					to="/register"
					class="text-white font-medium px-2 py-1 transition rounded"
					>Sign up</router-link
				>
			</div>
			<div class="flex items-center gap-2" v-else>
				<router-link
					active-class="bg-white text-gray-900 rounded"
					to="/profile"
					class="text-white font-medium px-4 py-2 transition hover:bg-white hover:text-gray-900"
					>My Profile</router-link
				>
				<router-link
					active-class="bg-white text-gray-900 rounded"
					to="/dashboard"
					class="text-white font-medium px-4 py-2 transition rounded hover:bg-white hover:text-gray-900"
					>Dashboard</router-link
				>
				<a
					@click.prevent="store.logout()"
					class="text-white font-medium rounded px-4 py-2 transition hover:bg-white hover:text-gray-900 cursor-pointer"
					>Logout</a
				>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';

const store = useAuthStore();
const isAuthenticated = computed(() => store.isAuthenticated);
</script>

<style scoped>
nav {
	--h: 70px;
	height: var(--h);
	max-height: var(--h);
	min-height: var(--h);
}
</style>
