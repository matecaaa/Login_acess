import './formulario.css'
import { useState } from 'react'

export const Campotexto = ()=>{ 
 const [nome, setNome] = useState("")
        
    const handleSubmit = (e) => {
        if (nome === ""  ) {
            alert("Acesso negado")
        }
        else{
            alert("Acesso autorizado")
        }
    }


function Redefinir(e) {
    
    let redefinicao = window.prompt("Digite sua nova senha: ")
    alert(`Sua nova senha é ${redefinicao}`)
    e.preventDefault()

}
return (
    <div>
      <form>
        <label>Digite seu Nome</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} valor = "nome" type = "text" placeholder = "Nome: "/>
        <label>Digite seu email</label>
        <input valor = "email" type = "email" placeholder = "Email: "/>
        <label>Digite seu senha</label>
       <input valor = "senha" type = "password" placeholder = "Senha: "/>
        
        <div className='div2'>
        <button onClick={() =>{
            if (nome == "") {
                let message = `acesso negado`;
                alert(message);
            }
            else( 
                alert(`Bem vindo ${nome} !`)
            )
              }}>Confirmar os dados</button>
        <button onClick={Redefinir}>Redefinir senha</button>
</div>
        </form>
    </div>
)
}
export default Campotexto 






