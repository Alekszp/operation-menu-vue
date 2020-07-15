<template>
  <div class="bodyOperations bg-gray-FB h-full w-full pr-3 pl-4 overflow-auto">
    <filters />
    <graph />
    <sorting />
    <operations />
    <button class="fixed rounded-full w-16 h-16 bg-gray-2E text-gray-FF text-3xl bottom-0 mb-8 ml-10 left-0">+</button>
    <button class="trash-icon fixed bg-gray-FB bg-opacity-75 border border-gray-D8 rounded-full w-16 h-16 bottom-0 mb-8">
      <icon-base icon-name="trash" width="36" height="26" view-box="4 0 22 26" icon-color="#D8D8D8"><icon-trash /></icon-base>
    </button>

  </div>
</template>



<script>
  import filters from "@/components/Filters";
  import graph from "@/components/Graph";
  import sorting from "@/components/Sorting";
  import operations from "@/components/Operations";
  import IconBase from "./IconBase.vue";
  import IconTrash from './icons/IconTrash.vue'

  export default {
    components: {
      filters,
      graph,
      sorting,
      operations,
      IconBase,
      IconTrash
    }
  };
</script>

<style>
  .bodyOperations::-webkit-scrollbar {
    width: 0px;
    background: transparent;  
  }
  .bodyOperations {
    overflow-x: auto !important;
  }
  .trash-icon {
    right: 320px;
  }
</style>
