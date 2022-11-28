function prefer(){
    let num=1;
    let res=true;
    while(num<=99 && res==true){
        nomuser=prompt("Ingrese su número de usuario");
        if(nomuser!==null){
            var n=num.toString().padStart(2,"0");
            res=confirm("Estimado usuario:"+" "+" "+nomuser+"\n"+"Su turno es:"+" "+"E"+n+"\n"+"Espere su llamado...");
            num++;
        }else{
            alert("Error en turno...");
            break;
        }
    }
}
function user(){
    let num=1;
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese su nombre de usuario");
        if (nomuser!==null){
            var n=num.toString().padStart(2,"0");
            res=confirm("Estimado usuario"+" "+" "+nomuser+"\n"+"Su turno es:"+" "+"A"+n+"\n"+"Espere su llamado...");
            num++;
        }else{
            alert("Error en el turno.");
            break;
        }
    }
}