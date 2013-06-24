function isPrime(number)
{
    var a = Math.sqrt(number) + 1;
    for(int i = 2; i < a; i++)
    {
        if((number % i == 0) && (number != i))
        {
            return false;
        }

    return true;
}
var primes = "";
var count = 0;
var num = 2;
var fs = require('fs');
while(count < 100)
{
    if(isPrime(num))
    {
        primes = primes + ", " + num;
        count += 1;
    }
    num += 1;
}
primes += "\n";
fs.writeFile("./primes.txt", primes, function(test));
