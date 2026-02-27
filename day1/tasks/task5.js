//function 3 number args and return biggest
let biggest = function biggestof3(a,b,c) {
    if((a>b) && (a>c)) return a
else if ((b>a) && (b>c)) return b
else if ((c>a) && (b<c)) return c
    else return ('all equal')
}
let result = biggest(20,30,10)
console.log(result)