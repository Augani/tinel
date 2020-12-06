export const GetRequest = (url, params = null)=>{
    // if(url && typeof(url) != String)throw new Error();
    // if(params && typeof(params) != Object)throw new Error(); 
    url = "http://localhost:3004"+url;
   return new Promise((resolve, reject)=>{
    let request = new XMLHttpRequest();
    request.addEventListener('load', function(){
      
        resolve(request.responseText)
    })
    request.addEventListener("error", function(e){
        reject("Error occurred: ", e)
    })
    request.open("GET", url)
    if(params)
        request.send(params);
    else
        request.send();    
   })
}

export const PostRequest = (url, body = null)=>{
    // if(typeof(url) != String)throw new Error();
    // if(body && typeof(body) != Object)throw new Error(); 
    url = "http://localhost:3004"+url;
   return new Promise((resolve, reject)=>{
    let request = new XMLHttpRequest();
    request.addEventListener('load', function(){
     
        resolve(request.responseText)
    })
    request.addEventListener("error", function(e){
        reject("Error occurred: ", e)
    })
    request.open("POST", url)
    request.send(body);
   })
}