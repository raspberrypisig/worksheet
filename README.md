# Worksheet

Based on Book
100 activities for maths centres by Robert Merrigan

## TODO

1. Export to pdf - looks like playwright can get you out of jail!

```javascript
// @ts-check
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/search?q=Google');
  await page.pdf({ path: `document.pdf` });
  await browser.close();
})();
```

2. https://github.com/binsarjr/svelte-printpdf

3. A4 size 300dpi 1240*1754 pixels