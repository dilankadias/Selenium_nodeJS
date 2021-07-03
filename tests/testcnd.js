const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function search(){

  const searchString = '10 Bayshore Drive, Byron Bay New South Wales 2481, Australia';

  //To wait for browser to build and launch properly
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch http://google.com from the browser with our code.
  await driver.get('https://www.carnextdoor.com.au/search');


  //To send a search query by passing the value in searchString.

  let searchfield = By.name('location');
  await driver.findElement(searchfield).click();
  await driver.findElement(searchfield).clear();
  await driver.findElement(searchfield).sendKeys(searchString),key.RETURN;
  
  
  //await driver.findElement(By.name('location')).sendKeys(searchString,Key.RETURN);

  //Verify the page title and print its
  const title = await driver.getTitle();
  console.log('Title is:',title);


  let date = By.className('cnd-btn cnd-filter-btn cyp-datetime-picker-modal');
  await driver.findElement(date).click();

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();

  let month = By.className('mbsc-ic mbsc-ic-arrow-right5 mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e');
  await driver.findElement(month).click();
  await driver.findElement(month).click();
  await driver.findElement(month).click();
  await driver.findElement(month).click();
  await driver.findElement(month).click();
  await driver.findElement(month).click();
  await driver.findElement(month).click();




  

  
}

search();
