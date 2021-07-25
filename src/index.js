import { router } from "./routes/index.routes";

const init = () => {
    router(window.location.hash)

    window.addEventListener("hashchange", () => {
        router(window.location.hash)
    })
}

window.addEventListener("load", init)

/*const mainContent = document.querySelector("body")
mainContent.innerHTML = `
    <main>
        <div class="img-icon">
            <img src="../src/assets/imgs/logo.svg" alt="">
        </div>
        <login-form>
    </main>
    `*/