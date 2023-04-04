const COUNTRY = 'RSA'; // set the customer's COUNTRY
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';


let shipping = null;
let currency = null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0;
const batteries = 35 * 2;
const pens = 5 * 0;
console.log(COUNTRY)

if (COUNTRY === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (COUNTRY === 'NAM') {
  shipping = 600;
  currency = '$';
} else if (COUNTRY === 'NK') {
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
  currency = '$';
}

const totalCost = shoes + toys + shirts + batteries + pens;

if (totalCost >= 1000 && COUNTRY !== 'NK') {
  if (COUNTRY === 'RSA' && customers === 1) {
    shipping = 0;
  } else if (COUNTRY === 'NAM' && customers === 1) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
} else {
  console.log('Price:', currency, totalCost + shipping);
}
