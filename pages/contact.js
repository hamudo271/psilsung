import Head from "next/head";
import PageHero from "@/components/common/PageHero";
import QuoteForm from "@/components/home/QuoteForm";
import LocationContact from "@/components/home/LocationContact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>견적문의 | 일성테크 — 플라스틱 진공성형</title>
        <meta
          name="description"
          content="일성테크 간략 견적 문의. 도면·요청사항을 남겨주시면 빠르게 검토 후 견적을 안내드립니다."
        />
      </Head>
      <PageHero
        eyebrow="CONTACT"
        title="견적문의"
        subtitle="제작 품목과 수량, 도면을 알려주시면 빠르게 검토 후 견적을 안내드립니다."
      />
      <QuoteForm />
      <LocationContact />
    </>
  );
}
