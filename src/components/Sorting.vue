<template>
  <div class="flex justify-between h-auto w-full text-sm">
    <div class="flex items-center">
      <div class="flex items-center">
        <div class="text-gray-600">Группировать:</div>
        <button class="flex items-center justify-between border border-gray-400 rounded h-10 mx-3 px-3 w-56">
          <div class="mr-3">По дате</div>
          <img src="@/assets/icons/arrow-down.svg" alt="down" />
          <!-- get to much time to set up view as mockup -->
          <!-- <icon-base class="mt-2 ml-2" icon-name="arrow-down"><icon-arrow-down /></icon-base> -->
        </button>
      </div>
    </div>
    <div>
      <button class="border bg-gray-400 rounded h-10 px-3 text-gray-600">Все операции</button>
      <button class="border border-gray-400 rounded h-10 px-3 mx-3 text-gray-600">Будущие</button>
      <button class="border border-gray-400 rounded h-10 px-3 text-gray-600">Прошедшие</button>
    </div>
  </div>
</template>



<script>
// import IconBase from "./IconBase.vue";
// // import IconArrowLeft from './icons/IconArrowLeft.vue'
// // import IconArrowRight from './icons/IconArrowRight.vue'
// import IconArrowDown from './icons/IconArrowDown.vue'
// import IconCalendar from "./icons/IconCalendar.vue";
// import IconFilter from "./icons/IconFilter.vue";


export default {
  components: {
    //IconBase,
    // // IconArrowLeft,
    // // IconArrowRight,
    //IconArrowDown,
    // IconCalendar,
    // IconFilter
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
