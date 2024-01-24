//String based logic
function palindrome(a){
    if(a<0){
        return false;
    }
    const ON=a.toString();
    const RN=ON.split('').reverse().join('');
    return ON==RN;
}

const n1=121;
const n2=-121;
const n3=10;
const n4=11;
//printing output
console.log(palindrome(n1));
console.log(palindrome(n2));
console.log(palindrome(n3));
console.log(palindrome(n4));

//--Number based logic
function palindrome(a){
    if(a<0){
        return false; //negative number case
    }
    const ON=a;
    let RN=0;
    while(a>0)
    {
        const d=a%10;
        RN = RN*10+d;
        a=Math.floor(a/10);
    }

    return ON==RN;
}
const n5=121;
const n6=-121;
const n7=10;
const n8=11;
//printing output
console.log(palindrome(n5));
console.log(palindrome(n6));
console.log(palindrome(n7));
console.log(palindrome(n8));