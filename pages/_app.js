import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add("js");
    const supportsIO = "IntersectionObserver" in window;
    let observer = null;

    // 현재 DOM의 .reveal 요소를 (재)관찰해 화면에 들어오면 페이드업으로 등장
    const setupReveal = () => {
      const els = document.querySelectorAll(".reveal:not(.is-visible)");
      if (!supportsIO) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io.observe(el));
      observer = io;
    };

    setupReveal();

    // 페이지 이동 완료 시: 최상단으로 이동 + 새 페이지의 등장 애니메이션 재실행
    const handleRouteDone = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (observer) observer.disconnect();
      requestAnimationFrame(() => requestAnimationFrame(setupReveal));
    };
    router.events.on("routeChangeComplete", handleRouteDone);

    return () => {
      router.events.off("routeChangeComplete", handleRouteDone);
      if (observer) observer.disconnect();
    };
  }, [router]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
