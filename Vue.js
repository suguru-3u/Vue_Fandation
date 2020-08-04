// // // const vm =new Vue({
// // //   data: {
// // //   	message: 'Hello word'
// // //   }
// // // })
// // //
// // // vm.$mount('#app')
// // // const vm = new Vue({
// // // 	el: '#app',
// // //   data(){
// // //   	return {
// // //     	message: 'Halleo'
// // //     }
// // //   }
// // // })
// // //
// // // window.vm = vm
// // //
// // //  vm.$watch(function(){
// // // 	 return this.message
// // //  },function(message){
// // // 	 console.log('変更されました!' + message)
// // //  })
// // const vm = new Vue({
// // 	el: '#app',
// //   data(){
// //   	return {
// //     	numbers: [],
// // 			total_num: 0
// // 		}
// //    },
// // 	watch: {
// // 		numbers(value){
// // 			this.total_num = 0
// // 			this.numbers.forEach(number => {
// // 				this.total_num += number
// // 			})
// // 		}
// // 	}
// // })
// //
// //
// // window.vm = vm
// //
// //  // vm.$watch(function(){
// // 	//  return this.message
// //  // },function(message){
// // 	//  console.log('変更されました!' + message)
// //  // })
// const vm = new Vue({
// 	el: '#app',
//   data(){
//   	return {
//     	message: 'hello'
// 		}
//    }
// })
//
// window.vm = vm
// const vm = new Vue({
// 	el: '#app',
//   data(){
//   	return {
//     	message: 'hello'
// 		}
//    }
// })
//
// window.vm = vm
// const vm = new Vue({
// 	el: '#app',
//   data(){
//   	return {
//     	sum: 300000
// 		}
//   },
//   filters:{
//   	numberWithDelimiter(value){
//     if (!value) return '0'
//     return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
//     }
//   }
// })
//
// window.vm = vm
// const vm = new Vue({
// 	el: '#app',
//   data(){
//   	return {
//     	button: true
// 		}
//   },
// 	computed:{
// 		button(){
// 			return this.button ? '無効':'有効'
// 		}
// 	}
// })
//
// window.vm = vm
// const vm = new Vue({
// 	el: '#app',
//   data(){
//   	return {
//     	message: 'Hello'
// 		}
//   }
// })
//
// window.vm = vm
// const vm = new Vue({
// 	el: '#app',
//   data(){
//   	return {
//     	message: 'Hello'
// 		}
//   }
// })
//
// window.vm = vm
// new Vue({
//   el: "#app",
//   data: {
//     todos: [
//       { text: "Learn JavaScript", done: false },
//       { text: "Learn Vue", done: false },
//       { text: "Play around in JSFiddle", done: true },
//       { text: "Build something awesome", done: true }
//     ]
//   },
//   methods: {
//   	toggle: function(todo){
//     	todo.done = !todo.done
//     }
//   }
// })
Vue.component('user-list',{
	data(){
  	return{
    	users:[
      {id:1,name:'ユーザー1'},
      {id:2,name:'ユーザー2'},
      {id:3,name:'ユーザー3'}
      ]
    }
  },
  template:`
  	<ul>
    	<li v-for="user in users"  :key="user.id">
      {{user.name}}
      </li>
    </ul>
    `
})
const vm = new Vue({
	el:'#app'
})
