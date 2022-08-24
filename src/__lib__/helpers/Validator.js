export const isEmptyObj = obj =>{
    let status = false;
    for(var key in obj) {
        if(obj[key] === "") {
           status = true;
        }
    }
    return status
}