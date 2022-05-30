
let n1;
let n2;
let n3;
let res;
console.log("Escoje un opción");
console.log("1.- Algoritmo 1 Número mayor de tres.");
console.log("2.- Algoritmo 2 Número menor de tres");
console.log("3.- Algoritmo 4 Determinar si un número es multiplo de tres.");
console.log("4.- Algoritmo 5 De tres númeors uno será la suma de los otrso dos.");
console.log("5.- Algoritmo 6 El número es impar o par");
console.log("6.- Adivina el números")
let op=parseInt(prompt("Opciión:",""));
switch (op) {
    case 1:
        n1=parseFloat(prompt("Introduce el mprimer número entre 1-100: ",""));
        n2=parseFloat(prompt("Introduce el segundo mprimer número entre 1-100: ",""));
        n3=parseFloat(prompt("Introduce el segundo número entre 1-100: ",""));

        if(n1<100 && n2<100 && n3<100 && n1>0 && n2>0 && n3>0){
        if(n1>n2 && n1>n3)
        {
            console.log("El numero mayor es: "+n1)
        }
        if(n2>n3 && n2>n1)
        {
            console.log("El numero mayor es: "+n2)
        }
        if(n3>n1 && n3>n2)
        {
            console.log("El numero mayor es: "+n3)
        }
        if(n3==n1 && n3==n2)
        {
        console.log("El numero mayor es: "+n3)
        }
        }
        else console.log("Un Número esta fuera de rango")
        break;
        
    case 2:
        n1=parseFloat(prompt("Introduce el mprimer número entre 1-100: ",""));
        n2=parseFloat(prompt("Introduce el segundo número entre 1-100: ",""));
        n3=parseFloat(prompt("Introduce el tercer número entre 1-100: ",""));

        if(n1<100 && n2<100 && n3<100 && n1>0 && n2>0 && n3>0){
        if(n1<n2 && n1<n3)
        {
        console.log("El numero menor es: "+n1)
        }
        if(n2<n3 && n2<n1)
        {
        console.log("El numero menor es: "+n2)
        }
        if(n3<n1 && n3<n2)
        {
        console.log("El numero menor es: "+n3)
        }
        if(n3==n1 && n3==n2)
        {
        console.log("El numero menor es: "+n3)
        }
        }
        else console.log("Un Número esta fuera de rango")
        break;
    case 3:
        n1=parseFloat(prompt("Introduce el mprimer número entre 100-200: ",""));
        res=(n1%3);
        
        if(res!=0){
            console.log("No es multiplo de 3")
        }
        else if(res==0)
        {
            console.log("Es multiplo de 3")
        }
        
        break;
        
    case 4:
        n1=parseFloat(prompt("Introduce el mprimer número: ",""));
        n2=parseFloat(prompt("Introduce el segundo número: ",""));
        n3=parseFloat(prompt("Introduce el tercer número: ",""));
        
        if(n1==n2+n3){alert(n1+" Es la sume de "+n2+" y "+n3)}
        else if(n2==n1+n3){alert(n2+" Es la suma de "+n1+" y "+n3)}
        else if(n3==n1+n2){alert(n3+" Es la sume de "+n1+" y "+n2)}
        else {console.log("Ningún número es la sume de los otros dos")}

        break;

    case 5:
        n1=parseFloat(prompt("Introduce un número: ",""));
        res=n1%2;
        if(res==0){alert("El número es par.")}
        else {alert("El número es impar")}
        break;
        
                                        // Segundo commit cambiar por alert

    case 6:
        // alert("Piensa en un número del 1 al 100 \n Multiplicalo por 10 \n Sumale 7\n Multiplicalo por 10\n Sumale 5")
        // res= prompt("Damé el resultado: ")
        // let R=res*2;
        // R=R-150;
        // R=R/200;
        // console.log("Tú nnúmero es: "+R)

        alert("Piensa un número del 1 al 100")
        mid=50;
        let j=2;

        while (j<=128) {
            n1=confirm("¿Es mayor a: "+mid);
            if (n1) 
             {mid=parseInt(mid+50/j)
            if(j==128){alert("Tú número es: "+(mid+1))}
            }
            else 
                 {
                    mid=parseInt(mid-50/j)
                    if(j==128){alert("Tú número es: "+(mid-1))}
                 }
            j=j*2;
        }

    break
    
    default:
        console.log("Opción invalida")
        break;
}