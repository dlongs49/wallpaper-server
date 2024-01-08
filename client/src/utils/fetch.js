// 将对象形式参数拼接 url
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

let base_url = import.meta.env.VITE_APP_BASE_URL;
export const fetchGet = (api, params = {}) => {
  let par_str = "";
  for (let key in params) {
    par_str += `${key}=${params[key]}&`;
  }
  spStr(par_str);
  fetch(`${base_url}${api}?${par_str}`)
    .then(response => response.json())
    .then(data => console.log(data));
};
export const fetchPost = (api, body = {}, query = {}) => {
  fetch(`${base_url}${api}${spStr(query)}`, {
    method: "POST",
    body: JSON.stringify(body.spm ? body : { ...body, spm: new Date().getTime() })
  })
    .then(response => response.json())
    .then(data => console.log(data));
};