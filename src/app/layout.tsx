import type { Metadata } from "next";
import "./globals.css";
// import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
// import VisualEditsWrapper from "@/components/VisualEditsWrapper";

export const metadata: Metadata = {
  title: "Inqwise - Technology Solutions",
  description: "Professional technology solutions with creativity and innovation",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <ErrorReporter /> */}
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        {/* <VisualEditsWrapper /> */}
      </body>
    </html>
  );
}