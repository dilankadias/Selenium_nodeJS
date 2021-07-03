const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function search(){
  const searchString = 'Car Next Door';
  const username = 'mapddias@gmail.com';
  const password = 'Smdpinto123';

  //To wait for browser to build and launch properly
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch http://google.com from the browser with our code.
  await driver.get('http://google.com');

  //To send a search query by passing the value in searchString.
  await driver.findElement(By.name('q')).sendKeys(searchString,Key.RETURN);

  await driver.findElement(By.partialLinkText('carnextdoor')).click();

  //Verify the page title and print it
  const title = await driver.getTitle();
  console.log('Title is:',title);


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
  



  //await driver.quit();



}

search();
