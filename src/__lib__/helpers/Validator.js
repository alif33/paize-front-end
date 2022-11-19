export const isEmptyObj = obj =>{
    let status = false;
    for(var key in obj) {
        if(obj[key] === "") {
           status = true;
        }
    }
    return status
}

export const Sortern = (str, n) =>{
    let strSplit = str.split(' ');
    
    if(strSplit.length > n){
        return strSplit.slice(0, n).join(' ')+'..';
    }else{
        return str;
    }
}