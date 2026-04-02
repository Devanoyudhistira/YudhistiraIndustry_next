import puppeteer from "puppeteer";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Invoice</title>
      </head>
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
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=invoice-${orderId}.pdf`,
        "Content-Length": pdf.length.toString(),
      },
    });

  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ error: "Failed to generate PDF" }),
      { status: 500 }
    );
  }
}