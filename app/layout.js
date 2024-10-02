import "./globals.css";


export const metadata = {
  title: "Fresh Flowers Carlsbad | Top Florist San Diego - Chic Flowers",
  description: "Fresh Flowers Carlsbad | Top Florist San Diego - Chic Flowers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
