import axios from "axios";



// const baseUrl = "http://localhost:3000/"
//后端服务器服务地址

const baseUrl = "http://139.196.181.119:3000/"
let location="";
async function getPoi(x, y) {
  // let token = "33X0NsFGdzK75bVRULnf3zGt4Os450GW";                //自己申请的ak
  let url = baseUrl +  "map/query?lat=" + x +"&lng=" + y ;
  await axios.get(url).then(function (res){
    location = res.data
  }).catch((err) => {
    console.log(err)
  });
  return(location)
}

export {getPoi}
