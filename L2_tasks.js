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
function z2(ip_v4, mask) // задание 2
{
    // Разбиваем IP-адрес на части
    const ipParts = ip_v4.split('.');
    const maskParts = mask.split('.');

    // Склеиваем байты IP и маски в два 32-битных числа
    const ipNum = ((Number(ipParts[0]) << 24) | (Number(ipParts[1]) << 16) | (Number(ipParts[2]) << 8) | Number(ipParts[3])) >>> 0;
    const maskNum = ((Number(maskParts[0]) << 24) | (Number(maskParts[1]) << 16) | (Number(maskParts[2]) << 8) | Number(maskParts[3])) >>> 0;

    // Вычисляем числа для сети (&) и для хоста (& ~)
    const netNum = (ipNum & maskNum) >>> 0;
    const hostNum = (ipNum & ~maskNum) >>> 0;

    // Формируем строки прямо на выходе
    const netStr = [
        (netNum >>> 24) & 255,
        (netNum >>> 16) & 255,
        (netNum >>> 8) & 255,
        netNum & 255
    ].join('.');

    const hostStr = 
    [
        (hostNum >>> 24) & 255,
        (hostNum >>> 16) & 255,
        (hostNum >>> 8) & 255,
        hostNum & 255
    ].join('.');

    return [netStr, hostStr];
}
function z3(year) // задание 3
{
    const century = Math.ceil(year / 100);
    if (century % 100 >= 11 && century % 100 <= 13) {
        return century + "th";
    }
    switch (century % 10) {
    case 1: return century + "st";
    case 2: return century + "nd";
    case 3: return century + "rd";
    default: return century + "th";
  }
}