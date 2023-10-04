import Image from "next/image";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// import { Link, animateScroll as scroll } from "react-scroll";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  title: "Sindhorn Building Bangkok’s Prime Location Office For Rent.",
  description:
    "Set in the heart of Bangkok’s business district. We your choice for success.",
  keywords: [
    "building",
    "sindhorn",
    "siamsindhorn",
    "office space",
    "office",
    "business",
    "sindhorn building",
    "office for rent",
    "bts",
    "bts ploenchit",
    "bts chidlom",
    "สำนักงานให้เช่า",
    "ให้เช่าออฟฟิศ",
    "ให้เช่าสำนักงาน",
    "ให้เช่าสำนักงาน ใน กทม",
    "เช่า co working space",
    "ออฟฟิศให้เช่า",
    "เช่าออฟฟิศ",
    "co working space ให้เช่า",
    "พื้นที่เช่าสำนักงาน",
    "Office Space for rent",
    "ออฟฟิศสำเร็จรูป",
    "Tower",
  ],
  authors: [{ name: "Siam Sindhorn Co.,Ltd." }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title: "Sindhorn Building Bangkok’s Prime Location Office For Rent.",
    description:
      "Set in the heart of Bangkok’s business district. We your choice for success.",
    url: "https://sindhornbuilding.com",
    images: "/DSCF9186.png",
    siteName: "Sindhorn Building Bangkok’s Prime Location Office For Rent.",
    locale: "th_TH",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

const HomeHero = dynamic(() => import("../../components/Slide/HomeHero"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="h-screen w-full flex justify-center items-center  relative">
        <HomeHero />

        <div className="absolute !z-10 max-w-[1400px] flex flex-col items-center gap-7">
          <h1
            // data-aos="fade-up"
            // data-aos-duration="1500"
            className="text-white text-6xl text-center uppercase font-semibold drop-shadow-2xl "
          >
            Bangkok’s{" "}
            <span className="text-[#c5a477] hover:text-[72px] cursor-pointer transition-all duration-200">
              prime
            </span>{" "}
            location <br /> office for rent
          </h1>

          <button
            // data-aos="fade-up"
            // data-aos-duration="1500"
            // data-aos-delay="300"
            type="button"
            className="px-4 py-2 rounded-full border-2 text-white min-w-[120px] uppercase hover:bg-[#c5a477] hover:border-[#c5a477] duration-200 transition-all"
          >
            enquiry
          </button>
        </div>

        <div className="absolute w-28 h-fit bottom-[9%] !z-10 cursor-pointer">
          {/* <Link
            href="#"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
          </Link> */}
          <button
            type="button"
            className="arrow-exp text-white drop-shadow-2xl  h-full outline-none text-xs sm:text-sm "
          >
            SCROLL
          </button>
        </div>
      </section>

      <section className="h-[500px] w-full bg-[#F9F2EC]"></section>
    </main>
  );
}
