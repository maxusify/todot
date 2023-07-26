import type { Metadata } from "next";

import Footer from "@/components/footer";
import MainNavigation from "@/components/main-navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Todot",
  description: "Demo Todo App made with Next.js and shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col justify-center items-center mb-[100px]">
            <div className="w-full lg:w-[1024px] h-full">
              <MainNavigation />
              {children}
            </div>
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
