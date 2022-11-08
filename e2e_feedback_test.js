const FeedbackPage = require("./pages/FeedbackPage")

Feature('Zero Bank Application - E2E Feedback tests')

Before(({ I }) => {
    console.log("BEFORE HOOK")
    I.amOnPage('http://zero.webappsecurity.com/feedback.html')
})

After(({ I }) => {
    console.log("AFTER HOOK")
})

Scenario('Feedback form - Reset form', ({ I, FeedbackPage }) => {
    FeedbackPage.fillFeedbackForm("Tomas", "tomas@jurkovic.com", "My Feedback", "Learning Codecept")
    FeedbackPage.clickOnResetButton()
    FeedbackPage.assertFormIsCleared()
})

Scenario('Feedback form - Submit form', ({ I, FeedbackPage }) => {
    FeedbackPage.fillFeedbackForm("Tomas", "tomas@jurkovic.com", "My Feedback", "Learning Codecept")
    FeedbackPage.submitForm()
    FeedbackPage.assertFormIsSubmitted("Tomas")
})