const { By, Key, Builder, WebElement, Alert } = require('selenium-webdriver');
require('chromedriver');

async function login(){
  const username = 'PUT YOUR EMAIL HERE';
  const password = 'PUT YOUR PASSWORD HERE';

  //To wait for browser to build and launch properly.
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch https://www.carnextdoor.com.au from the browser with our code.
  await driver.get('https://www.carnextdoor.com.au');

  //To click "Login link"
  let loginlink = By.className('cyp-test-login cnd-tabs__tab__link');
  await driver.findElement(loginlink).click();


  //To send the Username:
  await driver.findElement(By.id('member_session_email')).sendKeys(username);

  //To send the Password:
  await driver.findElement(By.id('member_session_password')).sendKeys(password);
 
  //To Cick "Login" button:
  
  let loginbtn = By.css('.cnd-btn--large');
  await driver.findElement(loginbtn).click();

  //let editprofile = By.linkText('View / edit profile');
  //await driver.findElement(editprofile).click();


  //var editprofile = driver.wait(until.elementLocated(By.linkText('View / edit profile')));
  //editprofile.click();

  

    
  //FindBy(how = How.CSS, css = "cnd-btn--large").click();
  
  //Verify the page title and print it
  
 

  //const title = await driver.getTitle();
  //console.log('Title is:',title);
 //wait(setTimeout (100));
 
  
   

   // const title = await driver.getTitle();
    //console.log('Title is:',title);
    //await driver.wait(webdriver.until.titleMatches('Members | Car Next Door'), 5000);


 

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();
}

login();

