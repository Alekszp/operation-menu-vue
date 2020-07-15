<template>
  <div class="h-auto w-full operations">
    <div v-for="(day, i) in currentMonth.days" :key='i'>
      <div class="flex justify-between my-3">
        <div class="flex items-center font-medium">
          <div class="text-2xl mr-2">{{`${day.day} ${formattedMonthName()}`}}</div>
          <div>
            <img src="@/assets/icons/arrow-down.svg" alt="down" />
            <!-- get to much time to set up view as mockup -->
            <!-- <icon-base class="mt-2 ml-2" icon-name="arrow-down"><icon-arrow-down /></icon-base> -->
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-sm text-gray-2E text-opacity-60">Добавить</div>
          <button class="rounded-full bg-gray-EE text-gray-2E text-opacity-60 h-8 w-8 ml-1 text-2xl leading-snug font-medium">+</button>
        </div>
      </div>
      <hr />
      <div class="w-full flex items-center justify-between h-12 hover:bg-grey-100 hover:shadow-md" v-for='(dayOperation, i) in day.operations' :key='i' draggable="true" @drag="dragging" @dragstart="dragStart($event, dayOperation)">
        <div class='w-1/24'>
          <div class="rounded-lg bg-green-D7EAE3 w-8 h-8 pr-3 pb-3 ml-2" v-if='dayOperation.trend === "up"'>
            <icon-base icon-name="operation-up" height="24" view-box="0 0 18 20" icon-color="#167951"><icon-operation-up /></icon-base>
          </div>
          <div class="rounded-lg bg-red-FFD3C2 w-8 h-8 pr-3 ml-2" v-else>
            <icon-base icon-name="operation-down" height="24" view-box="0 0 18 20" icon-color="#E04F1A"><icon-operation-down /></icon-base>
          </div>
        </div>
        <div class="w-2/5 companyNameWidth items-center text-xs ml-3">
          <div class="name-overflow text-left">{{dayOperation.companyName}}</div>
          <div class="flex">
            <span class="text-gray-2E text-opacity-60">Со счета:&nbsp;</span>
            <span>{{dayOperation.fromAccount}}</span>
          </div>
        </div>
        <div class="w-1/4 targetWidth items-center text-xs ml-3 w-32">
          <div class="name-overflow text-left">{{dayOperation.target}}</div>
          <div class="text-gray-2E text-opacity-60 text-left">{{dayOperation.fromAccount}}</div>
        </div>
        <div class="w-1/4 descriptionWidth items-center text-xs ml-3 w-64">
          <div class="text-left">{{dayOperation.description}}</div>
        </div>
        <div class="w-1/8 paymentStatusWidth items-center text-xs ml-3 w-24">
          <button class='rounded-lg px-3 py-1 font-medium' :class="{ 'bg-green-D7EAE3 text-green-167951' : dayOperation.paymentStaus === 'Оплачено', 'bg-red-FFD3C2 text-red-200' : dayOperation.paymentStaus === 'Не оплачено'}">{{dayOperation.paymentStaus}}</button>
        </div>
        <div class="w-1/4 items-center ml-3">
          <div class='flex justify-end font-medium' :class="{ 'text-green-1A8D5F' : dayOperation.trend === 'up', 'text-red-E04F1A' : dayOperation.trend === 'down'}" >
            <span>{{dayOperation.trend === 'up' ? '+' : '-'}}</span>
            <span>{{dayOperation.amount.toLocaleString('ru-RU')}}</span>
            <span v-html='dayOperation.currency'></span>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <hr class="w-full">
        <div class="flex items-center whitespace-no-wrap text-xs mx-4 mt-2 text-gray-2E text-opacity-60">
          <span>Копировать операцию</span>
          <div class="flex items-center justify-center rounded-full bg-gray-EA text-gray-500 h-8 w-8 ml-3 text-2xl leading-snug font-medium" @drop="drop" @dragover="allowDrop">
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

