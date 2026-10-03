'use strict';
function z1(n) // задание 1
{
    let count = 0;
    for(let a = 1; a * a * a < n; a++)
    {
        for(let b = a + 1; a * a * a + b * b * b <= n; b++)
        {
            if(a * a * a + b * b * b === n)
            {
                count++;
                if(count === 2)
                {
                    return true;
                }
            }
        }
    }
    return false;
}
