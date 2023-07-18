app.directive('color', (el, binding) => {
//    这会在’mounted‘ 和’updated‘时都调用
    el.style.color = binding.value
})
app.directive('demo',(el, binding) => {
    console.log(binding.value.color) //=> "white"
    console.log(binding.value.text) // => "hello!"
})