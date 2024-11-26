import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog on what is happening in the world of tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoMono.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-auto flex-col">
            <Navigation />
            <div className="mt-20 mx-auto container transition-all duration-300 ease-in-out p-2">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
