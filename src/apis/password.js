export function encriptar(pass){
    const password = "HolaMundo";

    
    return password;
}


export function valida(pass1){
//    let numbers = /[0-9]/g;
    let response ;

//    if (pass1.match(numbers)){
//        response = "La contraseña debe de tener al menos 1 numero";
 //   }

    if(pass1.length < 8){
        response = "La contraseña debe de tener al menos 8 caracteres";
    }
    
    return response;
}