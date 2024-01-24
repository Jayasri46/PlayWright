class customer
{
    constructor(fn,ln){
    this.fn=fn;
    this.ln=ln;
}
getfullname()
{
    return `${this.fn} ${this.ln}`;
}
}
class account{
constructor(customer,bal=0)
{
    this.customer=customer;
    this.bal=bal;
}
deposit(amount)
{
    this.bal+=amount
}
withdraw(amount){
    if(amount<=this.bal){
        this.bal-=amount;
    }else{console.log("insufficient bal.")}
}
getbalance(){
    return this.bal;
}
}
const cus=new customer('Yamini','Jayasri');
const acc1=new account(customer,100);
const acc2=new account(customer,200);
//const RF=cus.getfullname("Yamini Jayasri")
const RD=acc1.deposit(100);
const RW=acc2.withdraw(50);
console.log("Amount Deposited:",RD);
console.log("Amount Withdrawl:",RW);
