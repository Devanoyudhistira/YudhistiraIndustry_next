import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    const html = `
    <!DOCTYPE html>
    <html>
      <body>
        <h1>Invoice ${orderId}</h1>
      </body>
    </html>
    `;

    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({ format: "A4" });

    await browser.close();

    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=invoice-${orderId}.pdf`,
      },
    });

  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}