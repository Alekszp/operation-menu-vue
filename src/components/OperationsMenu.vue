<template>
  <div class="operations-menu mt-4 mx-4">
    <ul>
      <li class="flex items-center bg-gray-EE font-medium rounded-lg pl-3 py-2">
        <icon-base icon-name="operation"><icon-operation /></icon-base>
        <span class="ml-3">Операции</span>
      </li>
      <li class="flex items-center font-medium text-gray-2E text-opacity-60 rounded-lg pl-3 py-2">
        <icon-base icon-name="reports"><icon-reports /></icon-base>
        <span class="ml-3">Отчетьі</span>
      </li>
      <li class="flex items-center font-medium text-gray-2E text-opacity-60 rounded-lg pl-3 py-2">
        <icon-base icon-name="Contragents"><icon-contragents /></icon-base>
        <span class="ml-3">Контрагентьі</span>
      </li>
      <li class="flex items-center font-medium text-gray-2E text-opacity-60 rounded-lg pl-3 py-2">
        <icon-base icon-name="work"><icon-work /></icon-base>
        <span class="ml-3">Проектьі</span>
      </li>
      <li class="flex items-center font-medium text-gray-2E text-opacity-60 rounded-lg pl-3 py-2">
        <icon-base icon-name="accounts"><icon-accounts /></icon-base>
        <span class="ml-3">Статьи расходов</span>
      </li>
      <li class="flex items-center font-medium text-gray-2E text-opacity-60 rounded-lg pl-3 py-2">
        <img class="peson-icon-style" src="@/assets/img/person-icon.svg" alt="copy" />
            <!-- get to much time to set up view as mockup -->
        <!-- <icon-base icon-name="person"><icon-person /></icon-base> -->
        <span class="ml-3">Сотрудники</span>
      </li>
    </ul>
  </div>
  
</template>

<script>
  import IconBase from "./IconBase.vue";
  import IconOperation from './icons/IconOperation.vue'
  import IconReports from './icons/IconReports.vue'
  import IconContragents from './icons/IconContragents.vue'
  import IconWork from './icons/IconWork.vue'
  import IconAccounts from './icons/IconAccounts.vue'
  // import IconPerson from './icons/IconPerson.vue'

  export default {
    name: "OperationsMenu",
    components: {
      IconBase,
      IconOperation,
      IconReports,
      IconContragents,
      IconWork,
      IconAccounts,
      //IconPerson
    }
  };
</script>

<style scoped>
  .operation-menu {
    color: #2E2E2E;
  }
  .operations-menu li:hover {
    background-color: #EEEEEE;
    color: #2E2E2E;
    cursor: pointer;
  }
  .operations-menu li:hover .peson-icon-style{
    opacity: 1;
  }
  .peson-icon-style {
    opacity: .6;
  }
</style>
