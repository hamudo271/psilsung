import Head from "next/head";
import PageHero from "@/components/common/PageHero";
import Greeting from "@/components/greeting/Greeting";

export default function GreetingPage() {
  return (
    <>
      <Head>
        <title>인사말 | 일성테크 — 플라스틱 진공성형</title>
        <meta
          name="description"
          content="일성테크 대표 인사말. PET·PS·PP 플라스틱 진공성형 전문 기업으로서 최고의 품질과 정확한 납기로 함께합니다."
        />
      </Head>
      <PageHero
        eyebrow="GREETING"
        title="인사말"
        subtitle="고객의 제품을 가장 잘 담아내는 형(形)을 만드는 기업, 일성테크입니다."
      />
      <Greeting />
    </>
  );
}
