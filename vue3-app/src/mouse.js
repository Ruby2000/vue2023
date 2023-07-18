import { ref } from "vue"
import { useEventListener} from "@/test/event";

export function useMouse() {
//    被组合式函数封装和管理的状态
    const x = ref(0)
    const y = ref(0)
//    组合式函数可以随时更改其状态
   useEventListener(window, 'mousemove', (event) => {
       x.value = event.pageX
       y.value = event.pageY
   })

//    通过返回值暴露所管理的状态
    return { x, y }
}