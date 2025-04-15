import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MXJ8CP2');</script>
<!-- End Google Tag Manager -->
      <body>{children}</body>
    </html>
  );
}
