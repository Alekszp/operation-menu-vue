<template>
  <div id="app">
    <div class='flex h-screen p-4 text-gray-2E' v-if='!getIsUsersLoading'>
      <body-vue />
      <right-menu  />
    </div>
    <div class="flex items-center justify-center h-screen w-full bg-black bg-opacity-25" v-else >
      <spinner size="80" :line-size='7' />
    </div>
    
  </div>
</template>
<script>
import bodyVue from "@/components/Body.vue";
import rightMenu from "@/components/RightMenu.vue";
import Spinner from 'vue-simple-spinner'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    bodyVue,
    rightMenu,
    Spinner
  },
  created(){
    this.getUsers()
  },
  methods: {
    ...mapActions([
      'getUsers'
    ])
  },
  computed: {
    ...mapGetters([
      'getIsUsersLoading', 'getUsersCollection'
    ])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
