/*
* Author:dinglong
* DateTime:2024/1/8 下午 11:10
*/
import loadingSvg from '@/assets/loading.svg'

export const loading = (node) => {
    // 创建加载 dom
    node.style.position = 'relative'
    let style = "inset:0 0;position:absolute;display:flex;align-items: center;justify-content: center;background:#ffffffd1;"
    let imgStyle = "width:40px;height:40px"
    const mask = document.createElement("div")
    mask.id='load_mask'
    mask.setAttribute("style", style)
    const loadImg = document.createElement("img")
    loadImg.setAttribute('style',imgStyle)
    loadImg.setAttribute("src", loadingSvg)
    mask.appendChild(loadImg)
    node.appendChild(mask)
    return {
        update(data) {
            let n = document.getElementById("load_mask")
            // true 加载dom移除 false 重新插入dom
            if(!data){
                node.removeChild(n)
            }else{
                node.appendChild(mask)
            }
        },
        destroy() {
            let n = document.getElementById("load_mask")
            node.removeChild(n)
        }
    }
}

