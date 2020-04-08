<template>
    <div class="mt-3">
        <div class="text-center">Welcome Back <span class="text-indigo-800 font-extrabold">{{user}}</span></div>
        <div class="container mx-auto">
            <div class="px-4">
                <div class="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
                    <h1 class="text-2xl font-medium mb-2">Let's Build: A Meeting Log</h1>
                    <h2 class="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Vue Firebase</h2>
                    <p>This simple app creates meetings, allow people to check in, and picks random users to award giveaways.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  props: ["user"]
};
</script>