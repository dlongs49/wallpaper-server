import './app.css'
import '@brewer/beerui/assets/beer.css'
import { ClientApp } from 'svelte-pilot'
import router from './router/index'
let flag = true
const mode = import.meta.env.MODE
// 路由进来之前
router.on('beforeChange',(to)=>{
    let wk = localStorage.getItem("w_k")
    if(to.path === "/"){
        if(mode === 'production'){
            window.location.href = "/wadmin/wallpaper_type"
        }else{
            window.location.href = "/wallpaper_type"
        }
    }
    if(wk){

        if(to.path === "/login"){
            router.push("/")
        }
    }else{
        if(to.path !== '/login'){
            router.push("/login")
        }
        if(flag){
            flag = false
            router.push("/login")
        }
    }
})
router.start(
    () =>
        new ClientApp({
          target: document.getElementById('app'),
          props: { router }
        })
)

