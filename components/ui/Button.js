import Link from "next/link";
import styles from "./Button.module.css";

// variant: "solid" (흰 배경) | "outline" (테두리)
export default function Button({
  href = "#",
  children,
  variant = "solid",
  external = false,
}) {
  const className = `${styles.btn} ${styles[variant]}`;
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
        <span className={styles.arrow}>→</span>
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
      <span className={styles.arrow}>→</span>
    </Link>
  );
}
