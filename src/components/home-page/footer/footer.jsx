import { useEffect } from "react";
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
          <form id="home-email-form" className={styles.stayContainer}>
            <div className={styles.stayInner}>
              <div className={styles.stayText}>
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </div>
              <div className={styles.stayInputContainer}>
                <input
                  id="email-input"
                  className={styles.stayInput}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  onFocus={(e) => {
                    e.target.style.padding = "0.25rem 1rem";
                    e.target.style.backgroundImage = "unset";
                  }}
                  onBlur={(e) => {
                    e.target.style.padding = "0rem";
                    e.target.style.paddingLeft = "3.25rem";
                    e.target.style.backgroundImage = "";
                    e.target.classList.add("stayInput--blurred");
                  }}
                />
                <button className={styles.stayButton}>
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </form>
          <div className={styles.footerList}>
            <div className={styles.footerItem}>
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
            </div>
            <div className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>
                COMPANY
              </a>
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
            </div>
            <div className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>
                HELP
              </a>
              <ul className={styles.footerLinksList}>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>
                FAQ
              </a>
              <ul className={styles.footerLinksList}>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerItem}>
              <a href="#" className={styles.footerMain}>
                RESOURCES
              </a>
              <ul className={styles.footerLinksList}>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLinksItem}>
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.innerLine}>
            <div className={styles.line}></div>
          </div>
          <div className={styles.rightsContainer}>
            <div className={styles.rightsText}>
              Shop.co © 2000-2021, All rights reserved
            </div>
            <div className={styles.rightsIcons}>
              <img
                className={styles.rightsIconsPng}
                src="./footer/visa.png"
                alt="visa"
              />
              <img
                className={styles.rightsIconsPng}
                src="./footer/mastercard.png"
                alt="mastercard"
              />
              <img
                className={styles.rightsIconsPng}
                src="./footer/PayPal.png"
                alt="paypal"
              />
              <img
                className={styles.rightsIconsPng}
                src="./footer/Applepay.png"
                alt="applepay"
              />
              <img
                className={styles.rightsIconsPng}
                src="./footer/Googlepay.png"
                alt="googlepay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
