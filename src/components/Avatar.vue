<template>
  <div class="flex items-center v-full ml-1">
    <div class="rounded-full bg-white h-8 w-8 relative">
      <div v-if='rating' class="starWrapper absolute w-3 h-3 rounded-full bg-white">
        <icon-base icon-name="star" width='30' height="30"><icon-star /></icon-base>
      </div>
      <img class="rounded-full bg-white h-8 w-8" :src='imageSrc' />
    </div>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconStar from './icons/IconStar.vue'

export default {
  name: 'Avatar',
  components: {
    IconBase,
    IconStar
  },
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    rating: {
      type: Boolean
    }
  },

};
</script>

<style>
  .starWrapper {
    left: -2px;
    top: -2px;
        padding-top: 1px;
    padding-left: 1px;
  }
</style>