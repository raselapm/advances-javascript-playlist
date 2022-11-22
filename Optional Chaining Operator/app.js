//Optional Chaining Operator
const company={
    companyName:"Raselapm",
    employee:9,
    address:{
        street:"234 ,nabinagor",
        postcode:23456
    
    }  ,
 playlists:["data","taka"]

}
function findName(option){
   /*  if(option &&option.address &&option.address.street){
        console.log(option.address.street)
    } */
   // console.log(option?.address?.street)
  // console.log(option.playlists[0])
   console.log(option?.playlists?.[1])

}
findName(company)


