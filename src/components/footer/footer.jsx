import Line from "../line/line";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.upperBlock}>
        <div className="containerSup"></div>
      </div>
      <div className={styles.lowerBlock}>
        <div className="containerSup">
          <div className={styles.stayContainer}>
            <div className={styles.stayInner}>
              <div className={styles.stayText}>
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </div>
              <div className={styles.stayInputContainer}>
                <input
                  id="email-input"
                  className={styles.stayInput}
                  type="text"
                  placeholder="Enter your email address"
                />
                <button className={styles.stayButton}>
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>
              <div className={styles.logoBox}>
                <div className={styles.logo}>SHOP.CO</div>
                <div className={styles.logoText}>
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </div>
              </div>
              <div className={styles.logoIcons}>
                <button className={styles.logoButton}>
                  <img
                    className={styles.logoButtonPng}
                    src="./footer/twitter.png"
                    alt="twitter"
                  />
                </button>
                <button className={styles.logoButton}>
                  <img
                    className={styles.logoButtonPng}
                    src="./footer/facebook.png"
                    alt="facebook"
                  />
                </button>
                <button className={styles.logoButton}>
                  <img
                    className={styles.logoButtonPng}
                    src="./footer/instagram.png"
                    alt="instagram"
                  />
                </button>
                <button className={styles.logoButton}>
                  <img
                    className={styles.logoButtonPng}
                    src="./footer/github.png"
                    alt="github"
                  />
                </button>
              </div>
            </li>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>COMPANY</a>
              <div className={styles.footerLinksList}>
                <a href="#" className={styles.footerLinksItem}>
                  About
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Features
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Works
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Career
                </a>
              </div>
            </li>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>HELP</a>
              <div className={styles.footerLinksList}>
                <a href="#" className={styles.footerLinksItem}>
                  Customer Support
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Delivery Details
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Terms & Conditions
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Privacy Policy
                </a>
              </div>
            </li>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>FAQ</a>
              <div className={styles.footerLinksList}>
                <a href="#" className={styles.footerLinksItem}>
                  Account
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Manage Deliveries
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Orders
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Payments
                </a>
              </div>
            </li>
            <li className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>RESOURCES</a>
              <div className={styles.footerLinksList}>
                <a href="#" className={styles.footerLinksItem}>
                  Free eBooks
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Development Tutorial
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  How to - Blog
                </a>
                <a href="#" className={styles.footerLinksItem}>
                  Youtube Playlist
                </a>
              </div>
            </li>
          </ul>
          <div className={styles.innerLine}>
              <div className={styles.line}></div>
          </div>
          <div className={styles.rightsContainer}>
            <div className={styles.rightsText}>Shop.co © 2000-2021, All rights reserved</div>
            <div className={styles.rightsIcons}>
              <img className={styles.rightsIconsPng} src="./footer/visa.png" alt="visa" />
              <img className={styles.rightsIconsPng} src="./footer/mastercard.png" alt="mastercard" />
              <img className={styles.rightsIconsPng} src="./footer/PayPal.png" alt="paypal" />
              <img className={styles.rightsIconsPng} src="./footer/Applepay.png" alt="applepay" />
              <img className={styles.rightsIconsPng} src="./footer/Googlepay.png" alt="googlepay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
