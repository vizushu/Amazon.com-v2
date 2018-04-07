const data = require('../test-assets/testData')

module.exports = {
    'Log out existing user account': function (browser) {
        var logout = browser.page.commandsLogin();

        logout.navigate()
            .validatePage()
            .accountPage()
            .loginPage()
            .fillInForm(data.username, data.password)
            .submit()
            .usersignOut()
            .validatePage()
            .accountPage()
            .usersignOut()
            

        browser.end();
    },
}