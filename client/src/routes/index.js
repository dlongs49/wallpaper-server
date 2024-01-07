/*
* Author:dinglong
* DateTime:2024/1/7 下午 9:54
*/
import login from "../lib/login/index.svelte"
import layout from '../lib/layout.svelte'
import notFound from "../lib/notFound.svelte";
export default  {
    "/login":login,
    "/":layout,
    '*':notFound
}
