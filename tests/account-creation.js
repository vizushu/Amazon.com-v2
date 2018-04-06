const data = require('../test-assets/testData')

module.exports = {
    'Create account with invalid email and invalid password' : function (browser) {
        var create = browser.page.commandsLogin();

        create.navigate()
            .validatePage()

        browser.end();
    },

    'Create account with invalid email and valid password' : function (browser) {
        var create = browser.page.commandsLogin();
        
        create.navigate()
            .validatePage()

        browser.end()
    }
}