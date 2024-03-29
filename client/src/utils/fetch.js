// 将对象形式参数拼接 url
import router from "@/router/index.js";

function spStr(data) {
    let str = "";
    if (JSON.stringify(data) === "{}") {
        str = "";
    } else {
        str = "?";
    }
    for (let key in data) {
        str += `${key}=${data[key]}&`;
    }
    str = str.slice(0, str.length - 1);
    return str;
}

// 判断环境
let base_url = import.meta.env.VITE_APP_BASE_URL;
// get 请求
export const fetchGet = (api, params = {}) => {
    let par_str = "";
    for (let key in params) {
        par_str += `${key}=${params[key]}&`;
    }
    spStr(par_str);
    return new Promise((resolve, reject) => {
        fetch(`${base_url}${api}?${par_str}`, {
            headers: {
                "Content-Type": "application/json",
                "w_k": localStorage.getItem('w_k')
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 401) {
                    localStorage.clear()
                    router.push("/login")
                }
                resolve(data)
            }).catch((err) => reject(err));
    })

};
// post 请求
export const fetchPost = (api, body = null, query = {}) => {
    return new Promise((resolve, reject) => {
        fetch(`${base_url}${api}${spStr(query)}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "w_k": localStorage.getItem('w_k')
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 401) {
                    localStorage.clear()
                    router.push("/login")
                }
                resolve(data)
            }).catch((err) => reject(err));
    });

};
