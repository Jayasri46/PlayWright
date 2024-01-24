//{} to Number,string,boolean
const a={};
const NA=Number(a);
console.log("Empty to Number:",NA);

const SA=String(a);
console.log("Empty to String:",SA);

const BA=Boolean(a);
console.log("Empty to Boolesn:",BA);

//-Infinity to Number,string,boolean
const b=-Infinity;
const NB=Number(b);
console.log("Infinity to Number:",NB);

const SB=String(b);
console.log("Infinity to String:",SB);

const BB=Boolean(b);
console.log("Empty to Boolesn:",BB);

//NAN to Number,string,boolean
const c= NaN;
const NC=Number(c);
console.log("NAN to Number:",NC);

const SC=String(c);
console.log("NAN to String:",SC);

const BC=Boolean(c);
console.log("Empty to Boolesn:",BC);

//function(){} to Number,String,Boolean
const d= function(){};
const ND=Number(d);
console.log("function() to Number:",ND);

const SD=String(d);
console.log("function() to String:",SD);

const BD=Boolean(d);
console.log("function() to Boolean:",BD);

// ["twenty"] to Number,String,Boolean
const e= ["twenty"];
const NE=Number(e);
console.log("['twenty'] to Number:",NE);

const SE=String(e);
console.log("['twenty']to String:",SE);

const BE=Boolean(e);
console.log("['twenty'] to Boolean:",BE);