<script setup>
import { useAuthStore } from '@/stores/auth';
import Avatar from '@/components/Avatar.vue';
const auth = useAuthStore();
</script>

<template>
	<section class="h-screen py-4 space-y-4 flex flex-col text-center items-center">
		<Avatar />
		<h1 class="text-3xl">Hello, {{ auth.user.name }}</h1>
		<button @click="auth.logout" class="bg-gray-400 rounded py-2 px-3 text-white">Logout</button>
	</section>
</template>
