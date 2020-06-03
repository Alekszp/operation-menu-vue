<template>
  <div class="w-full absolute bottom-0 left-0 rounded flex align-center justify-between bg-gray-400 py-3 px-3">
    <avatar :imageSrc='getUsersCollection[5].picture.thumbnail' />
    <div class="text-xs">
      <div class="text-left">{{`${getUsersCollection[5].name.first} ${getUsersCollection[5].name.last}`}}</div>
      <div class="text-left text-gray-600">Newage System</div>
    </div>
    <div class="space-y-2">
      <div class="flex justify-center">
        <img class="" src="@/assets/img/settings-icon.svg" alt="copy" />
      </div>
      <div class="flex justify-center">
        <img class="" src="@/assets/img/help-icon.svg" alt="copy" />
      </div>
      <!-- get to much time to set up view as mockup -->
      <!-- <icon-base icon-name="settings"><icon-settings /></icon-base>
      <icon-base icon-name="help"><icon-help /></icon-base> -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import IconBase from "./IconBase.vue";
// import IconSettings from './icons/IconSettings.vue'
// import IconHelp from './icons/IconHelp.vue'
import Avatar from './Avatar.vue'

export default {
  name: "UserMenu",
  components: {
    // IconBase,
    // IconSettings,
    // IconHelp,
    Avatar
  },
  computed: {
    ...mapGetters([
      'getUsersCollection'
    ])
  }
};
</script>

<style>
  .menu {
    width: 300px;
  }
</style>
