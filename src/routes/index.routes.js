import { routes } from "../views/index"

const router = async (route) => {
    let content = document.querySelector("body")
    switch(route){
        case "#/" : {
            return content.appendChild(routes.login())
        }
    }
}

export { router }