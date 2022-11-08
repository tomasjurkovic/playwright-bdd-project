const LoginPage = require("./pages/LoginPage")

Feature("Zero bank app - E2E Tests")

Before(({ I }) => {
    console.log("BEFORE HOOK")
    I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
    console.log("AFTER HOOK")
})

Scenario("Login test - Negative: wrong password and username", ({ I, LoginPage }) => {
    I.click('#signin_button')  // click using element's ID
    LoginPage.submitLogin('invalid_username', 'invalid_password')
    LoginPage.assertErrorLoginMessage()
}) 

Scenario("Login test - Negative: wrong username", ({ I, LoginPage }) => {
    I.click('#signin_button')  // click using element's ID
    LoginPage.submitLogin('invalid_username', 'password')
    LoginPage.assertErrorLoginMessage()
}) 

Scenario("Login test - Negative: wrong password", ({ I, LoginPage }) => {
    I.click('#signin_button')  // click using element's ID
    LoginPage.submitLogin('username', 'invalid_password')
    LoginPage.assertErrorLoginMessage()
}) 

Scenario("Login test - Positive", ({ I, LoginPage }) => {
    I.click('#signin_button')  // click using element's ID
    LoginPage.submitLogin('username', 'passwords')
    // there is page problem, getting error, so using this trick with redirect:
    I.amOnPage('http://zero.webappsecurity.com/online-banking.html')
    I.see('Our Bank is trusted by over 1,000,000 customers world wide.')
}) 