/* Default Parameter And Null Coalescing in Javascript */


function app(firstName,lastName="mahmud"){

    console.log(`${firstName}${lastName}`);
}

//app("John");//undefined
//app("rasel","")// only rasel
app("rasel ", '')//only rasel