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
			// .waitForElementPresent('@inputEmail', 10000)
			.waitForElementVisible('@inputEmail', 5000)
			.verify.visible('@inputEmail')
	},
	passPage: function () {
		return this
			.waitForElementPresent('body', 2000)
			.waitForElementVisible('@inputPass', 5000)
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
			.click('span[class="nav-action-inner"]')

		// browser
		// 	.pause(2000)
		// 	this
	},
	validErrorEmail: function () {
		return this
			.verify.valueContains('@inputEmail', '')
			.click('@contButton')
			// .verify.containsText('@error', )
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
			.waitForElementPresent('@cr8Acc', 5000)
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
			// .verify.containsText('@deals', data.under10.fungift, data.under10.accessories)
			.waitForElementPresent('@accessories', 1000)
			.verify.elementPresent('@accessories')
			.assert.elementPresent('@accessories')
			// .verify.containsText('@accessories', data.under10.fungift, data.under10.accessories)
			.waitForElementPresent('@funGift', 1000)
			.verify.elementPresent('@funGift')
			.assert.elementPresent('@funGift')
			// .verify.containsText('@funGift', data.under10.fungift, data.under10.accessories)
			.waitForElementPresent('@lowPrice', 1000)
			.verify.elementPresent('@lowPrice')
			.assert.elementPresent('@lowPrice')
			// .verify.containsText('@lowPrice', data.lowpricebanner.lowpricefashion, data.lowpricebanner.lowpricehome)


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
			.waitForElementPresent('@itemTitle', 2000)
			.waitForElementVisible('@itemTitle', 2000)
			.verify.elementNotPresent('@error')
			.waitForElementVisible('@addCartBut', 5000)
			.verify.elementPresent('@addCartBut')
			.waitForElementVisible('@dropdown', 2000)
			.verify.elementPresent('@dropdown')
			.verify.containsText('@dropdown', 'Select')
			.waitForElementVisible('@addListBut', 2000)
			.verify.elementPresent('@addListBut')

	},
	orderToCart: function () {
		return this
			.click('@dropdown')
			.waitForElementVisible('@size', 2000)
			.click('#native_dropdown_selected_ring_size_1')
			.waitForElementPresent('@qty', 5000)
			.waitForElementVisible('@qty', 2000)
			.setValue('@qty', 001)
			.waitForElementPresent('@addCartBut', 2000)
			.click('@addCartBut')
			.waitForElementVisible('@addedCart', 2000)
			.verify.elementPresent('@addedCart')
			.verify.containsText('@addedCart', 'Added to Cart')


	},
	verifyCart: function () {
		return this
			.click('@cart')

	},
	proceedCheckOut: function () {
		return this
			.waitForElementVisible('@proceedCartBut', 2000)
			.click('@proceedCartBut')
			.waitForElementVisible('@fullname', 5000)
			.verify.elementPresent('@fullname')
			.verify.containsText('@fullnameLabel', 'Full name:')
			.waitForElementVisible('@address', 2000)
			.verify.elementPresent('@address')
			.verify.containsText('@addressLabel', 'Address line 1:')
			.waitForElementVisible('@address2', 2000)
			.verify.elementPresent('@address2')
			.verify.containsText('@address2Label', 'Address line 2:')
			.waitForElementVisible('@city', 2000)
			.verify.elementPresent('@city')
			.verify.containsText('@cityLabel', 'City:')
			.waitForElementVisible('@state', 2000)
			.verify.elementPresent('@state')
			.verify.containsText('@stateLabel', 'State/Province/Region:')
			.waitForElementVisible('@zipcode', 2000)
			.verify.elementPresent('@zipcode')
			.verify.containsText('@zipcodeLabel', 'ZIP:')
			.waitForElementVisible('@country', 2000)
			.verify.elementPresent('@country')
			.verify.containsText('@countryLabel', 'Country:')
			.waitForElementVisible('@phone', 2000)
			.verify.elementPresent('@phone')
			.verify.containsText('@phoneLabel', 'Phone number:')
			.waitForElementVisible('@gatecode', 2000)
			.verify.elementPresent('@gatecode')
			.verify.containsText('@gatecodeLabel', 'Security access code:')

			.setValue('@fullname', data.fullname)
			.setValue('@address', data.address)
			.setValue('@address2', data.address2)
			.setValue('@city', data.city)
			.setValue('@state', data.state)
			.setValue('@zipcode', data.zipcode)
			// .setValue('@country', data.country)
			.setValue('@phone', data.phone)

			// .verify.containsText('@submit', 'Deliver to this address')
			.click('@submit')
			.waitForElementVisible('@shipping', 5000)
			.waitForElementVisible('@submit', 5000)
			// .verify.containsText('@submit', 'Continue')
			.click('@submit')

	},
	addCreditCard: function () {
		return this

			.waitForElementPresent('#existing-payment-methods', 5000)
			.click('#wrapper-new-cc > div:nth-child(2) > a')
			.waitForElementVisible('@newCC', 5000)
			.verify.elementPresent('@newCC')
			.waitForElementVisible('@ccName', 2000)
			.verify.elementPresent('@ccName')
			.setValue('@ccName', data.fullname)
			.setValue('@ccNumber', data.ccnumber)

			.waitForElementPresent('div[class="field-span spacing-top-large card-images"]', 2000)
			.verify.elementPresent('div[class="field-span spacing-top-large card-images"]')

			.waitForElementVisible('@ccYear', 2000)
            .verify.elementPresent('@ccYear')
			.click('@ccYear')
			
			.waitForElementPresent('div[class="field-span spacing-top-large card-images"]', 2000)
			.verify.elementPresent('div[class="field-span spacing-top-large card-images"]')

            .waitForElementVisible('@ccYear2020', 5000)
			.verify.elementPresent('@ccYear2020')
			.click('@ccYear2020')
	},
	addCreditCard2: function () {
		return this
			.waitForElementVisible('@ccMonth', 2000)
            .verify.elementPresent('@ccMonth')
            .click('@ccMonth')
            .waitForElementVisible('@ccMonth7', 2000) //cant get pass this
            .verify.elementPresent('@ccMonth7')
			.click('@ccMonth7')

			.waitForElementPresent('div[class="field-span spacing-top-large card-images"]', 2000)
			.verify.elementPresent('div[class="field-span spacing-top-large card-images"]')

			.waitForElementPresent('div[class="field-span spacing-top-large card-images"]', 2000)
			.verify.elementPresent('div[class="field-span spacing-top-large card-images"]')
			
			.waitForElementVisible('@ccAddCard', 2000)
            .verify.elementPresent('@ccAddCard')
            .click('@ccAddCard')
            .waitForElementVisible('body', 2000)
            .waitForElementVisible('#continue-top', 2000)
            .click('#continue-top')
			.verify.elementNotPresent('@error')
			.click('@deliverBut')
			
			.waitForElementVisible('body', 5000)
			// .verify.elementPresent('@primeBox')
			.waitForElementVisible('@placeOrder', 5000)
			.verify.elementPresent('@placeOrder')
			.click('@placeOrder')
			.waitForElementPresent('@success', 5000)
			.verify.elementPresent('@success')
	},
	orderPlaced: function() {
		return this

			.waitForElementPresent('@orders', 5000)
			.verify.elementPresent('@orders')
			.click('@orders')


			.waitForElementVisible('@accountOrders', 5000)
			.verify.elementPresent('@accountOrders')
			.waitForElementVisible('@controlContainer', 2000)
			.verify.elementPresent('@controlContainer')
			.waitForElementVisible('@itemOrderedContainer', 2000)
			.verify.elementPresent('@itemOrderedContainer')
			.waitForElementVisible('@itemOrdered', 5000)
			.verify.elementPresent('@itemOrdered')
			.getText('@itemOrdered', function (result) {
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
				console.log('THIS IS YOUR ORDERED ITEM:', result.value);
			})
			
			.waitForElementVisible('@cancelItem', 2000)
			.verify.elementPresent('@cancelItem')
			.click('@cancelItem')	

			.waitForElementVisible('@cancelReason', 2000)
			.verify.elementPresent('@cancelReason')
			.click('@cancelReason')

			.waitForElementVisible('@cancelReasonList', 5000)
			.verify.elementPresent('@cancelReasonList')
			.click('@cancelReasonList')

			.waitForElementVisible('@cancelButton', 5000)
			.verify.elementPresent('@cancelButton')
			.click('@cancelButton')

			.waitForElementVisible('@orderCancelled', 2000)
			.verify.elementPresent('@orderCancelled')
			.waitForElementVisible('@continueShop', 2000)
			.verify.elementPresent('@orderCancelled')
			
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
		orders: {
			selector: '(//span[@class="nav-line-2"])[4]', //*[@id="nav-orders"]/span[2]
			locateStrategy: 'xpath'
		},
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
		result: {
			selector: '//*[@id="result_2"]/div/div/div/div[2]/div[1]/div[1]/a',
			locateStrategy: 'xpath'
		},
		resultImg: '#imgTagWrapperId',
		itemTitle: '#productTitle',

		useAddress: '#orderSummaryPrimaryActionBtn-announce',
		


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

		primeBox: '#header-black',
		primeShip: '#order_0_ShippingSpeed_PrimeSMSP-sss-us',
		stdFreeShip: '#order_0_ShippingSpeed_sss-us',
		stdShip: '#order_0_ShippingSpeed_std-n-us',
		sameShip: '#order_0_ShippingSpeed_same-us',
		newCC: '#new-cc',
		ccName: '#ccName',
		ccNameLabel: 'label[for="ccName"]',
		ccNumber: '#addCreditCardNumber',
		ccNumberLabel: 'label[for="addCreditCardNumber"]',
		ccMonth: {
			selector: '(//button[@class="a-button-text a-declarative"])[1]',
			locateStrategy: 'xpath'
		},
		ccMonth7: {
			selector: '(//li[@tabindex="0"])[7]',
			locateStrategy: 'xpath'
		},
		ccYear2020: {
			selector: '(//li[@tabindex="0"])[3]',
			locateStrategy: 'xpath'
		},
		ccYear: {
			selector: '(//button[@class="a-button-text a-declarative"])[2]', 
			locateStrategy: 'xpath'
		},
		ccAddCard: '#ccAddCard', //Add credit card button
		primeHeader: 'center[class="header"]', // renierdelacruz, why pay for shipping? Save $8.94 with FREE Two-Day Shipping on this order
		deliverBut: {
			selector: '(//span[@class="a-button-inner"])[1]',
			locateStrategy: 'xpath'
		},


		//order placed
		confirmation: '#subHeadingAndMobileWidget',
		placeOrder: 'span[class="a-button-inner a-button-span12 buy-button-height-1"]',
		success: 'div[class="a-column a-span7', //Thank you, your order has been placed.
		
		//checkin your order

		trackPackage: '#a-autoid-3-announce',

		//cancelling order
		cancelReasonList: 'option[value="mistake"]',
		cancelItem: '#Cancel-items_1',
		cancelReason:  'select[name="cancel.reason',
		cancelButton: '#cancelButton',
		orderCancelled: 'h4[class="a-alert-heading"]', //This order has been cancelled.
		continueShop: 'a[href="/ref=od_aui_cancelled_keep_shop',
		accountOrders: 'div[class="a-column a-span6"]',
		controlContainer: '#controlsContainer',
		itemOrderedContainer: '#ordersContainer',
		itemOrdered: {
			selector: '(//a[@class="a-link-normal"])[6]',
			locateStrategy: 'xpath'
		},
	}
};