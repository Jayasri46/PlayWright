function Brackets(exp){
    const s=[];
    const b={
        '{':'}',
        '(':')',
        '[':']'
    };
    for(let c of exp)
    {
        if(b[c])
        {
            s.push(c);
        }else if(c=='}'||c==')'||c==']'){
            if(s.length==0 ||b[s.pop()]!=c)
            {return false;}
        }
    }
    return s.length==0;//checking if all opening brackets are closed.
}
const exp1="{([])}";
const exp2="{{[(])}";
const res1=Brackets(exp1);
const res2=Brackets(exp2);
console.log(res1);
console.log(res2);
// console.log('expression 1 is: ${Brackets(exp1) ? "valid":"invalid"}');
// console.log('expression 2 is ${Brackets(exp2) ? "valid":"invalid"}');