import Head from "next/head";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProductService from "@/components/home/ProductService";
import Philosophy from "@/components/home/Philosophy";
import Process from "@/components/home/Process";
import Applications from "@/components/home/Applications";
import LocationContact from "@/components/home/LocationContact";
import SubFooterCTA from "@/components/home/SubFooterCTA";
import QuoteForm from "@/components/home/QuoteForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>일성테크 — 플라스틱 진공성형 전문 | ABS·PET·PS·PP 부품 트레이·블리스터</title>
        <meta
          name="description"
          content="정밀 플라스틱 진공성형 전문 일성테크. ABS·PET·PS·PP 부품 트레이와 블리스터 포장을 최고의 품질, 합리적인 가격, 정확한 납기로 제작합니다."
        />
        <meta
          name="keywords"
          content="플라스틱 진공성형, 진공성형, ABS 트레이, PET 트레이, PS 트레이, PP 트레이, 부품 트레이, 블리스터 포장, 자동차 부품 트레이, 일성테크"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="일성테크" />
        <meta property="og:title" content="일성테크 — 플라스틱 진공성형 전문" />
        <meta
          property="og:description"
          content="ABS·PET·PS·PP 부품 트레이와 블리스터 포장을 최고의 품질과 정확한 납기로. 플라스틱 진공성형 전문 일성테크."
        />
      </Head>

      <Hero />
      <About />
      <ProductService />
      <Philosophy />
      <Process />
      <Applications />
      <LocationContact />
      <SubFooterCTA />
      <QuoteForm />
    </>
  );
}
