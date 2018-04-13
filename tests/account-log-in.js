const data = require('../test-assets/testData')


module.exports = {

     'Login with a invalid email and valid password': function (browser) {
        var login = browser.page.commandsLogin();

        login.navigate()
          .validatePage()
        login
          .accountPage()
        browser
          .pause(1000)
        login
          .loginPage()
          .fillInForm('invalid@invalidemail.com', 'landway32')
          .validErrorEmail('There was a problem')
          .submit()

        browser.end();
      },

      'Login with invalid email and invalid password': function (browser) {
        var login = browser.page.commandsLogin();

        login.navigate()
          .validatePage()
        browser
          .pause(2000)
        login
          .accountPage()
        browser
          .pause(2000)
        login
          .loginPage()
          .fillInForm('asd', 'dasd')
          .validErrorEmail('There was a problem')
          .submit()

        browser.end();
      },


      'Login with a valid email and invalid password': function (browser) {
        var login = browser.page.commandsLogin();

        login.navigate()
          .validatePage()
        browser
          .pause(2000)
        login
          .accountPage()
        browser
          .pause(2000)
        login
          .loginPage()
          .fillInForm('data.username', 'dasd')
          .submit('@contButton')
          .fillInForm('data.username', 'dasd')
        //   .passPage()
          .validErrorPass('There was a problem')
          .click('@signInBut')

        browser.end();
      },

    'Login with valid email and valid password': function (browser) {
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

        browser.end();
    }

}