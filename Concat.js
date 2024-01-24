//concatenating Numbers
const n1=4;
const n2=6;
const res=n1+n2;
console.log("Number concatenation:",res);

//concatenating Strings
const s1='Welcome to'
const s2='PalTech'
const sr=s1+s2;
console.log("String Concatenation:",sr);

//concatenating booleans
const b1=true
const b2=false
const br=b1+b2
console.log("Boolean concatenation:",br);

//Mixed combinations 
const n=3;
const s='Jayasri';
const b=true;
const m=n+s+b;
console.log("Mixed result:",m);

//Numbers and Strings
const mr=n1+s1;
console.log("Mixed result1:",mr);

//boolean and string
const bs=b1+s2
console.log("Mixed result2:",bs);

// Using identity operator
const boolString=true
console.log((boolString === "true")); 
const boolValue = (boolString === "true"); 
console.log(boolValue); 

const v1 = !true;
const v2 = !'';

console.log(v1);
console.log(v2); 

const v3=!!true;
const v4=!!'';

console.log(v3);
console.log(v4); 

// Using Regex
console.log((/true/).test(boolString)); 

