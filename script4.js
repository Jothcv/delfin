// Salario
var nombre = prompt("Ingresa tu nombre:");
var edad = prompt("Ingresa tu edad:");
var salario = prompt("Ingresa tu salario:");
var horas = prompt("Ingresa tus horas trabajadas:");
var lugar = prompt("Ingresa tu lugar de nacimiento:");


if ((salario >= 5000 && edad >= 35) || (horas >= 48 && salario <= 8000)) 
{
    var bonificacion;
    bonificacion = (parseInt(3000) + parseInt(salario));
    document.write("Hola "+ nombre + "<br>");
    document.write("Ya que tu salatio es de "+ salario + "<br>");
    document.write("Y tu edad "+ edad + "<br>");
    document.write("y las horas que has trabajado son "+ horas + "<br>");
    document.write("Por lo tanto tu bonificacion es de 3000 + el salario = " + bonificacion);
} 
else if ((salario >= 3000 && edad >= 25) || (horas <= 47 && salario <= 6000)) 
{
    var bonificacion;
    bonificacion = (parseInt(2000) + parseInt(salario));
    document.write("Hola "+ nombre + "<br>");
    document.write("Ya que tu salatio es de "+ salario + "<br>");
    document.write("Y tu edad "+ edad + "\n");
    document.write("y las horas que has trabajado son "+ horas + "<br>");
    document.write("Por lo tanto tu bonificacion es de 2000 + el salario = " + bonificacion);
} 
else if ((salario <= 3000 && edad <= 25) || (horas <= 30 && salario >= 40))
{
    var bonificacion;
    bonificacion = (parseInt(1000) + parseInt(salario));
    document.write("Hola "+ nombre + "<br>");
    document.write("Ya que tu salatio es de "+ salario + "<br>");
    document.write("Y tu edad "+ edad + "<br>");
    document.write("y las horas que has trabajado son "+ horas + "<br>");
    document.write("Por lo tanto tu bonificacion es de 1000 + el salario = " + bonificacion);
} 
else 
{
    var bonificacion;
    bonificacion = (parseInt(500) + parseInt(salario));
    document.write("Hola "+ nombre + "<br>");
    document.write("Ya que tu salatio es de "+ salario + "<br>");
    document.write("Y tu edad "+ edad + "<br>");
    document.write("y las horas que has trabajado son "+ horas + "<br>");
    document.write("Por lo tanto tu bonificacion es de 500 + el salario = " + bonificacion);
}            