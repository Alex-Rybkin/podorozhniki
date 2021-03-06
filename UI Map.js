var myMap = new UIMap(); 

/* Pages */
myMap.addPageset({
name: 'login_page',
description: 'login form on Podorojniki page',  
pathRegexp: 'http://evbyminsd7238.minsk.epam.com:8080/pdrzh/main'  
});

myMap.addPageset({
name: 'main_page',
description: 'main page after user authorization',  
pathRegexp: 'some regexp'  
});

myMap.addPageset({
name: 'registration_page',
description: 'registration page',  
pathRegexp: 'some regexp'  
});

/* Elements for registration page */
myMap.addElement('registration_page', {
name: 'r_login_field',
description: 'r_login field',
locator: '//*[@id="login"]'
});
myMap.addElement('registration_page', {
name: 'r_password_field',
description: 'r_password field',
locator: '//*[@id="password"]'
});

myMap.addElement('registration_page', {
name: 'r_conf_password_field',
description: 'r_conf password field',
locator: '//*[@id="confirmPassword"]'
});

myMap.addElement('registration_page', {
name: 'r_phone_field',
description: 'r_phone field',
locator: '//*[@id="phone"]'
});

myMap.addElement('registration_page', {
name: 'r_email_field',
description: 'r_e-mail field',
locator: '//*[@id="email"]'
});

myMap.addElement('registration_page', {
name: 'r_agree_check',
description: 'r_agree field',
locator: '/html/body/div/div[2]/div/div/div/div/form/fieldset/div[7]/input'
});
myMap.addElement('registration_page', {
name: 'r_submit_btn',
description: 'r_submit button',
locator: '//*[@id="b"]'
});

myMap.addElement('registration_page', {
name: 'r_back_btn',
description: 'r_back button',
locator: '/html/body/div/div[2]/div/div/div/div/form/fieldset/a'
});

/* Elements for login page*/
myMap.addElement('login_page', {
name: 'login_field',
description: 'login field',
locator: '//*[@id="inputUsername"]'
});

myMap.addElement('login_page', {
name: 'password_field',
description: 'password field',
locator: 'inputPassw'
});

myMap.addElement('login_page', {
name: 'login_btn',
description: 'login button',
locator: '//*[@class="btn btn-primary" and @name="submit"]'
});

myMap.addElement('login_page', {
name: 'register_link',
description: 'registration link',
locator: '/html/body/div/div/div[2]/form/fieldset/div[2]/div/p/a'
});

/* Elements for main page*/

myMap.addElement('main_page', {
name: 'logout_btn',
description: 'logout button',
locator: '//*[@class="btn btn-default" and @href="/pdrzh/j_spring_security_logout"]'
});

myMap.addElement('main_page', {
name: 'username',
description: 'user name',
locator: /html/body/div/div/div[2]/div/div   //'//*[@id="log"]'
});




var manager = new RollupManager();

/* Open start page */
manager.addRollupRule({
    name: 'open_start_page'
    , description: 'Open start page'
    , args: []
	, pre: ''
	, post: 'Start page is opened'
    , commandMatchers: []
	, getExpandedCommands: function(args) {
		var commands = [];
		commands.push({
			command: 'open'
			, target: '/pdrzh/main'
		});
		commands.push({
			command: 'waitForPageToLoad'
		});
		
		
		return commands;
	}
});



/* Register */

