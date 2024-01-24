function Pascal(x)
{
    let t=[]
    for (let i=0; i<x; i++){
        let row=[];
        for(let j=0; j<=i; j++)
        {
            if(j===0 || j===i)
            {
                row.push(1);
            }
            else{
                row.push(t[i-1][j-1]+t[i-1][j]);
            }
        }
        t.push(row);
    }
    return t;
}
const numrows=5;
const PT=Pascal(numrows);
console.log(PT);