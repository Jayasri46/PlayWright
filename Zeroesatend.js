function movezeroes(n)
{
    let z=0;
    for(let i=0;i<n.length;i++)
    {
        if(n[i]!=0)
        {
            let temp=n[i];
            n[i]=n[z];
            n[z]=temp;
            z++;
        }
    }
    return n;
}
let num= [0,1,0,3,12]
let res=movezeroes(num);
console.log("New array is:",res);