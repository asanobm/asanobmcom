import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LBtn } from '@/comp';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello this is Asanobm Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className='p-5 flex flex-row w-full justify-between'>
            <div></div>
            <div>
              <LBtn href="/en">English</LBtn>
              <LBtn href="/ko">한국어</LBtn>
              <LBtn href="/ja">日本語</LBtn>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-9PD9TH787D" />
    </html>
  );
}
