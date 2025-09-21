function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data = "data fetch successfully";
            resolve(data);
        }, 2000);

    });
}
async function getData(){
    try{
        const result=await fetchData();
        console.log(result);
    }catch(error){
        console.error(error);
    }

}