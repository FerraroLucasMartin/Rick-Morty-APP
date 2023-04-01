
export default function Validation(input){
    const errors= {};

    if (input.username > 35) errors.username = "Username no puede tener mas de 35 caracteres"
    if (!input.username) errors.username= "Debes ingresar el Username.";
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.username)) errors.username= "Username debe ser un mail valido.";
    if (!/^(?=.*\d)/.test(input.password)) errors.password= "Password debe tener al menos un numero."
    if (!/^.{6,10}$/.test(input.password)) errors.password= "Password debe tener entre 6 y 10 digitos"
    
    return errors;

};