manager.addRollupRule({
    name: 'register_user'
    , description: 'Performs registration'
    , args: [
		{
			name: 'rlogin' 
			, description: 'rlogin'
		}
		, {
			name: 'rpass'
			, description: 'rpassword'
		}
		, {
			name: 'phone'
			, description: 'phone number'
		}
		, {
			name: 'email'
			, description: 'email'
		}
    ] 
	, pre: 'Podorojniki start page is opened'
	, post: 'User is registered in the system'
    , commandMatchers: []
	, getExpandedCommands: function(args) {
		var commands = [];
	/*press registration link */
	
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=login_page::register_link()'
		});
		commands.push({
			command: 'clickAndWait'
			, target: 'ui=login_page::register_link()'
		});

		
	/*Checking presence of input fields and buttons */
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_login_field()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_password_field()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_conf_password_field()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_phone_field()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_email_field()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_agree_check()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_submit_btn()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=registration_page::r_back_btn()'
		});
		
		
	/*Checking editable fields */
		commands.push({
			command: 'assertEditable'
			, target: 'ui=registration_page::r_login_field()'
		});
		commands.push({
			command: 'assertEditable'
			, target: 'ui=registration_page::r_password_field()'
		});
		commands.push({
			command: 'assertEditable'
			, target: 'ui=registration_page::r_conf_password_field()'
		});
		commands.push({
			command: 'assertEditable'
			, target: 'ui=registration_page::r_phone_field()'
		});
		commands.push({
			command: 'assertEditable'
			, target: 'ui=registration_page::r_email_field()'
		});
		commands.push({
			command: 'assertEditable'
			, target: 'ui=registration_page::r_agree_check()'
		});
		
	
		
		
	/*Type and check registration information*/
		commands.push({
			command: 'type'
			, target: 'ui=registration_page::r_login_field()'
			, value: args.rlogin
		});
		commands.push({
			command: 'assertValue'
			, target: 'ui=registration_page::r_login_field()'
			, value: args.rlogin
		});
	
		commands.push({
			command: 'type'
			, target: 'ui=registration_page::r_password_field()'
			, value: args.rpass
		});
		commands.push({
			command: 'assertValue'
			, target: 'ui=registration_page::r_password_field()'
			, value: args.rpass
		});
		
		commands.push({
			command: 'type'
			, target: 'ui=registration_page::r_conf_password_field()'
			, value: args.rpass
		});
		commands.push({
			command: 'assertValue'
			, target: 'ui=registration_page::r_conf_password_field()'
			, value: args.rpass
		});
		
		commands.push({
			command: 'type'
			, target: 'ui=registration_page::r_phone_field()'
			, value: args.phone
		});
		commands.push({
			command: 'assertValue'
			, target: 'ui=registration_page::r_phone_field()'
			, value: args.phone
		});
		
		commands.push({
			command: 'type'
			, target: 'ui=registration_page::r_email_field()'
			, value: args.email
		});
		commands.push({
			command: 'assertValue'
			, target: 'ui=registration_page::r_email_field()'
			, value: args.email
		});
	/*checkbox*/
		commands.push({
			command: 'check'
			, target: 'ui=registration_page::r_agree_check()'
		});
		commands.push({
			command: 'assertChecked'
			, target: 'ui=registration_page::r_agree_check()'
		});
	/*Registration confirmation*/
		commands.push({
			command: 'clickAndWait'
			, target: 'ui=registration_page::r_submit_btn()'
		});
	/*check logout button presence */

		
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=main_page::logout_btn()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=main_page::username()'
		});
		commands.push({
			command: 'assertText'
			, target: 'ui=main_page::username()'
			, value: args.rlogin
		});
		
		return commands;
	}
});


/* Login */
manager.addRollupRule({
    name: 'do_login'
    , description: 'Performs a login'
    , args: [
		{
			name: 'login' 
			, description: 'login'
		}
		, {
			name: 'pass'
			, description: 'password'
		}		
    ]
	, pre: 'Podorojniki start page is opened'
	, post: 'User logged to the system'
    , commandMatchers: []
	, getExpandedCommands: function(args) {
		var commands = [];
		// fields presence check
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=login_page::login_field()'
			, value: args.login
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=login_page::password_field()'
			, value: args.login
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=login_page::login_btn()'
			, value: args.login
		});
				
		commands.push({
			command: 'assertEditable'
			, target: 'ui=login_page::login_field()'
			, value: args.login
		});
		commands.push({
			command: 'assertEditable'
			, target: 'ui=login_page::password_field()'
			, value: args.login
		});
				
		//login process
		commands.push({
			command: 'type'
			, target: 'ui=login_page::login_field()'
			, value: args.login
		});
		commands.push({
			command: 'assertValue'
			, target: 'ui=login_page::login_field()'
			, value: args.login
		});
			
		commands.push({
			command: 'type'
			, target: 'ui=login_page::password_field()'
			, value: args.pass
		});
		commands.push({
			command: 'assertValue'
			, target: 'ui=login_page::password_field()'
			, value: args.pass
		});
			
		commands.push({
			command: 'clickAndWait'
			, target: 'ui=login_page::login_btn()'
		});
		//redirect check
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=main_page::logout_btn()'
		});
		commands.push({
			command: 'assertElementPresent'
			, target: 'ui=main_page::username()'
		});
		commands.push({
			command: 'assertText'
			, target: 'ui=main_page::username()'
			, value: args.login
		});
		
		return commands;
	}
});