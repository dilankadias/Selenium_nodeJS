const { By, Key, Builder, WebElement } = require('selenium-webdriver');
require('chromedriver');

async function search(){
  const username = 'mapddias@gmail.com';
  const password = 'Smdpinto123';

  //To wait for browser to build and launch properly
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch http://google.com from the browser with our code.
  await driver.get('https://www.carnextdoor.com.au/login');


  //To send a search query by passing the value in searchString.
  await driver.findElement(By.id('member_session_email')).sendKeys(username);

  await driver.findElement(By.id('member_session_password')).sendKeys(password);
 
  let btnLogin = By.css('.cnd-btn--large');
  await driver.findElement(btnLogin).click();

  //FindBy(how = How.CSS, css = "cnd-btn--large").click();
  
  //Verify the page title and print it
  const title = await driver.getTitle();
  console.log('Title is:',title);

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();
}

search();
