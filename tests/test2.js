const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function search(){

  const searchString = 'Brisbane, Queensland, Australia';

  //To wait for browser to build and launch properly
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch http://google.com from the browser with our code.
  await driver.get('https://www.carnextdoor.com.au');


  //To send a search query by passing the value in searchString.

  let searchfield = By.name('location');
  await driver.findElement(searchfield).click();
  await driver.findElement(searchfield).sendKeys(searchString);
  
  //await driver.findElement(By.name('location')).sendKeys(searchString,Key.RETURN);

  //Verify the page title and print its
  const title = await driver.getTitle();
  console.log('Title is:',title);

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();

  
}

search();
