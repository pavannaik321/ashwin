import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://www.ashwinpadwalkar.com'),
  title: "Ashwin Padwalkar — Cinematographer & Video Editor",
  description:
    "Cinematographer and video editor from India. Documentaries, music videos, podcasts, and brand films — 4+ years turning stories into stunning visuals.",
  keywords:
    "Ashwin Padwalkar, cinematographer, video editor, filmmaker, documentary, podcast, reels, music video, Karwar, India",
  authors: [{ name: "Ashwin Padwalkar" }],
  creator: "Ashwin Padwalkar",
  openGraph: {
    title: "Ashwin Padwalkar — Cinematographer & Video Editor",
    description:
      "Cinematographer and video editor from India. Documentaries, music videos, podcasts, and brand films — 4+ years turning stories into stunning visuals.",
    url: "https://www.ashwinpadwalkar.com",
    type: "website",
    locale: "en_IN",
    siteName: "Ashwin Padwalkar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Padwalkar — Cinematographer & Video Editor",
    description:
      "Cinematographer and video editor from India. Documentaries, music videos, podcasts, and brand films.",
    creator: "@ash_pdwlkr",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full antialiased bg-[#080808]">{children}</body>
    </html>
  );
}
