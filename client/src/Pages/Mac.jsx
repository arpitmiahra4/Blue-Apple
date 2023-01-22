import React from "react";
import styles from "../Styles/Mac.module.css";
import img from "../assets/mac/macMini.png";
import { Link } from "react-router-dom";
const Mac = () => {
  return (
    <>
      <div className={styles.tp}>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/macbookair_light__f0o95rwae8ae_large.svg"
              alt="product img"
            />
            <p>MacBook Air</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/macbook_pro_light__e791sjqzt32a_large.svg"
              alt="product img"
            />
            <p>MacBook Pro</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/imac_24_light__colyztscbeeu_large.svg"
              alt="product img"
            />
            <p>iMac 24”</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_mini_light__frtahmzmd4mm_large.svg"
              alt="product img"
            />
            <p>Mac mini</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_studio_light__ea3pb1auizu6_large.svg"
              alt="product img"
            />
            <p>Mac Studio</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_pro_light__cj4dvg7thx5y_large.svg"
              alt="product img"
            />
            <p>Mac Pro</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_compare_light__emml1umdv9m6_large.svg"
              alt="product img"
            />
            <p>Compare</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/displays_light__ewxqx5obdxci_large.svg"
              alt="product img"
            />
            <p>Displays</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_accessories_light__cuds10wyptyu_large.svg"
              alt="product img"
            />
            <p>Accessories</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_os_light__d0zczt34scq6_large.svg"
              alt="product img"
            />
            <p>Ventura</p>
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_shop_light__layuggud1xe2_large.svg"
              alt="product img"
            />
            <p>Shop mac</p>
          </Link>
        </div>
      </div>

      <div className={styles.offer}>
        <p>
          Get 3% Daily Cash back with Apple Card. And pay for your new Mac over
          12 months, interest‑free when you choose to check out with Apple Card
          Monthly Installments.*
        </p>
        <Link to="#" title="offer">
          Learn more {">"}
        </Link>
      </div>
      {/* new product components */}
      <div className={styles.mac}>
        <div>
          <p style={{ color: "#F57126", fontSize: "18px", fontWeight: "600" }}>
            New
          </p>
          <h2>MacBook Air</h2>
          <h3>Don’t take it lightly.</h3>
          <p>From $1199</p>
          <button
            style={{
              width: "80px",
              height: "auto",
              padding: "5px 0px",
              backgroundColor: "#1577ED",
              borderRadius: "20px",
              color: "white",
              margin: "20px 0px",
            }}
          >
            Buy
          </button>
          <Link to="#" className={styles.learn}>
            Learn more {">"}
          </Link>
        </div>
        <div className={styles.macImg}>
          <center>
            {" "}
            <img
              src="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_air_m2__r1jrymq4ftea_large.jpg"
              alt="macbook"
              style={{ margin: "20px 0px" }}
            />
          </center>
        </div>
      </div>

      <div className={styles.mac} style={{ backgroundColor: "black" }}>
        <div>
          <p style={{ color: "#F57126", fontSize: "18px", fontWeight: "600" }}>
            New
          </p>
          <h2 style={{ color: "white" }}>MacBook Pro 13”</h2>
          <h3 style={{ color: "white" }}>Pro anywhere.</h3>
          <p style={{ color: "white" }}>From $1299</p>
          <button
            style={{
              width: "80px",
              height: "auto",
              padding: "5px 0px",
              backgroundColor: "#1577ED",
              borderRadius: "20px",
              color: "white",
              margin: "20px 0px",
            }}
          >
            Buy
          </button>
          <Link to="#" className={styles.learn}>
            Learn more {">"}
          </Link>
        </div>
        <div className={styles.macImg}>
          <center>
            {" "}
            <img
              src="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large.jpg"
              alt="macbook"
              style={{ margin: "20px 0px" }}
            />
          </center>
        </div>
      </div>
      <br />
      <div className={styles.mac} style={{ backgroundColor: "black" }}>
        <div>
          <p style={{ color: "#F57126", fontSize: "18px", fontWeight: "600" }}>
            New
          </p>
          <h2 style={{ color: "white" }}>MacBook Pro</h2>
          <h3 style={{ color: "white" }}>Mover. Maker. Boundary breaker.</h3>
          <p style={{ color: "white" }}>From $1999</p>
          <button
            style={{
              width: "80px",
              height: "auto",
              padding: "5px 0px",
              backgroundColor: "#1577ED",
              borderRadius: "20px",
              color: "white",
              margin: "20px 0px",
            }}
          >
            Buy
          </button>
          <Link to="#" className={styles.learn}>
            Learn more {">"}
          </Link>
        </div>
        <div className={styles.macImg}>
          <center>
            {" "}
            <img
              src="https://www.apple.com/v/mac/home/bs/images/overview/hero/macbook_pro_14_16__dmqm5vr9l7yq_large.jpg"
              alt="macbook"
              style={{ margin: "20px 0px" }}
            />
          </center>
        </div>
      </div>
      <br />

      <div className={styles.mac} style={{ backgroundColor: "black" }}>
        <div>
          <p style={{ color: "#F57126", fontSize: "18px", fontWeight: "600" }}>
            New
          </p>
          <h2 style={{ color: "white" }}>Mac mini</h2>
          <h3 style={{ color: "white" }}>More muscle. More hustle.</h3>
          <p style={{ color: "white" }}>From $599</p>
          <button
            style={{
              width: "80px",
              height: "auto",
              padding: "5px 0px",
              backgroundColor: "#1577ED",
              borderRadius: "20px",
              color: "white",
              margin: "20px 0px",
            }}
          >
            Buy
          </button>
          <Link to="#" className={styles.learn}>
            Learn more {">"}
          </Link>
        </div>
        <div className={styles.macImg}>
          <center>
            {" "}
            <img src={img} alt="macbook" style={{ margin: "10px 0px" }} />
          </center>
        </div>
      </div>
      <br />

      <div className={styles.banner3}>
        <center>
          <img
            src="https://www.apple.com/v/mac/home/bs/images/overview/holiday-2023/cny23_familypage_banner_bunnylogo__dr5frkhw4g8y_large.png"
            alt="icon"
          />
        </center>
        <h2 style={{ color: "white" }}>A gift for every wish.</h2>
        <p style={{ color: "white", fontSize: "25px", fontWeight: "400" }}>
          Find something for everyone.
        </p>
        <p style={{ color: "white", fontSize: "25px", fontWeight: "400" }}>
          this Lunar New Year.
        </p>
        <Link
          to="https://www.apple.com/us/shop/goto/gifts/chinese_new_year"
          className={styles.learn}
          style={{ color: "white" }}
        >
          Shop the gift guide{">"}
        </Link>
      </div>
      <br />
      <div className={styles.banner}>
        <h2 style={{ color: "white" }}>Apple at Work</h2>
        <p style={{ color: "white", fontSize: "25px", fontWeight: "400" }}>
          Get the power to take your business to the next level.
        </p>
        <Link
          to="https://www.apple.com/business/"
          className={styles.learn}
          style={{ color: "white" }}
        >
          Learn about Apple at Work {">"}
        </Link>
      </div>
      <br />

      <div className={styles.banner2}>
        <h2 style={{ color: "white" }}>Apple and Education</h2>
        <p style={{ color: "white", fontSize: "25px", fontWeight: "400" }}>
          Empowering educators and students to move the world forward.
        </p>
        <Link
          to="https://www.apple.com/business/"
          className={styles.learn}
          style={{ color: "white" }}
        >
          Learn about Apple and Education{">"}
        </Link>
      </div>
    </>
  );
};

export default Mac;
