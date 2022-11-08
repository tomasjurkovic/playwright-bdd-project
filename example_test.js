Feature('example');

Scenario('Should load example.com website', ({ I }) => {
    I.amOnPage("https://www.example.com")
    I.see('Example')  // example is located on example page
    I.dontSee('Google')  // google text is not located on example page
    I.seeElement("h1")  // specific element is located on example page
    I.dontSeeElement("#not_existing_element")  // specific element is not located on example page
});
