/*
* Author:dinglong
* DateTime:2024/1/9 下午 11:01
*/
import {message} from "@/components/message/showNotice.js";

// 检查图片资源是否可用
export const handleInspectImg = (url,cb)=>{
    const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    return new Promise((resolve,reject)=>{
        if (!reg.test(url)) {
            message.error("图片链接以http或https开头进行检查", false);
            cb()
            return
        }
        const image = new Image()
        image.src = url
        image.onload = (e)=>{
            message.success("该资源检查正常", false);
            cb()
        }
        image.onerror = (e)=>{
            message.error("该资源不可用", false);
            cb()
        }
    })
}

/*
* 【废弃使用】
* */
export const inspectImg = (url) => {
    const reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    if (!reg.test(url)) {
        message.error("图片链接以http或https开头进行检查", false);
        return;
    }
    return new Promise(async (resolve, reject) => {
        try {
            let res = await fetch(url)
            if (!res.ok) {
                message.error("图片资源出现错误 - " + res.status, false);
                resolve()
            } else {
                message.success("图片资源检查正常 - " + res.status, false);
                reject()
            }
        }catch (e) {
            message.error("图片资源出现错误 - 500", false);
        }

    })


}
