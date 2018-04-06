const data = require('../test-assets/testData')

module.exports = {
    'Create account with invalid email and invalid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
            .validatePage()
            .accountPage()
            .createAccountPage()
            .createAccount('aj','ajdevmountain.com','les8','les8')
            .createAccountError()

        browser.end();
    },

    'Create account with invalid email and valid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
            .validatePage()

        browser.end()
    },

    'Create account with valid email and invalid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
            .validatePage()

        browser.end()
    },

    'Create account with valid email and valid password': function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
            .validatePage()

        browser.end()
    }
}