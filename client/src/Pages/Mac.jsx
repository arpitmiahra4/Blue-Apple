import React from 'react'
import { Box, Stack} from '@chakra-ui/react';
import styles from "../Styles/Mac.module.css";
const Mac = () => {
  return (
    <>
<div className={styles.tp}>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/macbookair_light__f0o95rwae8ae_large.svg" alt="product img" /><p>
MacBook Air</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/macbook_pro_light__e791sjqzt32a_large.svg" alt="product img" /><p>MacBook Pro</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/imac_24_light__colyztscbeeu_large.svg" alt="product img" /><p>iMac 24”</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_mini_light__frtahmzmd4mm_large.svg" alt="product img" /><p>Mac mini
</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_studio_light__ea3pb1auizu6_large.svg" alt="product img" /><p>Mac Studio</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_pro_light__cj4dvg7thx5y_large.svg" alt="product img" /><p>Mac Pro
</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_compare_light__emml1umdv9m6_large.svg" alt="product img" /><p>Compare
</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/displays_light__ewxqx5obdxci_large.svg" alt="product img" /><p>Displays</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_accessories_light__cuds10wyptyu_large.svg" alt="product img" /><p>Accessories</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_os_light__d0zczt34scq6_large.svg" alt="product img" /><p>Ventura</p></a></div>
    <div><a href="#"><img src="https://www.apple.com/v/mac/home/br/images/familybrowser/mac_shop_light__layuggud1xe2_large.svg" alt="product img" /><p>Shop mac</p></a></div>
</div>

<div className={styles.offer}>
  <p>Get 3% Daily Cash back with Apple Card. And pay for your new Mac over 12 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*</p>
  <a href="#" title='offer'>Learn more {">"}</a>
</div>

<div className={styles.mac}>
  <div>
    <p style={{color:"#F57126", fontSize:"18px", fontWeight:"600"}}>New</p>
    <h2>MacBook Air</h2>
    <h3>Don’t take it lightly.</h3>
    <p>From $1199</p>
    <button style={{width:"80px", height:"auto", padding:"5px 0px", backgroundColor:"#1577ED", borderRadius:"20px", color:"white", margin:"20px 0px"}}>Buy</button>
    <a href="#" className={styles.learn}>Learn more {">"}</a>
  </div>
  <div className={styles.macImg}>
   <center> <img src="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_air_m2__r1jrymq4ftea_large.jpg" alt="macbook" style={{margin:"20px 0px"}}/></center>

  </div>
</div>

<div className={styles.mac} style={{backgroundColor:"black"}}>
  <div>
    <p style={{color:"#F57126", fontSize:"18px", fontWeight:"600"}}>New</p>
    <h2 style={{color:"white"}}>MacBook Pro 13”</h2>
    <h3 style={{color:"white"}}>Pro anywhere.</h3>
    <p style={{color:"white"}}>From $1299</p>
    <button style={{width:"80px", height:"auto", padding:"5px 0px", backgroundColor:"#1577ED", borderRadius:"20px", color:"white", margin:"20px 0px"}}>Buy</button>
    <a href="#" className={styles.learn}>Learn more {">"}</a>
  </div>
  <div className={styles.macImg}>
   <center> <img src="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large.jpg" alt="macbook" style={{margin:"20px 0px"}}/></center>

  </div>
</div>
    </>
  )
}

export default Mac;