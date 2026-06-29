import Head from "next/head";
import Hero from "@/components/home/Hero";
import ProductService from "@/components/home/ProductService";
import Philosophy from "@/components/home/Philosophy";
import Process from "@/components/home/Process";
import Applications from "@/components/home/Applications";
import LocationContact from "@/components/home/LocationContact";
import SubFooterCTA from "@/components/home/SubFooterCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>일성테크 | 플라스틱 진공성형 · PET/PS/PP 트레이 제작</title>
        <meta
          name="description"
          content="일성테크는 국내 플라스틱 진공성형 분야에서 최상의 서비스와 품질을 제공합니다. PET·PS·PP 부품 트레이, 블리스터 포장 제작. 최고의 품질, 최저의 가격, 정확한 납기일."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="일성테크 | 플라스틱 진공성형" />
      </Head>

      <Hero />
      <ProductService />
      <Philosophy />
      <Process />
      <Applications />
      <LocationContact />
      <SubFooterCTA />
    </>
  );
}
