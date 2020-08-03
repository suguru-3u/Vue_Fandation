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
const vm = new Vue({
	el: '#app',
  data(){
  	return {
    	button: true
		}
  },
	computed:{
		buttons(){
			return this.button ? '無効':'有効'
		}
	}
})

window.vm = vm
