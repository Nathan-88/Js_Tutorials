/**
 * test
 */

function showEvenNum(n) {
    if (n < 0) {
        return;
    }
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

showEvenNum(10);

/*The function showEvenNum will print all even numbers from 0 to n-1.
If n is negative, the function will return without printing anything.
This is because the for loop will not execute if n is less than 0.
The function does not return any value, so it implicitly returns undefined.*/