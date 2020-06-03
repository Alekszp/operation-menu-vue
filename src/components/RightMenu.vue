<template>
  <div class="menu h-full bg-custom-grey-menu relative">
    <div class="flex items-center justify-between mt-4 mx-4">
      <h2 class="text-xl">Все деньги</h2>
      <img class="" src="@/assets/img/logo.svg" alt="logo" />
    </div>
    <money-amount />
    <operations-menu />
    <user-menu />
  </div>
</template>

<script>
import MoneyAmount from './MoneyAmount.vue'
import OperationsMenu from './OperationsMenu.vue'
import UserMenu from './UserMenu.vue'

export default {
  name: "RightMenu",
  components: {
    MoneyAmount,
    OperationsMenu,
    UserMenu
  }
};
</script>

<style>
  .menu {
    width: 300px;
  }
</style>
