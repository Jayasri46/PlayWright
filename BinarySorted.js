function BinarySorted(arr,tar)
{
    let low=0;
    let high=arr.length-1;
    while(low<=high)
    {
        const mid=Math.floor((low+high)/2);
        if (arr[mid]==tar)
        {
            return mid;
        }else if (arr[mid]<tar){
            low =mid+1;
        }else{
            high=mid-1;
        }
    }
    return -1;
}
const SA=[11,12,13,14,15,16,17,18,19,20];
const TA=18;
const RA=BinarySorted(SA,TA);
console.log("Element ",RA);