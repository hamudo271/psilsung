import Link from "next/link";
import { company, externalLinks } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>ILSUNG</span>
            <p className={styles.tagline}>ILSUNG TECHNOLOGY · 플라스틱 진공성형</p>
          </div>

          <nav className={styles.links} aria-label="푸터 메뉴">
            <Link href="#">인사말</Link>
            <Link href="#">회사소개</Link>
            <Link href="#">서비스소개</Link>
            <Link href="#">견적문의</Link>
          </nav>

          <div className={styles.sns}>
            <Link href={externalLinks.kakao}>카카오톡</Link>
            <Link href={externalLinks.blog}>네이버 블로그</Link>
            <Link href={externalLinks.instagram}>인스타그램</Link>
          </div>
        </div>

        <dl className={styles.info}>
          <div>
            <dt>COMPANY</dt>
            <dd>{company.brand}</dd>
          </div>
          <div>
            <dt>CEO</dt>
            <dd>{company.ceo}</dd>
          </div>
          <div>
            <dt>BUSINESS NUMBER</dt>
            <dd>{company.businessNumber}</dd>
          </div>
          <div>
            <dt>ADDRESS</dt>
            <dd>{company.address}</dd>
          </div>
          <div>
            <dt>EMAIL</dt>
            <dd>{company.email}</dd>
          </div>
          <div>
            <dt>OPENING HOURS</dt>
            <dd>{company.hours}</dd>
          </div>
        </dl>

        <div className={styles.bottom}>
          <div className={styles.policy}>
            <Link href="#">이용약관</Link>
            <Link href="#">개인정보처리방침</Link>
          </div>
          <div className={styles.credit}>
            <p className={styles.copyright}>{company.copyright}</p>
            <p className={styles.madeby}>Made by 웹스랩</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
