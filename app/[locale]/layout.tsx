import "../globals.css";
import { Inter } from "next/font/google";
import Transition from "@/components/transition.component";
import Navbar from "@/components/navbar.component";
import Footer from "@/components/footer.component";
import { AOSInit } from "@components/aos";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

function SearchBarFallback() {
  return <>placeholder</>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <Suspense fallback={<SearchBarFallback />}>
          <Navbar />
        </Suspense>
        <Transition>{children}</Transition>
        <Footer />
      </body>
    </html>
  );
}
