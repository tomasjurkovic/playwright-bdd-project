Feature("Zero bank app - E2E Tests")

Scenario("Login test - Negative", ({ I }) => {
    I.amOnPage("http://zero.webappsecurity.com/index.html")
    I.click('#signin_button')  // click using element's ID
    I.fillField('#user_login', 'invalid_username')  
    I.fillField('#user_password', 'invalid_password')
    I.click('Sign in')  // click using element's text
    I.seeElement('.alert-error')
    I.see('Login and/or password are wrong.')  // assert by displayed text
}) 