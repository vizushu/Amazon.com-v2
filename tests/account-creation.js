const data = require('../test-assets/testData')

module.exports = {
    'Create account with invalid email and invalid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
            .validatePage()
            .accountPage()
            .createAccountPage()
            .createAccount('renierdelacruz','mereniderdelacruz.com','!=pw','!=pw')
            .createAccountError1()

        browser.end();
    },

    'Create account with invalid email and valid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
        .validatePage()
        .accountPage()
        .createAccountPage()
        .createAccount('renierdelacruz','merenierdelacruz.com','validpassword','validpassword')
        .createAccountError2()

    browser.end();
    },

    'Create account with valid email and invalid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
        .validatePage()
        .accountPage()
        .createAccountPage()
        .createAccount('renierdelacruz','me@renierdelacruz.com','!=pw','!=pw')
        .createAccountError3()

    browser.end();
    },

    'Create account with valid email and valid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
        .validatePage()
        .accountPage()
        .createAccountPage()
        .createAccount('renierdelacruz','me@renierdelacruz.com','valid=pass','valid=pass')

    browser.end();
    }
}