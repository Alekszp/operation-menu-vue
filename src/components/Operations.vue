<template>
  <div class="h-auto w-full operations">
    <div v-for="(day, i) in currentMonth.days" :key='i'>
      <div class="flex justify-between my-3">
        <div class="flex items-center">
          <div class="text-xl mr-2">{{`${day.day} ${formattedMonthName()}`}}</div>
          <div>
            <img src="@/assets/icons/arrow-down.svg" alt="down" />
            <!-- get to much time to set up view as mockup -->
            <!-- <icon-base class="mt-2 ml-2" icon-name="arrow-down"><icon-arrow-down /></icon-base> -->
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-sm text-gray-600">Добавить</div>
          <button class="rounded-full bg-gray-400 text-gray-500 h-8 w-8 ml-1 text-2xl leading-snug font-bold">+</button>
        </div>
      </div>
      <hr />
      <div class="flex items-center justify-between h-12 hover:bg-grey-100 hover:shadow-md" v-for='(dayOperation, i) in day.operations' :key='i' draggable="true" @drag="dragging" @dragstart="dragStart($event, dayOperation)">
        <div class="rounded bg-green-200 w-8 h-8 pr-3 pb-3 ml-2" v-if='dayOperation.trend === "up"'>
          <icon-base class="h-6" icon-name="operation-up" iconColor="green"><icon-operation-up /></icon-base>
        </div>
        <div class="rounded bg-red-200 w-8 h-8 pr-3 ml-2" v-else>
          <icon-base class="h-6" icon-name="operation-down" iconColor="red"><icon-operation-down /></icon-base>
        </div>
        <div class="companyNameWidth items-center text-xs ml-3">
          <div class="name-overflow text-left">{{dayOperation.companyName}}</div>
          <div class="flex">
            <span class="text-gray-500">Со счета:&nbsp;</span>
            <span>{{dayOperation.fromAccount}}</span>
          </div>
        </div>
        <div class="targetWidth items-center text-xs ml-3 w-32">
          <div class="name-overflow text-left">{{dayOperation.target}}</div>
          <div class="text-gray-500 text-left">{{dayOperation.fromAccount}}</div>
        </div>
        <div class="descriptionWidth items-center text-xs ml-3 w-64">
          <div class="text-left">{{dayOperation.description}}</div>
        </div>
        <div class="paymentStatusWidth items-center text-xs ml-3 w-24">
          <button class='rounded px-3 py-1' :class="{ 'bg-green-200' : dayOperation.paymentStaus === 'Оплачено', 'bg-red-200' : dayOperation.paymentStaus === 'Не оплачено'}">{{dayOperation.paymentStaus}}</button>
        </div>
        <div class="items-center ml-3 w-full">
          <div class='flex justify-end font-bold' :class="{ 'text-green-500' : dayOperation.trend === 'up', 'text-red-500' : dayOperation.trend === 'down'}" >
            <span>{{dayOperation.trend === 'up' ? '+' : '-'}}&nbsp;</span>
            <span>{{`${dayOperation.amount} ${dayOperation.currency}`}}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <hr class="w-full">
        <div class="flex items-center whitespace-no-wrap text-xs mx-4 mt-2 text-gray-500">
          <span>Копировать операцию</span>
          <div class="flex items-center justify-center rounded-full bg-gray-400 text-gray-500 h-8 w-8 ml-3 text-2xl leading-snug font-bold" @drop="drop" @dragover="allowDrop">
            <img class="" src="@/assets/img/copy-icon.svg" alt="copy" />
            <!-- get to much time to set up view as mockup -->
          <!-- <icon-base class="h-6" icon-name="operation-copy"><icon-copy /></icon-base> -->
          </div>
          
        </div>
        <hr class="w-full">
      </div>
    </div>
  </div>
</template>



<script>
  import {mapGetters, mapMutations} from 'vuex'
  import {monthsEnum, monthsNames} from '../store/collection'
  import IconBase from "./IconBase.vue";
  import IconOperationUp from './icons/IconOperation-+.vue'
  import IconOperationDown from './icons/IconOperation--.vue'
  // import IconCopy from './icons/IconCopy.vue'

  export default {
    components: {
      IconBase,
      IconOperationUp,
      IconOperationDown,
      // IconCopy
    },
    data() {
      return {
        // monthList: [],
        currentMonth: {}
      }
    },
    computed: {
      ...mapGetters([
      'getCurrentMonth', 'getOperations'
    ])
    },
    watch: {
      getCurrentMonth(newVal, oldVal){
        this.currentMonth = this.getOperations.find(m=>this.getCurrentMonth === m.month)
      }
    },
    created(){
      
      // this.getOperations.forEach(i=>{
      //   monthsNames.forEach((name, index)=>{
      //     if(index === i.month - 1) this.monthList.push(name)
      //   })
      // })
      this.currentMonth = this.getOperations.find(m=>this.getCurrentMonth === m.month)
    },
    methods: {
      ...mapMutations([
        'setCurrentMonth', 'copyOperation'
      ]),
      formattedMonthName(){
        switch(this.getCurrentMonth){
          case 1: return "января"
          case 2: return "февраля"
          case 3: return "марта"
          case 4: return "апреля"
          case 5: return "мая"
          case 6: return "июня"
          case 7: return "июля"
          case 8: return "августа"
          case 9: return "сентября"
          case 10: return "октября"
          case 11: return "ноября"
          case 12: return "декабря" 
        }
      },
      dragStart(e, dayOperation){
        e.dataTransfer.setData("operationId", dayOperation.id);
      },
      dragging(e){
        let val = e.target
        
      },
      allowDrop(e) {
        e.preventDefault();
      },
      drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("operationId");
        this.copyOperation(data)
      }
    }
  }
</script>

<style scoped>

.companyNameWidth {
  max-width: 230px;
  min-width: 230px;
}
.targetWidth {
  max-width: 150px;
  min-width: 150px;
}
.descriptionWidth {
  max-width: 230px;
  min-width: 230px;
}
.paymentStatusWidth {
  max-width: 90px;
  min-width: 90px;
}
.name-overflow{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
