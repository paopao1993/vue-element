//注册全局方法
const  nextFocus=(val,param)=>{
    let refArr=Object.keys(param)
    let inputArr=[]
    refArr.forEach(item=>{
      if(item.split('-')[0]==='input'){
        inputArr.push(item)
      }
    })
    console.log(inputArr)
    inputArr.forEach((item,index)=>{
        if(val===item){
          console.log(item,index)
             param[inputArr[index+1]].focus()
          //   param[inputArr[index+1]].select()
        }
    })
}
export default {
    // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
    install: function (Vue) {
      Vue.prototype.nextFocus = (val,param) => nextFocus(val,param)
    }
  }