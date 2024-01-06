import dayjs from "dayjs";
import * as fs from "fs";
import { join } from "path";
import {v4 as uid} from "uuid";
import { ResFail } from "../../utils/http.response";
let file_type = ["image/png", "image/jpeg", "image/gif"];
// 配置文件路径
export const HandleDestination = (req, file, cb) => {
  let date = dayjs(new Date()).format("YYYY-MM-DD");
  // 检查是否存在该目录
  const isdir = fs.existsSync(join(__dirname, `../../../www/public/${file.fieldname}/${date}`));
  let dir_path = join(__dirname, `../../../www/public/${file.fieldname}/${date}`);
  if (!isdir) {
    // 创建目录
    fs.mkdirSync(dir_path);
  }
  return cb(null, dir_path);
};
// 配置文件名称
export const HandleFilename = (req, file, cb) => {
  const file_origin = file.originalname.split('.');
  const file_name = uid()+'.'+file_origin[1]
  cb(null, file_name);
};
// 校验文件
export const HandleFileFilter = (req, file, cb) => {
  if (!file_type.includes(file.mimetype)) {
    return cb(new ResFail("上传图片格式有误"), false);
  }
  cb(null, true);
};
// 返回路径
export const JsonFile = (files)=>{
  let files_path = files.path.replace(/\\/g,"/")
  let i = files_path.lastIndexOf(files.fieldname)
  let slice_path = files_path.slice(i,files_path.length)
  console.log(files_path,i,files.fieldname,slice_path)
  let url = `/upload/${slice_path}`
  return {url,name:files.originalname}
}
