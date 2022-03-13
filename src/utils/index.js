import axios from "axios";

let location="";
async function getPoi(x, y) {
  let token = "33X0NsFGdzK75bVRULnf3zGt4Os450GW";                //自己申请的ak
  // var token = "SU7CGWGXp44xx93VNoecpWVCBap2QflC"
  // var url = "http://api.map.baidu.com/geocoder/v2/?location=" + y + "," + x +
  //     "&output=json&ak=" + token + "&jsoncallback=callbackFunction";
  let url = "/api/geocoder/v2/?ak=" + token + "&location=" + x +
      "," + y + "&output=json&pois=1";
  await axios.get(url).then(function (res){
    // console.log(res.data.result.formatted_address)
    // console.log(res.data.result.pois[0].addr)
    // location = res.data.result.formatted_address
    // console.log(res.data.result.formatted_address)
    console.log(res)
    // console.log(location)
  }).catch((err) => {
    console.log(err)
  });
  console.log("location")
  console.log(location)
  return(location)
}

export {getPoi}
