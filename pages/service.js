import Head from "next/head";
import PageHero from "@/components/common/PageHero";
import Materials from "@/components/service/Materials";
import ProductService from "@/components/home/ProductService";
import Process from "@/components/home/Process";
import Applications from "@/components/home/Applications";

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>서비스 소개 | 일성테크 — 플라스틱 진공성형</title>
        <meta
          name="description"
          content="일성테크의 플라스틱 진공성형 서비스. 취급 소재(ABS·PET·PS·PP), 생산 제품, 제작 공정, 적용 분야를 안내합니다."
        />
      </Head>
      <PageHero
        eyebrow="SERVICE"
        title="서비스 소개"
        subtitle="ABS·PET·PS·PP 소재 진공성형의 모든 것 — 소재 선택부터 생산 공정, 적용 분야까지."
      />
      <Materials />
      <ProductService />
      <Process />
      <Applications />
    </>
  );
}
