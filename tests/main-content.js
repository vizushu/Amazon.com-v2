const data = require('../test-assets/testData')

module.exports = {
  'Login Page Initial Render': function (browser) {
    var login = browser.page.commandsLogin();

    login.navigate()
      .validatePage()

    browser.end();
  },


 


  


};
