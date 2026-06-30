import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav } from "@/data/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  // 모바일 메뉴 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="일성테크 홈">
          <img src="/ilsung-mark.svg" alt="일성테크 IS" />
          <span>ILSUNG</span>
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
