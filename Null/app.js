/* Default Parameter And javascript null closing */


function app(firstName,lastName,{job="student",age=18}={}){
    firstName =firstName ?? "Mr: " //(find null and undefind)= ??
    // firstName =firstName || "Mr: "
    console.log(`${firstName}${lastName} ${job} ${age}`);
}


//app("John");//undefined
//app("rasel","")// only rasel
//app("rasel ")//only rzasel
// rasel shishir 5.5

app(0," rasel")