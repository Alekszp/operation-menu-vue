<template>
  <div class="flex justify-between h-auto w-full text-sm">
    <div class="flex items-center">
      <div class="flex items-center">
        <div class="text-gray-2E text-opacity-60 font-medium">Группировать:</div>
        <button class="flex items-center font-medium justify-between border border-gray-400 rounded-lg h-10 mx-3 px-3 w-56">
          <div class="mr-3">По дате</div>
          <img src="@/assets/icons/arrow-down.svg" alt="down" />
          <!-- get to much time to set up view as mockup -->
          <!-- <icon-base class="mt-2 ml-2" icon-name="arrow-down"><icon-arrow-down /></icon-base> -->
        </button>
      </div>
      <div class="flex items-center">
        <div class="text-gray-2E text-opacity-60 font-medium mr-3">Вид:</div>
          <div class="bg-gray-EA mr-3 w-8 h-8 rounded-lg flex pl-2 items-center">
            <icon-base icon-name="arrow-list"><icon-list /></icon-base>
          </div>
          <div class="mr-3 text-gray-2E text-opacity-60 w-8 h-8 border border-gray-E5 rounded-lg flex pl-2 items-center">
            <icon-base icon-name="arrow-calendar"><icon-calendar /></icon-base>
          </div>
          <!-- get to much time to set up view as mockup -->
      </div>
    </div>
    <div>
      <button class="border bg-gray-E5 font-medium rounded-lg h-10 px-3">Все операции</button>
      <button class="border border-gray-E5 font-medium rounded-lg h-10 px-3 mx-3 text-gray-2E text-opacity-60">Будущие</button>
      <button class="border border-gray-E5 font-medium rounded-lg h-10 px-3 text-gray-2E text-opacity-60">Прошедшие</button>
    </div>
  </div>
</template>



<script>
import IconBase from "./IconBase.vue";
// // import IconArrowLeft from './icons/IconArrowLeft.vue'
// // import IconArrowRight from './icons/IconArrowRight.vue'
// import IconArrowDown from './icons/IconArrowDown.vue'
import IconCalendar from "./icons/IconCalendar.vue";
import IconList from "./icons/Iconlist.vue";


export default {
  components: {
    IconBase,
    IconList,
    IconCalendar
  },
  props: {}
};
</script>

<style>
.input-width {
  width: 400px;
  background: url("../assets/icons/search.svg") no-repeat scroll 360px 10px;
}
</style>
