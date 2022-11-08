Feature('Zero Bank Application - E2E Feedback tests')

Before(({ I }) => {
    console.log("BEFORE HOOK")
    I.amOnPage('http://zero.webappsecurity.com/feedback.html')
})

After(({ I }) => {
    console.log("AFTER HOOK")
})

Scenario('Feedback form - Reset form', ({ I }) => {
    I.fillField('#name', 'Tomas')
    I.fillField('#email', 'tomas@jurkovic.com')
    I.fillField('#subject', 'My feedback')
    I.fillField('#comment', 'Learning codecept')
    I.click("input[value='Clear']")
    I.seeInField('#name', '')
    I.seeInField('#email', '')
    I.seeInField('#subject', '')
    I.seeInField('#comment', '')
})

Scenario('Feedback form - Submit form', ({ I }) => {
    I.fillField('#name', 'Tomas')
    I.fillField('#email', 'tomas@jurkovic.com')
    I.fillField('#subject', 'My feedback')
    I.fillField('#comment', 'Learning codecept')
    I.click("input[value='Send Message']")
    I.seeElement(".offset3")
    I.see("Thank you for your comments, Tomas. They will be reviewed by our Customer Service staff and given the full attention that they deserve.")
})