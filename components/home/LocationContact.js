import { company } from "@/data/site";
import s from "./LocationContact.module.css";

const MAP_SRC =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(company.mapQuery) +
  "&z=15&hl=ko&output=embed";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor" aria-hidden>
      <path d="M12 3 2 11.2h2.6V20H10v-5.4h4V20h5.4v-8.8H22z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.4.6 3.6.6.6 0 1 .5 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4.1.8-.3 1z" />
    </svg>
  );
}

export default function LocationContact() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">LOCATION</span>
          <h2 className={s.title}>오시는 길</h2>
        </div>

        <div className={`${s.info} reveal`}>
          <div className={s.item}>
            <span className={s.icon}>
              <HomeIcon />
            </span>
            <div className={s.text}>
              <p className={s.label}>Address</p>
              <p className={s.value}>{company.address}</p>
            </div>
          </div>

          <span className={s.divider} aria-hidden />

          <div className={s.item}>
            <span className={s.icon}>
              <PhoneIcon />
            </span>
            <div className={s.text}>
              <p className={s.label}>Contact</p>
              <p className={s.value}>
                Tel : {company.tel} <span className={s.sep}>/</span> Fax :{" "}
                {company.fax}
              </p>
            </div>
          </div>
        </div>

        <div className={`${s.mapWrap} reveal`}>
          <iframe
            src={MAP_SRC}
            title={`${company.brand} 위치`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
