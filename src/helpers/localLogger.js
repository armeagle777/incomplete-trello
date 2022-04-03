export const localLogger = {
    localLogin(userInfo) {
        sessionStorage.setItem("userName", JSON.stringify(userInfo))
    },

    localLogout() {
        sessionStorage.setItem('userName', null)
    }
}