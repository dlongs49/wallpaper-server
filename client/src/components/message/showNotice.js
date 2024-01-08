import {showNotice} from "@brewer/beerui";

const useMessage = () => {
    return {
        success:(msg = '操作成功',toast = true)=>{
            showNotice({
                toast,
                message: msg,
                duration: 1500,
                type: 'success'
            });
        },
        warning: (msg, toast = true) => {
            showNotice({
                toast,
                message: msg,
                duration: 1500,
                type: 'warning'
            });
        },
        error: (msg = '服务内部异常,联系管理员' ,toast = true) => {
            showNotice({
                toast,
                message: msg,
                duration: 1500,
                type: "error"
            });
        }
    }

}
export const message = useMessage()
