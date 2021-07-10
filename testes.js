var a=4
var b=2
var c= -6
const Passo1 = b*b;
const Passo2 = Passo1 - 4 * a * c;
const Passo3 = b * -1;
const Passo4 = 2 * a;
const Delta1 = Math.pow(Passo2, 1/2)
const Delta2 = Delta1 * -1

var b = Passo3;
var a = Passo4;

const X1 = b - Delta1;
const X1_1 = X1/a;

const X2 = b + Delta1;
const X2_1 = X2/a;


console.log(X1_1, X2_1);
