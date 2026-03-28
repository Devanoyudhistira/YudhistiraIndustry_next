import { Geist, Geist_Mono,Open_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navigation";

const poppins = Open_Sans({})

export const metadata = {
  title: "YudhistiraIndustry",
  description: "An e-commerce portfolio made by devano yudhistira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.className} `}
      >
        <main className="px-2 overflow-x-hidden" >
          {children}
        </main>
      </body>
    </html>
  );
}
