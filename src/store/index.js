import Vuex from 'vuex'
import Vue from 'vue'
import musiclist from './musiclist.js';
Vue.use(Vuex)

/**
 * state: {
 *    src: '',当前audio的src
 *    historyMusic : [], 历史歌曲  100条记录
 *    loveMusic: [],用户收藏的音乐
 *    userCofig: {},用户设置数据
 *    notes:[],日记
 * }
 * 
 */
const setLocalStorage = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('state', JSON.stringify(state))
  })
}
var state = JSON.parse(localStorage.getItem('state')) || {}
const store = new Vuex.Store({
  state: Object.assign({
    currentMusic: {},
    historyMusic: [],
    loveMusic: [],
    index: 0,
    userConfig: musiclist,
    notes: [],
    todos: [],
    playerShow: false,
    source: false,
    channel: null,
    listindex: 0,
    channels:[],
    one: null
  }, state),
  getter: {

  },
  actions: {
    DelFevItem({commit},i){
      commit('DelFevItem',i)
    },
    delHistoryItem({commit},i){
      commit('delHistoryItem',i)
    },
    setChannels({commit},channels){
      commit('setChannels',channels)
    },
    setOne({commit},one){
      commit('setOne',one)
    },
    chooseMusic({ commit }, index) {
      commit('chooseMusic', index)
    },
    favNext({ commit }) {
      commit('favNext')
    },
    assignPlay({ commit }, index) {
      commit('assignPlay', index)
    },
    changePlayerShow({ commit }) {
      commit('changePlayerShow')
    },
    addTodo({ commit }, todo) {
      commit('addTodo', todo)
    },
    deleteTodoItem({ commit }, index) {
      commit('deleteTodoItem', index)
    },
    toggleTodoStatus({ commit }, index) {
      commit('toggleTodoStatus', index)
    },
    next({ commit, state }) {
      commit('next', state.userConfig[state.listindex])
    },
    addSong({ commit }) {
      commit('addSong')
    },
    addNote({ commit }, note) {
      commit('addNote', note)
    },
    pev({ commit }) {
      commit('pev')
    },
    moveOut({commit},aid){
      commit('moveOut',aid)
    }
  },
  mutations: {
    DelFevItem(state,i){
      state.loveMusic.splice(i,1)
    },
    delHistoryItem(state,i){
      state.historyMusic.splice(i,1)
    },
    setChannels(state,channels){
      state.channels = channels
    },
    setOne(state,one){
      state.one = one
    },
    moveOut(state,aid){
      state.loveMusic.forEach((item,index)=>{
        if(item.aid==aid){
          state.loveMusic.splice(index,1)
        }
      })
    },
    chooseMusic(state, index) {
      state.source = false
      state.currentMusic = state.historyMusic[index]
    },
    favNext(state) {
      ++state.index
      if (state.index >= state.loveMusic.length) {
        state.index = 0
      }
      state.currentMusic = state.loveMusic[state.index]
    },
    assignPlay(state, index) {
      state.index = index
      state.currentMusic = state.loveMusic[index]
      state.source = true
    },
    changePlayerShow(state) {
      state.playerShow = !state.playerShow
    },
    addTodo(state, todo) {
      state.todos.unshift(todo)
    },
    deleteTodoItem(state, index) {
      state.todos.splice(index, 1)
    },
    toggleTodoStatus(state, index) {
      state.todos[index].done = !state.todos[index].done
    },
    pev(state) {
      if (state.currentMusic.uid === state.historyMusic[0].uid) {
        state.currentMusic = state.historyMusic[1]
      } else {
        state.historyMusic.forEach((item, index) => {
          if (item.uid === state.currentMusic.uid) {
            state.currentMusic = state.historyMusic[index + 1]
            return;
          } else if (state.historyMusic.length === index + 1) {
            state.currentMusic = state.historyMusic[0]
          }
        })
      }
    },
    next(state, song) {
      state.listindex++
      state.source = false
      state.currentMusic = song
      let flag = false, i;
      if (state.historyMusic.length == 0) {
        state.historyMusic.forEach((item, index) => {
          if (song.aid === item.aid) {
            i = index
            flag = true
          }
        })
        if (flag) {
          state.historyMusic.splice(index, 1)
        } else if (state.historyMusic.length > 100) {
          state.historyMusic.pop()
        }
      }

      state.historyMusic.unshift(song)
    },
    addSong(state) {

      state.loveMusic.unshift(state.currentMusic)

    },
    addNote(state, note) {
      if (state.notes.length !== 0 && state.notes[0].year === note.year) {
        if (state.notes[0].list[0].month === note.month) {
          if (state.notes[0].list[0].list[0].date === note.date) {
            state.notes[0].list[0].list[0].notes.unshift(note.content)
          } else {
            state.notes[0].list[0].list.unshift({
              date: note.date,
              notes: [note.content]
            })
          }
        } else {
          state.notes[0].list.unshift({
            month: note.month,
            list: [{
              date: note.date,
              notes: [note.content]
            }]
          })
        }
      } else {
        state.notes.unshift({
          year: note.year,
          list: [{
            month: note.month,
            list: [{
              date: note.date,
              notes: [note.content]
            }]
          }]
        })
      }
    }
  },
  plugins: [setLocalStorage]
})

export default store