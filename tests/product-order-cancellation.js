const data = require('../test-assets/testData')

module.exports = {
    'Load main content': function (browser) {
        var main = browser.page.commandsLogin();

        main.navigate()
            .validatePage()
            .initialPage(data.titlepage)
        browser.execute('scrollTo(0, 1000)')
        browser.execute('scrollTo(0, 2000)')
        main
            .mainContent()

    },
    'Log in existing user account': function (browser) {
        var login = browser.page.commandsLogin();

        login.navigate()
            .validatePage()
        browser.pause(2000)
        login
            .accountPage()
        browser.pause(2000)
        login
            .loginPage()
            .fillInForm(data.username, data.password)
            .submit()
            .fillInForm(data.username, data.password)
            .initialPage(data.signin)
            .click('@signInBut')
            .initialPage(data.titlepage)
    },
    'Check order placed': function (browser) {
        var settings = browser.page.commandsLogin();

        settings.navigate()
            .validatePage()
            .initialPage(data.titlepage)
            .accountPage()
            .orderPlaced()
            .initialPage('Order Details"')
        browser.pause(2000) 
    },
    // 'Cancel order placed': function (browser) {
    //     var cancel =  browser.page.commandsLogin();

    //     cancel.navigate()
    //         .initialPage('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
    //         .cancelOrder()
            
    // }
}