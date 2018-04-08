const data = require('../test-assets/testData')

module.exports = {
  'Login Page Initial Render': function (browser) {
    var content = browser.page.commandsLogin();

    content.navigate()
      .validatePage()
      .initialPage(data.titlepage)
      .mainContent()

    browser.end();
  },

};
