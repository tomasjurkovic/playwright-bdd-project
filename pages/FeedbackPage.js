const { I } = inject();

module.exports = {

  // set my locators:
  nameInput: "#name",
  emailInput: "#email",
  subjectInput: "#subject",
  commentInput: "#comment",
  
  clearButton: "input[value='Clear']",
  submitButton: "input[value='Send Message']",
  successMessage: ".offset3",

  // insert your locators and methods here
  fillFeedbackForm(name, email, subject, comment) {
    I.fillField(this.nameInput, name)
    I.fillField(this.emailInput, email)
    I.fillField(this.subjectInput, subject)
    I.fillField(this.commentInput, comment)
  },

  clickOnResetButton() {
    I.click(this.clearButton)
  },

  submitForm() {
    I.click(this.submitButton)
  },

  assertFormIsCleared() {
    I.seeInField(this.nameInput, '')
    I.seeInField(this.emailInput, '')
    I.seeInField(this.subjectInput, '')
    I.seeInField(this.commentInput, '')
  },

  assertFormIsSubmitted(name) {
    I.seeElement(this.successMessage)
    I.see("Thank you for your comments, " + name + ". They will be reviewed by our Customer Service staff and given the full attention that they deserve.")
  }
}
