import "./globals.css";
import "./app.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "DGU",
  description: "DGU Website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/fonts/flaticon.css" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
