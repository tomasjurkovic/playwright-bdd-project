const { I } = inject();

module.exports = {

  // set my locators:
  loginForm: "#login_form",
  username: "#user_login",
  password: "#user_password",
  submitButton: "Sign in",
  errorMessage: ".alert-error",

  // create page methods:
  submitLogin(username, password) {
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitButton)
  },

  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  },

  assertErrorLoginMessage() {
    I.seeElement(this.errorMessage)
    I.see('Login and/or password are wrong.')
  }
}
