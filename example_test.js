Feature('My Test Suite');

// tests are running from top to bottom one by one
// scenarios are same, just a demo:

Scenario('Should load example.com website', ({ I }) => {
    I.amOnPage("https://www.example.com")
    I.see('Example')  // example is located on example page
    I.seeElement("h1")  // specific element is located on example page
});

Scenario('Should load example.com website - second test', ({ I }) => {
    I.amOnPage("https://www.example.com")
    I.dontSee('Google')  // google text is not located on example page
    I.dontSeeElement("#not_existing_element")  // specific element is not located on example page
});

Scenario('Should load example.com website - third test', ({ I }) => {
    I.amOnPage("https://www.example.com")
    I.seeInCurrentUrl("example.com")  // part of the yrl check
});
