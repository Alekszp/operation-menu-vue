<template>
  <div class="flex h-auto w-full text-sm">
    <div class="flex">
      <button class="flex items-center justify-center border border-gray-E5 rounded-lg w-10 h-10" @click='changeOperationsMonth(0)' >
        <img src="@/assets/icons/arrow-left.svg" alt="left" />
        <!-- get to much time to set up view as mockup -->
        <!-- <icon-base icon-name="arrow-left"><icon-arrow-left /></icon-base> -->
      </button>
      <div class="flex flex items-center justify-center mx-2 px-2 border border-gray-E5 rounded-lg">
        <icon-base icon-name="calendar">
          <icon-calendar />
        </icon-base>
        <div class="text-center ml-2">{{currentMonthName}}</div>
      </div>
      <button class="flex items-center justify-center border border-gray-E5 rounded-lg w-10 h-10" @click='changeOperationsMonth(1)'>
        <img src="@/assets/icons/arrow-right.svg" alt="right" />
        <!-- get to much time to set up view as mockup -->
        <!-- <icon-base icon-name="arrow-right"><icon-arrow-right /></icon-base> -->
      </button>
    </div>
    <input
      class="input-width ml-4 mr-4 border border-gray-E5 rounded-lg pl-2"
      type="text"
      placeholder="Поиск по проекту, контрагенту или счёту"
    />
    <div class="flex items-center border bg-gray-EE rounded-lg">
      <button class="flex items-center rounded-lg bg-white w-24 h-10">
        <icon-base class="ml-2" icon-name="filter">
          <icon-filter />
        </icon-base>
        <div class="text-center ml-1">Фильтр</div>
        <img class="ml-3 mr-2" src="@/assets/icons/arrow-down.svg" alt="down" />
        <!-- get to much time to set up view as mockup -->
        <!-- <icon-base icon-name="arrow-down"><icon-arrow-down /></icon-base> -->
      </button>
      <div v-for='(user, i) in users' :key='i'>
        <avatar :imageSrc='user.picture.thumbnail' :rating='user.rating' />
      </div>
      <div class="v-full">
        <button class="rounded-full bg-gray-FB text-gray-2E text-opacity-60 h-8 w-8 mx-1 text-2xl leading-snug font-medium">+</button>
      </div>
    </div>
  </div>
</template>



<script>
import IconBase from "./IconBase.vue";
// import IconArrowLeft from './icons/IconArrowLeft.vue'
// import IconArrowRight from './icons/IconArrowRight.vue'
// import IconArrowDown from './icons/IconArrowDown.vue'
import IconCalendar from "./icons/IconCalendar.vue";
import IconFilter from "./icons/IconFilter.vue";
import Avatar from "./Avatar.vue";
import {mapGetters, mapMutations} from 'vuex'
import {monthsEnum, monthsNames} from '../store/collection'

export default {
  components: {
    IconBase,
    // IconArrowLeft,
    // IconArrowRight,
    // IconArrowDown,
    IconCalendar,
    IconFilter,
    Avatar
  },
  data(){
    return {
      monthList: [],
      users: []
    }
  },
  computed: {
      ...mapGetters([
      'getCurrentMonth',
      'getOperations',
      'getUsersCollection'
    ]),
    currentMonthName(){
      return monthsNames.find((month, i)=>{
        return i === this.getCurrentMonth - 1
      })
    }
  },
  created(){
      this.getOperations.forEach(i=>{
        monthsNames.forEach((name, index)=>{
          if(index === i.month - 1) this.monthList.push(name)
        })
      })

      this.setCurrentMonth(monthsEnum.June) 
      this.getUsersCollection.forEach((user, i)=>{
        if(i < 4) this.users.push(user)
      })

      
  },
  methods: {
    ...mapMutations([
        'setCurrentMonth'
      ]),

    changeOperationsMonth(param){
      if(param === 0){
        let isDecreasePossible = this.getOperations.find(m => m.month === this.getCurrentMonth - 1) === undefined ? false : true
        if(isDecreasePossible) this.setCurrentMonth(this.getCurrentMonth - 1)

      } else {
        let isIncreasePossible = this.getOperations.find(m => m.month === this.getCurrentMonth + 1) === undefined ? false : true
        if(isIncreasePossible) this.setCurrentMonth(this.getCurrentMonth + 1)
      }
      
    }
  }
};
</script>

<style>
.input-width {
  width: 400px;
  background: url("../assets/icons/search.svg") no-repeat scroll 360px 12px;
}
</style>
