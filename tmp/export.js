import fs from 'fs';
import puppeteer from 'puppeteer';
(async () => {
    const markdown = fs.readFileSync('./slides.md', 'utf-8');
    const markdownEncoded = encodeURIComponent(markdown);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Point to your Reveal.js slides route with markdown in URL
    const slidesUrl = `http://localhost:5173/slides?print-pdf&markdown=${markdownEncoded}`;

    await page.goto(slidesUrl, { waitUntil: 'networkidle0' });

    // Optional: wait for Reveal.js to finish rendering
    await page.waitForSelector('.reveal .slides section');

    // Export to PDF
    await page.pdf({
        path: 'slides.pdf',
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
})();
