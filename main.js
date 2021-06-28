// arithmatic operator

var a,b,c;

a = 10;
b = 20;
c = a+b;
var e =  c;
console.log(e);

// assignment operator

let abc = 100;
let cba = abc += 50;
console.log(cba);

let def = -1;
let fed = def *= 10;
console.log(fed);

// type data

let s = "123" + 123;
console.log(s);
// hasil : "123123"

// let x = True;
// connsole.log(x);

// Function Javascript
function add(a,b)
{
	return a+b;
}

console.log(add(10,30));
console.log(add(-10,30));

// javascript objects
const obj = {
	"umur":20,
	"daerah":"sidoarjo",
	"hobi":"berenang"};
console.log(obj.umur);
console.log(obj["daerah"]);