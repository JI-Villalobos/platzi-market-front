
class Login extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: "open" })
    }

    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML = `
        <form action="">
            <h2>Identifícate</h2>
            <p>Usuario:</p>
            <input type="text">
            <p>Contraseña</p>
            <input type="password" name="" id="">
            <button type="submit">Ingresar</button>
        </form>
        ${this.getStyles()}
        `

        return template
    }


    getStyles(){
        return `
            <style>
                form {
                    background: rgba(226, 185, 38, 0.36);
                    margin: auto;
                    width: 70%;
                    height: 55%;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                }
            
                form h2 {
                    margin-top: 20px;
                    font-size: 2rem;
                }
            
            
                form p {
                    margin-top: 20px;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
            
                form input {
                    margin-top: 0.5rem;
                    height: 25px;
                    border: none;
                    border-radius: 5px;
                    background: #F0F2EF;
                }
            
                form button {
                    margin-top: 25px;
                    margin-bottom: 10px;
                    height: 30px;
                    width: 175px;
                    border: none;
                    border-radius: 5px;
                    background: #E2B926;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                @media only screen and (min-width: 465px){
                    form {
                        height: 350px;
                        width: 400px;
                    }
                    
                    form h2 {
                        font-size: 3rem;
                    }
                    
                    
                    form p {
                        font-size: 2.5rem;
                        font-weight: bold;
                    }
                    
                    form input {
                        height: 35px;
                        width: 275px;
                    }
                    
                    form button {
                        height: 40px;
                        width: 275px;
                        font-size: 2.5rem;
                    }
                }
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render()
    }

}

customElements.define('login-form', Login)