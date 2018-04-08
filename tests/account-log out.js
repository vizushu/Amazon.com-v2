// const data = require('../test-assets/testData')

// module.exports = {
//     'Log out existing user account': function (browser) {
//         var logout = browser.page.commandsLogin();
//         logout.navigate()
//             .validatePage()
//         browser
//             .pause(2000)
//         logout
//             .accountPage()
//         browser
//             .pause(5000)
//         logout
//             .loginPage()
//             .fillInForm(data.username, data.password)
//             .submit()
//             .fillInForm(data.username, data.password)
//             .initialPage(data.signin)
//             .click('@signInBut')
//             .validatePage()
//             .accountPage()
//             .usersignOut()

//         browser.end();
//     },
// }