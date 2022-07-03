import styles from "../styles/Internships.module.css";
import Image from "next/image";
import ticon from "../images/ticon.png";
import yicon from "../images/yicon.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaKeybase } from "react-icons/fa";

const Internships = () => {
  const cities = [
    "Work from Home",
    "Delhi/NCR",
    "Bangalore",
    "Mumbai",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Intertational",
  ];

  const categories = [
    "Part-time",
    "Engineering",
    "Ngo",
    "MBA",
    "Design",
    "Science",
    "Media",
    "Humanities",
  ];

  return (
    <div>
      <div className={styles.internships}>
        <div className={styles.inWrapper}>
          <div className={styles.inRow1}>
            <span className={styles.inTitle}>
              <div className={styles.gh}>
                <span className={styles.gs}>Internships</span>
              </div>
            </span>
            <span className={styles.inRow2}>
              <span className={styles.inApply}>
                Apply to 10,000+ internships for free
              </span>{" "}
              <span className={styles.inView}>
                View all Internships{"    "}
                <AiOutlineArrowRight className={styles.inViewAr} />
              </span>
            </span>
          </div>
          <div className={styles.inRow3}>
            <span className={styles.row3Title}>Popular cities</span>
            <div className={styles.row3Cards}>
              {cities.map((city, key) => {
                return (
                  <div className={styles.card} key={key}>
                    <Image src={ticon} width={70} height={70} alt="img" />
                    <span className={styles.cardText}>{city}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.inRow3}>
            <span className={styles.row3Title}>Popular categories</span>
            <div className={styles.row3Cards}>
              {categories.map((category, key) => {
                return (
                  <div className={styles.card} key={key}>
                    <Image src={yicon} width={70} height={70} alt="img" />
                    <span className={styles.cardText}>{category}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
