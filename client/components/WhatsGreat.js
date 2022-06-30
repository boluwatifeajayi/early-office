import styles from "../styles/WhatsGreat.module.css";

const WhatsGreat = () => {
  return (
    <div>
      <div className={styles.whatsGreat}>
        <div className={styles.whatsWrapper}>
          <h1 className={styles.title}>{`What's great about it?`}</h1>
          <div className={styles.whatsFlex}>
            <div className={styles.whatsContent}>
              <span className={styles.contentTitle}>
                <h3>Browse Portfolios</h3>
              </span>
              <span className={styles.content}>
                Find professionals you can trust by browsing their samples of
                previous work and reading their profile reviews.
              </span>
            </div>
            <div className={styles.whatsContent}>
              <span className={styles.contentTitle}>
                <h3 className={styles.shift}>Fast bids</h3>
              </span>
              <span className={styles.content}>
                Receive obligation free quotes from our talented freelancers
                fast. 80% of projects get bid on within 60 seconds.
              </span>
            </div>
            <div className={styles.whatsContent}>
              <span className={styles.contentTitle}>
                <h3 className={styles.shiftB}>Quality work</h3>
              </span>
              <span className={styles.content}>
                Freelancer.com has by far the largest pool of quality
                freelancers globally- over 50 million to choose from.
              </span>
            </div>
            <div className={styles.whatsContent}>
              <span className={styles.contentTitle}>
                <h3>Track progress</h3>
              </span>
              <span className={styles.content}>
                Keep up-to-date and on-the-go with our time tracker, and mobile
                app. Always know what freelancers are up to.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsGreat;
