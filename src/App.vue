<template>

  <div id="app" class="bg-gray-200 w-full h-screen">
    <Navigation/>
    <router-view class="container mx-auto" :user="user"/>
    <Footer/>
  </div>

</template>


<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
// import Firebase from 'firebase'
import db from './db.js'

export default {
  name: 'App',
  data: function(){
      return{
          user: null
      };
  },
  mounted(){
      db.collection("users")
      .doc("uIVgChm4DsIqGgjx1oB4")
      .get()
      .then(snapshot => {
          this.user = snapshot.data().name;
      })
  },
  components: {
    Navigation,
    Footer
  }
};
</script>