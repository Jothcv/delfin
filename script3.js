//for
//for(inicio;condicion;incremento)
/*let i;
for (i=0;i<=10;i++)
{
    document.write(i)
}
*/
/*reacilsar un pprograma que pida el ingreso de unoa determinada cantidad de notas,pida esas notas y muestre el promedio
realizar un programa que pida un numero y muestre la tabla de multiplicar de ese numero 
realizar un programa que muestee el fatorial de un numero inresado 
realize un prgrama que pida el ingreso de un numero y muestre todoslos numeros anteriores a el 
ralizar un programa que pida un simbolo y un numero y muestre la antidad de veces el simbolo que ingreso segun el numero 
*/




//ejercicio 1
/*
let nota=parseInt(prompt("su nota"));
let i;
let suma =0;
for (i=1;i<=nota;i++)
{
    let cantidad=parseInt(prompt("ingrese su nota"))
    suma = suma+cantidad;

}
let promedio=suma/nota;
document.write(promedio)
*/




//ejercicio 2
/*
let num1=parseInt(prompt("ingrese su numero a multiplicar "))
var multi=0
for(i=1;i<=10;i++)
{
    multi= num1*i
    document.write(i, "x",num1,"=" ,multi, "</br>")
}*/




/*ejercicio 3
let num1=parseInt(prompt("ingrese su numero a factoriar"))
let prod=1;
for(let i=1;i<=num1;i++)
{
    prod*=i;
}
document.write(prod);
*/


//ejercicio 4
/*
let num=parseInt(prompt("su numero"))
let i;
for(i=num;i>=0;i--)
{
    document.write(i+"</br>")
}
*/


/*
let simbolo = prompt("su simbolo")
let num = parseInt(prompt("su numero"))
let i=0
for(i=1;i<=num;i++)
{
    document.write(simbolo)
}
*/

/*ejercicio realizar un programa que pida dos numeros enteros. y escriba 
la suma desde el primer numero hasta el segundo numero */

let num1=parseInt(prompt("1r numero entero"))
let entero=parseInt(prompt("2do numero entero"))
suma=0;
for(i=num1;i<=entero;i++)
{
    suma=suma+i
}
document.write(suma)
    
