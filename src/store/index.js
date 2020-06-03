import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import {cloneDeep} from 'lodash'

import {operationsCollection} from './collection.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    isUsersLoading: false,
    operations: operationsCollection,
    currentMonth: null
  },
  getters: {
    getIsUsersLoading: state => {
      return state.isUsersLoading
    },
    getUsersCollection: state => {
      return state.users
    },
    getCurrentMonth: state => {
      return state.currentMonth
    },
    getOperations: state => {
      return state.operations
    },
  },
  mutations: {
    setCurrentMonth(state, param){
      state.currentMonth = param
    },
    copyOperation(state, param){
      state.operations.forEach(month=>{
        month.days.forEach(day=>{
          day.operations.forEach(operation=>{
            if(param === operation.id){
              let newOperation = cloneDeep(operation)
              newOperation.id = uuidv4()
              day.operations.push(newOperation)
            }
          })
        })
      })
    },
  },

  actions: {
    async getUsers({state}) {
      state.isUsersLoading = true
      await axios('https://randomuser.me/api/?results=20')
        .then((res) => {
          state.users = res.data.results
          state.users.forEach(user=>Object.assign(user, {rating: true}))
        }).catch(() => {
          console.log("Ooops! Something went wrong...")
        }).finally(() => state.isUsersLoading = false)
    }
  },
  modules: {

  }
});