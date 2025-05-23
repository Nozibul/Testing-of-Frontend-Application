const purreteer = require("puppeteer");

(async () => {
  // Launch the browser and open a new blank page
  const browser = await purreteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://namastedev.com/", {timeout: 0});
  await page.setViewport({ width: 1280, height: 800 });

  const courseLink = "ul li:nth-child(2)"
  await page.waitForSelector(courseLink);
  await page.click(courseLink);

 // Wait for navigation to complete
  await page.waitForNavigation({ waitUntil: "load" });

  // Get the new URL
  const newUrl = await page.url();
  console.log("New Page URL:", newUrl);
  
})();
