/*
* Author:dinglong
* DateTime:2024/1/14 下午 5:19
*/

const fs = require("fs")
try {
    const txt = fs.readFileSync("package.json", 'utf8')
    let json = JSON.parse(txt)
    json.scripts = {
        dev: 'node main',
        rmdir: 'rmdir /s node_modules'
    }
    fs.writeFileSync("./dist/package.json", JSON.stringify(json))
    fs.copyFileSync("tsconfig.json", "./dist/tsconfig.json")
    fs.copyFileSync(".env", "./dist/.env")
} catch (e) {
    console.log(e)
}
