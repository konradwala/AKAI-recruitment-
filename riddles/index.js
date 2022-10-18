// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(num) {
  var numString = num.toString();
  var result = "";
  
  for(var i = numString.length; i>-1 ;i--)
  {
    result += numString.charAt(i);
  }
  
  return result;
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  var result = 0;

  for(var i=0; i<array.length; i++)
  {
    if(array[i]%2==0)
      result += array[i];
  }
  return result;
}

console.log("2.", addEven(tab));
