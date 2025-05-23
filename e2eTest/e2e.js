const purreteer = require("puppeteer");

(async () => {
  // Launch the browser and open a new blank page
  const browser = await purreteer.launch({
    headless: false,
    slowMo: 50,
    args: ["--window-size=1200,800"],
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://namastedev.com/", { timeout: 0 });
  await page.setViewport({ width: 1200, height: 800 });

  const courseLink = "ul li:nth-child(2)";
  await page.waitForSelector(courseLink);
  await page.click(courseLink);


// Wait for navigation to complete
//   await page.waitForNavigation({ waitUntil: "load" });
//   // Get the new URL
//   const newUrl = await page.url();
//   console.log("New Page URL:", newUrl);


  const enrollBtn = "button[class*='bg-logo-orange']";
  await page.waitForSelector(enrollBtn);
  await page.click(enrollBtn);
  
// Wait for navigation to complete
  await page.waitForNavigation({ waitUntil: "load" });
  // Get the new URL
  const newUrl = await page.url();
  console.log("New Page URL:", newUrl);


  await browser.close();
// Check if the image with alt="namasteDev" exists
//   const imageExists = (await page.$('img[alt="namasteDev"]')) !== null;
//   console.log("Image exists:", imageExists);

//   if (imageExists) {
//     const imgSrc = await page.$eval('img[alt="namasteDev"]', (el) => el.src);
//     console.log("Image URL:", imgSrc);
//   } else {
//     console.log("Image not found on the new page.");
//   }
})();
