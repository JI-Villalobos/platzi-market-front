import Login from '../views/Login'

export default () => {
    const mainContent = document.createElement('main')
    mainContent.innerHTML = `
        <div class="img-icon">
            <img src="../src/assets/imgs/logo.svg" alt="">
        </div>
        <login-form>
    `

    return mainContent
}