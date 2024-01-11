import './app.css'
import '@brewer/beerui/assets/beer.css'
import { ClientApp } from 'svelte-pilot'
import router from './router/index'
let flag = true
// 路由进来之前
router.on('beforeChange',(to)=>{
    // if(ck){
    //     if(to.path === "/"){
    //         router.push("/wallpaper_type")
    //     }
    //     if(to.path === "/login"){
    //         router.push("/")
    //     }
    // }else{
    //     if(to.path !== '/login'){
    //         router.push("/login")
    //     }
    //     if(to.path === '/'){
    //         router.push("/login")
    //     }
    //     if(flag){
    //         flag = false
    //         router.push("/login")
    //     }
    // }
})
router.start(
    () =>
        new ClientApp({
          target: document.getElementById('app'),
          props: { router }
        })
)

