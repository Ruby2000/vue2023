import { onMounted, onBeforeUnmount } from  'vue'
export function  useEventListener(target, event , callback){
//    也可以用字符串形式的css选择来寻找目标DOM元素
    onMounted(() => target.addEventListener(event, callback))
    onBeforeUnmount(() => target.removeEventListener(event, callback))
}