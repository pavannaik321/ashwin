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
  title: "Ashwin Padwalkar — Cinematographer & Video Editor",
  description:
    "Professional cinematographer and video editor specializing in documentaries, podcasts, reels, and brand films. Bringing stories to life through visuals.",
  keywords:
    "video editor, cinematographer, filmmaker, documentary, podcast, reels, motion graphics, India",
  openGraph: {
    title: "Ashwin Padwalkar — Cinematographer & Video Editor",
    description: "Bringing stories to life through visuals.",
    type: "website",
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
