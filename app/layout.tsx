import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menu Profit Optimizer – Maximize Your Restaurant's Revenue",
  description:
    "AI-powered menu analysis for independent restaurant owners. Discover which items to promote, reprice, or remove to maximize profit margins."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="edd79d23-01f7-47da-92b7-19dde6425bfa"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
