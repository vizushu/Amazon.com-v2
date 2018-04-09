const data = require('../test-assets/testData')

var loginCommands = {
	initialPage: function (titlepage) {
		return this
			.waitForElementPresent('body', 2000)
			.waitForElementVisible('body', 1000)
			.assert.title(titlepage)
			.assert.urlContains(data.url)
			.assert.visible('body')
			.verify.elementNotPresent('@error')

	},

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
			.waitForElementVisible('body', 1000)
			// .waitForElementPresent('@inputEmail', 2000)
			// .waitForElementVisible('@inputEmail', 2000)
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
			.click('@signInBut')
	},
	accountPage: function () {
		return this
			.waitForElementPresent('body', 2000)
			.waitForElementVisible('@accList', 2000)
			.verify.elementPresent('@accList')
			.assert.visible('@accList')
			.verify.containsText('@accList', data.account)
			.moveToElement('@accList', 10, 30)
			.click('@accList')
		// browser
		// 	.pause(2000)
		// 	this
	},
	validErrorEmail: function () {
		return this
			.verify.valueContains('@inputEmail', '')
			.click('@contButton')
			.verify.containsText('@error', )
			.verify.visible('@error')
	},
	validErrorPass: function () {
		return this
			.verify.valueContains('@inputPass', '')
			.click('@signInBut')
			.verify.containsText('@error', )
			.verify.visible('@error')
	},
	createAccountPage: function () {
		return this
			.waitForElementPresent('body', 2000)
			// .assert.visible('@amaIcon')
			// .assert.title('Amazon Sign In')
			.waitForElementPresent('@cr8Acc', 2000)
			.verify.visible('@cr8Acc')
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
	createAccount: function (yourname, email, password, repassword) {
		return this
			.waitForElementVisible('body', 2000)
			.setValue('@newNameInput', yourname)
			.setValue('@newEmailInput', email)
			.setValue('@newPassInput', password)
			.setValue('@rePassInput', repassword)
			.click('@contButton')

	},
	createAccountError1: function () {
		return this
			.waitForElementVisible('body', 2000)
			.click('@contButton')
			.waitForElementVisible('@cr8invalidEmail', 1000)
			.verify.visible('@cr8invalidEmail')
			.verify.containsText('@cr8invalidEmail', 'Enter a valid email address')
			.waitForElementVisible('@cr8invalidPass', 1000)
			.verify.visible('@cr8invalidPass')
			.verify.containsText('@cr8invalidPass', 'Passwords must be at least 6 characters.')

	},
	createAccountError2: function () {
		return this
			.waitForElementVisible('body', 2000)
			.click('@contButton')
			.waitForElementVisible('@cr8invalidEmail', 1000)
			.verify.visible('@cr8invalidEmail')
			.verify.containsText('@cr8invalidEmail', 'Enter a valid email address')

	},
	createAccountError3: function () {
		return this
			.waitForElementVisible('body', 2000)
			.click('@contButton')
			.waitForElementVisible('@cr8invalidPass', 1000)
			.verify.visible('@cr8invalidPass')
			.verify.containsText('@cr8invalidPass', 'Passwords must be at least 6 characters.')

	},

	usersignOut: function () {
		return this
			.waitForElementVisible('body', 2000)
			.waitForElementVisible('@accList', 2000)
			// .verify.elementPresent('@accList')
			.assert.visible('@accList')
			.verify.containsText('@accList', data.account)
			// .verify.containsText('@accList', data.account)
			.moveToElement('@accList', 10, 30)
			.click('@accList')
			.click('@singOutBut')
	},
	mainContent: function () {
		return this
			.waitForElementPresent('@streamNav', 2000)
			.verify.elementPresent('@streamNav')
			.assert.visible('@streamNav')
			.waitForElementPresent('@banner', 1000)
			.verify.elementPresent('@banner')
			.assert.elementPresent('@banner')
			.waitForElementPresent('@deals', 1000)
			.verify.elementPresent('@deals')
			.assert.elementPresent('@deals')
			.verify.containsText('@deals', data.under10.fungift, data.under10.accessories)
			.waitForElementPresent('@accessories', 1000)
			.verify.elementPresent('@accessories')
			.assert.elementPresent('@accessories')
			.verify.containsText('@accessories', data.under10.fungift, data.under10.accessories)
			.waitForElementPresent('@funGift', 1000)
			.verify.elementPresent('@funGift')
			.assert.elementPresent('@funGift')
			.verify.containsText('@funGift', data.under10.fungift, data.under10.accessories)
			.waitForElementPresent('@lowPrice', 1000)
			.verify.elementPresent('@lowPrice')
			.assert.elementPresent('@lowPrice')
			.verify.containsText('@lowPrice', data.lowpricebanner.lowpricefashion, data.lowpricebanner.lowpricehome)


			.waitForElementPresent('@accList', 1000)
			.verify.containsText('@accList', data.account)

	},
	searchAmazon: function (searchItem) {
		return this
			.waitForElementVisible('body', 1000)
			.setValue('@srchInput', searchItem)
			.click('@submit')
			// .verify.containsText('@srchInput', searchItem)
			.waitForElementPresent('@result', 1000)
			.click('@result')
			.waitForElementVisible('body', 5000)
			.waitForElementVisible('@itemTitle', 5000)
			.getText('@itemTitle', function (result) {
				console.log('Searched Item:', result.value);
			})
			.getText('@price', function (result) {
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);
				console.log('Current Price!!!:', result.value);

			});
	},
	userSettings: function (text) {
		return this
			.waitForElementPresent('body', 2000)
			.waitForElementVisible('body', 2000)
			.verify.elementNotPresent('@error')
			.waitForElementPresent('@idHUD', 2000)
			.verify.elementPresent('@idHUD')
			.waitForElementVisible('@id', 2000)
			.verify.elementPresent('@id')
			.waitForElementVisible('@yourAddress', 2000)
			.verify.elementPresent('@yourAddress')
			.verify.containsText('@yourAddress', 'Your Addresses')
			.waitForElementVisible('@yourSecurity', 2000)
			.verify.elementPresent('@yourSecurity')
			.verify.containsText('@yourSecurity', 'Login & security')
			.waitForElementVisible('@yourOrders', 2000)
			.verify.elementPresent('@yourOrders')
			.verify.containsText('@yourOrders', 'Your Orders')
			.waitForElementVisible('@yourPayment', 2000)
			.verify.elementPresent('@yourPayment')
			.verify.containsText('@yourPayment', 'Payment options')

			.getText('@id', function (result) {
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
				console.log('WELCOME!!!:', result.value);
			}) 
	},
	orderProductElements: function () {
		return this
		.waitForElementPresent('body', 2000)
		.waitForElementVisible('body', 2000)
		.verify.elementNotPresent('@error')
		.waitForElementVisible('@addCartBut', 2000)
		.verify.elementPresent('@addCartBut')
		.waitForElementVisible('@dropdown', 2000)
		.verify.elementPresent('@dropdown')
		.verify.containsText('@dropdown', 'Select')
		.waitForElementVisible('@size', 2000)
		.verify.elementPresent('@size')
		.waitForElementVisible('@addListBut', 2000)
		.verify.elementPresent('@addListBut')
		.verify.containsText('@addListBut', 'Add to List')
		.waitForElementVisible('@yourPayment', 2000)
		.verify.elementPresent('@yourPayment')
		.verify.containsText('@yourPayment', 'Payment options')
	},
	orderToCart: function () {
		return this	
		.click('@dropdown')
		.waitForElementVisible('@size', 2000)
		.setValue('@size', 4)
		.setValue('@dropdown', 4)
		.waitForElementPresent('@qty', 2000)
		.waitForElementVisible('@qty', 2000)
		.setValue('@qty', 1)
		.waitForElementPresent('@addCartBut', 2000)
		.verify.containsText('@addCartBut', 'Add to Cart')
		.click('@addCartBut')

	}

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
		accessories: '#desktop-2',
		funGift: '#desktop-3',
		lowPrice: '#desktop-4',
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
		cr8invalidPass: '#auth-password-invalid-password-alert',

		urName: 'label[for="ap_customer_name',
		urEmail: 'label[for="ap_email',
		urPass: 'label[for="ap_password',
		urRePass: 'label[for="ap_password_check',

		//Your Account
		id: '#hud-customer-name',
		idHUD: '#hud-dashboard',
		yourAccount: '#nav-al-your-account > a:nth-child(2)',
		yourAddress: {
			selector: '//*[@id="a-page"]/div[3]/div/div[2]/div[1]/a/div/div',
			locateStrategy: 'xpath'
		},
		yourSecurity: {
			selector: '//*[@id="a-page"]/div[3]/div/div[1]/div[2]/a/div/div',
			locateStrategy: 'xpath'
		},
		yourOrders: {
			selector: '//*[@id="a-page"]/div[3]/div/div[1]/div[1]/a/div/div',
			locateStrategy: 'xpath'
		},
		yourPayment: {
			selector: '//*[@id="a-page"]/div[3]/div/div[2]/div[2]/a/div/div',
			locateStrategy: 'xpath'
		},

		//Sign In/Out
		inputEmail: '#ap_email',
		inputPass: 'input[type="password"]',
		signInBut: '#signInSubmit',
		signinText: '#a-autoid-0-announce',
		singOutBut: '#nav-item-signout-sa', //BUTTON
		cr8Acc: '#createAccountSubmit',
		srchInput: '#twotabsearchtextbox',
		

		//search result
		price: '#priceblock_ourprice',
		result: 'a[class="a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal"]',
		resultImg: '#imgTagWrapperId',
		itemTitle: '#productTitle',
		
		useAddress: '#orderSummaryPrimaryActionBtn-announce',
		placeOrder: '#submitOrderButtonId-announce',
		orderPlaced: 'div[class="a-column a-span7', //Thank you, your order has been placed.
		cancelItem: '#Cancel-items_1',
		cancelReason: 'select[name="cancel.reason',
		cancelButton: 'input[type="image',
		orderCancelled: 'div[class="a-box-inner a-alert-container', //This order has been cancelled.
		continueShop: 'a[href="/ref=od_aui_cancelled_keep_shop',

		
		addListBut: '#add-to-wishlist-button-submit',
		popaddList: '#WLHUC_result',

		//Placing an order
		addCartBut: '#add-to-cart-button',
		dropdown: '#dropdown_selected_ring_size',
		size: '#ring_size_1',
		qty: '#quantity',
		addListBut: '#add-to-wishlist-button-submit',
		popaddList: '#WLHUC_result',
		// primeAds: 'div[class="a-popover-wrapper"]',
		// primeQualify: '#a-popover-content-7',
		// primeNoBut: '#sbbop-no-button',
		// primeYesBut: '#sbbop-yes-button',
		proceedCartBut: '#hlb-ptc-btn-native', //proceed to cart button
		cartBut: '#hlb-view-cart-announce',
		addedCart: '#huc-v2-order-row-confirm-text', //added to cart confirmation

		//Address Input field
		fullname: '#enterAddressFullName',
		fullnameLabel: 'label[for="enterAddressFullName"]',
		address: '#enterAddressAddressLine1',
		addressLabel: 'label[for="enterAddressAddressLine1"]',
		address2: '#enterAddressAddressLine2',
		address2Label: 'label[for="enterAddressAddressLine2"]',
		city: '#enterAddressCity',
		cityLabel: 'label[for="enterAddressCity"]',
		state: '#enterAddressStateOrRegion',
		stateLabel: 'label[for="enterAddressStateOrRegion"]',
		zipcode: '#enterAddressPostalCode',
		zipcodeLabel: 'label[for="enterAddressPostalCode"]',
		country: '#enterAddressCountryCode',
		countryLabel: 'label[for="enterAddressCountryCode"]',
		dropUS: {
			selector: '//*[@id="enterAddressCountryCode"]/option[233]',
			locateStrategy: 'xpath'
		},
		phone: '#enterAddressPhoneNumber',
		phoneLabel: 'label[for="enterAddressPhoneNumber"]',
		gatecode: '#GateCode',
		gatecodeLabel: 'label[for="GateCode"]',
		submit: 'input[type="submit"]', //Continue, Submit button
		shipping: '#sosp-touch-indicator', //Choose shipping page
		primeBox: '#availableForPrimeBox',
		primeShip: '#order_0_ShippingSpeed_PrimeSMSP-sss-us',
		stdFreeShip: '#order_0_ShippingSpeed_sss-us',
		stdShip: '#order_0_ShippingSpeed_std-n-us',
		sameShip: '#order_0_ShippingSpeed_same-us',
		newCC: '#new-cc',
		ccName: '#ccName',
		ccNameLabel: 'label[for="ccName"]',
		ccNumber: '#addCreditCardNumber',
		ccNumberLabel: 'label[for="addCreditCardNumber"]',
		ccMonth: '#ccMonth',
		ccYear: '#ccYear',
		ccAddCard: '#ccAddCard', //Add credit card button
		primeHeader: 'center[class="header"]', // renierdelacruz, why pay for shipping? Save $8.94 with FREE Two-Day Shipping on this order

		
	}
};