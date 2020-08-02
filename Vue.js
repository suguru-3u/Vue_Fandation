// const vm =new Vue({
//   data: {
//   	message: 'Hello word'
//   }
// })
//
// vm.$mount('#app')
// const vm = new Vue({
// 	el: '#app',
//   data(){
//   	return {
//     	message: 'Halleo'
//     }
//   }
// })
//
// window.vm = vm
//
//  vm.$watch(function(){
// 	 return this.message
//  },function(message){
// 	 console.log('変更されました!' + message)
//  })
const vm = new Vue({
	el: '#app',
  data(){
  	return {
    	numbers: [],
			total_num: 0
		}
   },
	watch: {
		numbers(value){
			this.total_num = 0
			this.numbers.forEach(number => {
				this.total_num += number
			})
		}
	}
})


window.vm = vm

 // vm.$watch(function(){
	//  return this.message
 // },function(message){
	//  console.log('変更されました!' + message)
 // })
