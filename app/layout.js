import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
