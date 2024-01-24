const arr=[]
for(let n=2000;n<=3200;n++){
    if(n%7==0 && n%5!==0)
    {
        arr.push(n);
    }
}
console.log(arr);

const arr1=[]
let nu=2000;
while(nu<=3200)
{
    if(nu%7==0 && nu%5!==0){
        arr.push(nu);
    }
    nu++;
}
console.log(arr);

