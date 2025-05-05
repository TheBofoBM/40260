console.log("Inicio")

const boton = document.getElementById("enviar")
boton.addEventListener("click",
    () => {
        console.log("los parameetros")
        let user = document.getElementById("suer")
        let password = document.getElementById("password")
        console.Log (password.value)
        console.log(user.value)
    }
)
