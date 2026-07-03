import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav } from "@/data/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  // 모바일 메뉴 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 스크롤 시 헤더에 그림자/대비 부여 (프리미엄 디테일)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="일성테크 홈">
          <img src="/ilsung-logo.png" alt="일성테크" />
        </Link>

        <nav className={styles.nav} aria-label="주 메뉴">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.navItem} ${
                isActive(item.href) ? styles.navItemActive : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barTop : ""} />
          <span className={open ? styles.barMid : ""} />
          <span className={open ? styles.barBot : ""} />
        </button>
      </div>
      </header>

      {/* 모바일 오버레이 메뉴 (header 밖에 둬서 fixed가 뷰포트 기준이 되도록) */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav}>
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.mobileNavItem} ${
                isActive(item.href) ? styles.navItemActive : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
