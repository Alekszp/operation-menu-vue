<template>
  <div class="bodyOperations h-screen w-full pr-3 overflow-auto relative">
    <filters />
    <graph />
    <sorting />
    <operations />
    <button class="absolute bottom-10 right-10">
      <icon-base class="h-6" icon-name="trash"><icon-trash /></icon-base>
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
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
</style>
