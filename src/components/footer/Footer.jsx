import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Expressive Echo. All rights reserved.</div>
      <div className={styles.social}>
      <a href="https://github.com/Naman9761" >
        <Image  src="/github.png" width={20} height={20} className={styles.icon} alt=" Facebook Account" /> 
      </a>
      <a href="https://www.instagram.com/naman_0519_/">
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="insta" />
      </a>
      <a href="https://www.instagram.com/naman_0519_/">
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="twitter" />
      </a>
      <a href="https://github.com/Naman9761">
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="YouTube" />
      </a>
      </div>
    </div>
  );
};

export default Footer;
