const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    // getFinalPrice(price) {
    //   return '¥' + price.toFixed(2)
    // }
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      //普通的for循环
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice
      //2.for (let i in/of this.books)
      // let totalPrice = 0
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //3. for (let i in  this.books)
      // let totalPrice = 0
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice



      //reduce/  map   filter 过滤

      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)


    }
  },
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }
})

//函数式编程  /命令式编程
//编程范式   面向对象编程   对象      /函数时编程    第一公民函数

//filter filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
//true 函数内部将符合条件的加入
//false 函数内部过滤
const nums = [10, 20, 10, 10, 100, 111, 555, 888]
///一步到位

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((prev, cur) => prev + cur)
console.log(total)
// let total = nums.filter(function (n) {
//   return n < 100
// }

// ).map(function (n) {

//   return n
// }).reduce(function (pre, n) {

//   return pre + n
// }, 0)



// let newNums = nums.filter(function (n) {
//   return n < 100
// })
// console.log(newNums)

// //2.  map 的使用
// // 20,40,88,

// let new2Nums = newNums.map(function (n) {

//   return n * 2
// })
// console.log(new2Nums)
// //3.reduce  
// //对数组中的内容汇总
// let total = new2Nums.reduce(function (prev, next) {
//   return prev + next

// }, 0)
// console.log(total)
// //第一次pre 0  n 20 第二次 pre 100 n 40