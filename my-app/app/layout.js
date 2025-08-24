import { Short_Stack, Comfortaa } from 'next/font/google'

import "./globals.css";

const fontBody = Short_Stack({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-short-stack"
})

const fontTitle = Comfortaa({
  subsets: ['latin'],
  variable: "--font-comfortaa"
})

export const metadata = {
  title: "PotatoTV",
  description: "A new way to watch youtube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontBody.variable} ${fontTitle.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
