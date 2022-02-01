/**** 

**Problem: bit counting
source:codewars. 
    https://www.codewars.com/kata/526571aae218b8ee490006f4
 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

****/

//Solution:

function countBits(n){
    // F = floor(log2(n))
    var S=0, F=Math.floor(Math.log2(n));
    for(var i=0; i<=F; i++){
        // S = S + floor((n/2^i)%2)	
        S+= Math.floor(n/(2**i))%2;
    }
    return S;

}
