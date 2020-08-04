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
// const UserTiltle = {
//   template:`
//     <h2>ユーザーリスト</h2>
//   `
// }
//
// const Userditail = {
//   props:{
//     user:{
//       type:Object
//     }
//   },
//   template:`
//     <div>
//       <h2>選択中のユーザー</h2>
//       {{user.name}}
//     </div>
//   `
// }
//
// const UserList = {
//   components:{
//     'user-title':UserTiltle,
//     'user-detail':Userditail
//   },
// 	data(){
//   	return{
//     	users:[
//       {id:1,name:'ユーザー1'},
//       {id:2,name:'ユーザー2'},
//       {id:3,name:'ユーザー3'}
//       ],
//       select_user:{
//
//       }
//     }
//   },
//   template:`
//     <div>
//       <user-title></user-title>
//     	<ul>
//       	<li v-for="user in users"  :key="user.id" @click="select_user =  user">
//         {{user.name}}
//         </li>
//       </ul>
//       <user-detail :user='select_user'></user-detail>
//     </div>
//     `
// }
// const vm = new Vue({
// 	el:'#app',
//   components:{
//     'user-list':UserList
//   }
// })
// const UserTiltle = {
//   template:`
//     <h2>ユーザーリスト</h2>
//   `
// }
//
// const Userditail = {
//   props:{
//     user:{
//       type:Object
//     }
//   },
//   template:`
//     <div>
//       <h2>選択中のユーザー</h2>
//       {{user.name}}
//     </div>
//   `
// }
const UserForm = {
  template:`
    <div>
      <div>ユーザー名</div>
      <input v-model='user_name' />
      <button @click='update'>名前変更</button>
    </div>
  `,
  props:{
    UserName:{type:String,required:true}
  },
  data(){
    return{
      user_name:this.UserName
    }
  },
  methods:{
    update(){
      this.$emit('update:UserName',this.user_name)
    }
  }
}

const UserList = {
  components:{
    'user-form':UserForm
  },
	data(){
  	return{
    	user_name:'スグル'
    }
  },
  template:`
    <div>
      <div>
        <span>ユーザー名:{{user_name}}</span>
      </div>
      <div>
        <user-form :user-name.sync='user_name'></user-form>
      </div>
    </div>
    `
}
const vm = new Vue({
	el:'#app',
  components:{
    'user-list':UserList
  }
})
