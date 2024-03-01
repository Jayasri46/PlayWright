//concatenating Numbers
const number1=4;
const number2=6;
const result=number1+number2;
console.log("Number concatenation:",result);

//concatenating Strings
const string1='Welcome to'
const string2='PalTech'
const stringresult=string1+string2;
console.log("String Concatenation:",stringresult);

//concatenating booleans
const boolean1=true
const boolean2=false
const booleanresult=boolean1+boolean2
console.log("Boolean concatenation:",booleanresult);

//Mixed combinations 
const number=3;
const string='Jayasri';
const boolean=true;
const mixedresult=number+string+boolean;
console.log("Mixed result:",mixedresult);

//Numbers and Strings
const mixedresult1=number1+string1;
console.log("Mixed result1:",mixedresult1);

//boolean and string
const booleanstring1=boolean1+string2
console.log("Mixed result2:",booleanstring1);

// Using identity operator
const boolString=true
console.log((boolString === "true")); 
const boolValue = (boolString === "true"); 
console.log(boolValue); 

const version1 = !true;
const version2 = !'';

console.log(version1);
console.log(version2); 

const version3=!!true;
const version4=!!'';

console.log(version3);
console.log(version4); 

// Using Regex
console.log((/true/).test(boolString)); 

