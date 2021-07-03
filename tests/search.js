const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

async function search(){
  const searchString = '10 Bayshore Drive, Byron Bay, New South Wales';

  //To wait for browser to build and launch properly
  const driver = await new Builder().forBrowser('chrome').build();

  //To fetch http://google.com from the browser with our code.
  await driver.get('www.carnextdoor.com.au/search');

  //To send a search query by passing the value in searchString.
  let searchfield = by.name('location');
  await driver.findElement(searchfiled).click();
  await driver.findElement(searchfield).sendKeys(searchString,Key.RETURN);

  //Verify the page title and print it
  const title = await driver.getTitle();
  console.log('Title is:',title);

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();
}

search();

