import Head from "next/head";
import PageHero from "@/components/common/PageHero";
import About from "@/components/home/About";
import CompanyInfo from "@/components/company/CompanyInfo";
import LocationContact from "@/components/home/LocationContact";

export default function CompanyPage() {
  return (
    <>
      <Head>
        <title>회사소개 | 일성테크 — 플라스틱 진공성형</title>
        <meta
          name="description"
          content="일성테크(ILSUNG TECHNOLOGY)는 ABS·PET·PS·PP 소재 플라스틱 진공성형 전문 기업입니다. 회사 개요와 사업자 정보, 오시는 길을 안내합니다."
        />
      </Head>
      <PageHero
        eyebrow="COMPANY"
        title="회사소개"
        subtitle="도면 분석과 금형 설계부터 성형·검수·납품까지, 전 과정을 책임지는 진공성형 파트너입니다."
      />
      <About />
      <CompanyInfo />
      <LocationContact />
    </>
  );
}
