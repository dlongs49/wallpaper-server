/*
* Author:dinglong
* DateTime:2024/1/14 下午 5:19
*/

const fs = require("fs")
try {
    const txt = fs.readFileSync("package.json", 'utf8')
    let json = JSON.parse(txt)
    json.scripts = {
        start: 'nodemon main',
        rmdir: 'rmdir /s node_modules',
        pkg: "pkg . -t win --out-path=dist/"
    }
    json.pkg = {
        assets: ["www/**/*", "logs/**/*"]
    }

    fs.writeFileSync("./dist/package.json", JSON.stringify(json))
    fs.copyFileSync("tsconfig.json", "./dist/tsconfig.json")
    let env_txt = fs.readFileSync(".env", 'utf8')
    env_txt = env_txt.replace("dev", "pro")
    fs.writeFileSync("./dist/.env", env_txt)
} catch (e) {
    console.log(e)
}
