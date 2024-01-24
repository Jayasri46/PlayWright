function prime(s,e){
    for(let num=s;num<=e;num++)
    {
        if(isprime(num))
        {
            console.log(num);
        }
    }
}
function isprime(number)
{
    if(number<=1)
    {
        return false;
    }
    for(let i=2;i<=Math.sqrt(number);i++)
    {
        if(number%i==0)
        {
            return false;
        }
    }
    return true;
}
prime(10,50);