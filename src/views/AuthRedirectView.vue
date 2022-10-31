<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import altogic from '@/libs/altogic';

const auth = useAuthStore();
const route = useRoute();
const router = useRouter();
const errors = ref(null);
const { status, access_token, action } = route.query;

onMounted(() => {
	loginWithToken();
});

async function loginWithToken() {
	if (status === '200' && access_token && action === 'email-confirm') {
		const { user, session, errors: apiErrors } = await altogic.auth.getAuthGrant(access_token);
		if (!apiErrors) {
			auth.setSession(session);
			auth.setUser(user);
			await router.push({ name: 'profile' });
		} else {
			errors.value = apiErrors;
		}
	} else {
		await router.push({ name: 'home' });
	}
}
</script>
<template>
	<section class="h-screen flex flex-col gap-4 justify-center items-center">
		<div class="text-center" v-if="!errors">
			<p class="text-6xl">Please wait</p>
			<p class="text-3xl">You're redirecting to your profile...</p>
		</div>
		<div class="text-center text-red-500 text-3xl" v-else>
			<p v-for="(error, index) in errors.items">{{ error.message }}</p>
		</div>
	</section>
</template>
