const data = require('../test-assets/testData')

var loginCommands = {
	validatePage: function () {
		return this
			.waitForElementVisible('body', 1000)
			.assert.title(data.titlepage)
			.assert.urlContains(data.url)
			.assert.visible('body')
			.verify.elementPresent('@logo')
			.assert.visible('@logo')
			.verify.containsText('@logo', 'Amazon')
			.verify.elementNotPresent('@error')
	},
	fillInForm: function (email, password) {
		return this
			.waitForElementVisible('body', 1000)
			.setValue('@inputEmail', email)
			.setValue('@inputPass', password)
	},
	loginPage: function () {
		return this
			.waitForElementPresent('@inputEmail', 2000)
			.waitForElementVisible('@inputEmail', 2000)
			.verify.visible('@inputEmail')
	},
	passPage: function () {
		return this
			.waitForElementPresent('body', 2000)
			.waitForElementVisible('@inputPass', 2000)
			.verify.visible('@inputPass')
	},
	submit: function () {
		return this
			.verify.visible('@contButton', )
			.click('@contButton')
	},
	accountPage: function () {
		return this

			.waitForElementPresent('@accList', 1000)
			.verify.elementPresent('@accList')
			.assert.visible('@accList')
			.verify.containsText('@accList', data.account)
			.moveToElement('@accList', 10, 30)
			.click('@accList')
		browser
			.pause(2000)
			this
	},
	validErrorEmail: function ( ) {
		return this
			.verify.valueContains('@inputEmail', '')
			.click('@contButton')
			.verify.containsText('@error',  )
			.verify.visible('@error')
	},
	validErrorPass: function ( ) {
		return this
			.verify.valueContains('@inputPass', '')
			.click('@signInBut')
			.verify.containsText('@error',  )
			.verify.visible('@error')
	},
	createAccountPage: function () {
		return this
			.click('@accList')
			.waitForElementVisible('body', 2000)
			// .assert.visible('@amaIcon')
			// .assert.title('Amazon Sign In')
			.verify.elementPresent('@cr8Acc')
			.verify.containsText('@cr8Acc', 'Create your Amazon account')
			.click('@cr8Acc')

			.assert.title('Amazon Registration')
			.verify.elementPresent('@newNameInput')
			.assert.visible('@urName')
			.verify.containsText('@urName', 'Your name')

			.verify.elementPresent('@newEmailInput')
			.assert.visible('@urEmail')
			.verify.containsText('@urEmail', 'Email')

			.verify.elementPresent('@newPassInput')
			.assert.visible('@urPass')
			.verify.containsText('@urPass', 'Password')

			.verify.elementPresent('@rePassInput')
			.assert.visible('@urRePass')
			.verify.containsText('@urRePass', 'Re-enter password')
	},
	createAccount: function (yourname, email, password, repassword ) {
		return this
			.waitForElementVisible('body', 2000)
			.setValue('@newNameInput', yourname)
			.setValue('@newEmailInput', email)
			.setValue('@newPassInput', password)
			.setValue('@rePassInput', repassword)
			.click('@contButton')

	},
	createAccountError: function (error) {
		return this
			.waitForElementVisible('body', 2000)
			.verify.valueContains('@newNameInput', '')
			.click('@contButton')
			.verify.containsText('@cr8Error', 'Enter a valid email address')
			.verify.visible('@cr8Error', 'Passwords must be at least 6 characters.')
			
			
	},

};


module.exports = {
	commands: [loginCommands],
	url: function () {
		return this.api.launchUrl;
	},
	elements: {
		//main content
		cr8Acc: '#createAccountSubmit',
		streamNav: '#nav-upnav',
		logo: '#nav-logo',
		amaIcon: 'a[class="a-link-nav-icon',
		banner: '#desktop-banner',
		deals: '#desktop-1',
		lowPrice: '#desktop-3',
		related: '#uber-widget-ns_KF7N85GWJ7FY7WEAAX6N_3553_',
		recommend: 'div[class="a-section a-spacing-base a-spacing-top-medium a-padding-none a-text-center rhf-fresh-header',
		dealToday: '#navSwmHoliday',
		error: '#auth-error-message-box',

		// navigation menu
		account: '#nav-al-your-account',
		accList: {
			selector: '//*[@id="nav-link-accountList"]/span[2]',
			locateStrategy: 'xpath'
		},
		signIn: '#nav-flyout-ya-signin > a > span',
		orders: 'a[href="/gp/css/order-history/ref=nav_nav_orders_first',
		tryPrime: 'a[href="/gp/prime/ref=nav_prime_try_btn',
		cart: 'a[href="/gp/cart/view.html/ref=nav_cart',

		//Create account
		newNameInput: 'input[type="text"]',
		newEmailInput: '#ap_email',
		newPassInput: '#ap_password',
		rePassInput: '#ap_password_check',
		contButton: '#continue', //BUTTON
		
		cr8Error: 'div[class="a-alert-content"]',
		cr8invalidEmail: '#auth-email-invalid-email-alert',
		cr8emailMiss: '#auth-email-missing-alert',
		cr8nameMiss: '#auth-customerName-missing-alert',
		cr8passMiss: '#auth-password-missing-alert',

		urName: 'label[for="ap_customer_name',
		urEmail: 'label[for="ap_email',
		urPass: 'label[for="ap_password',
		urRePass: 'label[for="ap_password_check',


		//Sign In/Out
		inputEmail: '#ap_email',
		inputPass: 'input[type="password"]',
		signInBut: '#signInSubmit',
		signinText: '#a-autoid-0-announce',
		singOutBut: '#nav-item-signout-sa', //BUTTON
		cr8Acc: '#createAccountSubmit',

		srchInput: '#twotabsearchtextbox',
		submit: 'input[type="submit"]',

		//other content
		result: '#result_0',
		resultImg: '#imgTagWrapperId',
		itemTitle: '#productTitle',
		addCartBut: '#add-to-cart-button',
		addedCart: '#huc-v2-order-row-confirm-text',
		proceedCartBut: '#hlb-ptc-btn-native',
		cartBut: '#hlb-view-cart-announce',
		useAddress: '#orderSummaryPrimaryActionBtn-announce',
		placeOrder: '#submitOrderButtonId-announce',
		orderPlaced: 'div[class="a-column a-span7', //Thank you, your order has been placed.
		cancelItem: '#Cancel-items_1',
		cancelReason: 'select[name="cancel.reason',
		cancelButton: 'input[type="image',
		orderCancelled: 'div[class="a-box-inner a-alert-container', //This order has been cancelled.
		continueShop: 'a[href="/ref=od_aui_cancelled_keep_shop',

		qty: '#quantity',
		addListBut: '#add-to-wishlist-button-submit',
		popaddList: '#WLHUC_result',

	}
};