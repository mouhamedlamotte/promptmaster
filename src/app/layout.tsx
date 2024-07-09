import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthContextProvider } from "@/context/AuthContext";
import ReactQueryProvider from "@/provider/react-query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prompt master",
  description: "Prompt master",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-screen bg-background overflow-hidden font-sans antialiased", inter.className)}>
      <ReactQueryProvider>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
      </ReactQueryProvider>
        </body>
    </html>
  );
}
