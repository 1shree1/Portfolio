import type { Metadata } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "@/component/theme-provider";
import "../app/globals.css";  

export const metadata: Metadata = {
  title: "Portfolio - Shree",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
