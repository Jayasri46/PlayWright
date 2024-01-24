//reversing array
function ReverseArray(arr)
{
    let s=0;
    let e=arr.length-1;
    while(s<e)
    {
        let temp=arr[s];
        arr[s]=arr[e];
        arr[e]=temp;
        s++;
        e--;
    }
    return arr;
}
const OA=[1,2,3,4,5];
const res=ReverseArray(OA);
console.log("Reversed array:",res);
//Reversing string
function ReverseString(str)
{
    let rs='';
    for(let i=str.length-1;i>=0;i--)
    {
        rs+=str[i];
    }
    return rs;
}
const OS='Hello Jayasri';
const rs=ReverseString(OS);
console.log("Reversed string:",rs);