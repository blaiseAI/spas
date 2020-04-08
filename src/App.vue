<template>
  <div id="app" class="bg-gray-200 w-full h-screen">
    <Navigation/>
    <router-view class="container mx-auto"/>
  </div>
</template>
<script>

import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>