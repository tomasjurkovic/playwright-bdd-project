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

Scenario("Login test - Positive", ({ I }) => {
    I.amOnPage("http://zero.webappsecurity.com/index.html")
    I.click('#signin_button')  // click using element's ID
    I.fillField('#user_login', 'username')  
    I.fillField('#user_password', 'password')
    I.click('Sign in')  // click using element's text
    // there is page problem, getting error, so using this trick with redirect:
    I.amOnPage('http://zero.webappsecurity.com/online-banking.html')
    I.see('Our Bank is trusted by over 1,000,000 customers world wide.')
}) 