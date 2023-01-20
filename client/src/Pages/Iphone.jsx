import React from 'react'
import { Avatar, Box, Button, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import TopDrawer from '../Components/Home/TopDrawer'
import MetaData from '../Components/Home/MetaData' 
import allData from '../Components/Home/allData'
import styles from "../Styles/Iphone.module.css"
const Iphone = () => {
  return (
    <>
      <MetaData title={"BlueApple Iphone Online - Apple (IN)"}/>
    <Box>
      <TopDrawer data={allData.topDrawer.iphone} />
    </Box>
    <Box w={"100%"} bg="#f5f5f7">
    <Box w={"100%"} display={"flex"} bg="white" fontSize={13} alignItems="center" justifyContent={"center"} h={"0px"}></Box>
    <br></br>

    Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.*
    
    </Box>
    
    {/* first Box */}
    <Box w={"100%"} className={styles.alok_one}>
    <Box pt={5}>
    <Text color={"#88888A"} fontSize={17} fontWeight="bold">New</Text>
        <Text color={"white"} fontSize={28} fontWeight="bold">iPhone 14 Pro</Text>
        <Text color={"#EB98FF"} fontSize={48} fontWeight="bold">Pro. Beyond</Text>
        <Box border={"1px solid white"} w={60} borderRadius={10} color="gray" m={"auto"}  mt={"1%"}>With Superfast 5G*</Box>
        <Text color={"#175590"} mt={10} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
      </Box>
    </Box>

    {/* second box */}

    <Box w={"100%"}  className={styles.alok_two}>
      <Box pt={5}>
      <Text color={"#88888A"} fontSize={17} fontWeight="bold">New</Text>
        <Text color={"black"} fontSize={28} fontWeight="bold">iPhone 14 Pro</Text>
        <Text color={"#EE445D"} fontSize={48} fontWeight="bold">Big and bigger.</Text>
        <Box border={"1px solid white"} w={60} borderRadius={10} color="gray" m={"auto"}  mt={"1%"}>With Superfast 5G*</Box>
        <Text color={"#175590"} mt={10} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
      </Box>
      </Box>

      {/* third box */}

      <Box w={"100%"}  className={styles.alok_three1}>
        <Box w={"50%"}  className={styles.alok_three2}>
        <Text color={"#88888A"} fontSize={25} fontWeight="bold">iPhone</Text>
        <Text color={"#2A4AB4"} fontSize={48} fontWeight="bold">Love the power.</Text>
        <Text color={"#2A4AB4"} fontSize={48} fontWeight="bold">Love the price.</Text>
        <Text color={"#88888A"} mt={15} fontSize={17} fontWeight="bold">From $17.87/mo. for 24 mo. or $429 before trade‑in1</Text>
        <Text color={"#175590"} mt={10} fontWeight="bold" fontSize={25} _hover={{textDecoration:"underline"}}>Learn more &gt;</Text>
        </Box>
        <Box w={"50%"}  className={styles.alok_three3}>
        <Image src='https://www.apple.com/v/iphone/home/bk/images/overview/hero/iphone_se_hero__gd586pazxqqa_large.jpg'></Image>
        </Box>
      </Box>

      {/* fourt box */}

      <Box w={"100%"} justifyContent={"Center"} className={styles.alok_four}>
        <Box className={styles.alok_four1}>
      <Text color={"white"} fontSize={25} fontWeight="bold">A Guided Tour of</Text>
      <Text color={"white"} fontSize={48} fontWeight="bold">iPhone 14 &</Text>
      <Text color={"white"} fontSize={48} fontWeight="bold">iPhone 14 Pro</Text>
        </Box>
       </Box>


       {/* fifth box */}

       <Box className={styles.alok_five}>
       <Text color={"#1D1D1F"} mt={20} fontSize={48} fontWeight="bold">Which iPhone is right for you?</Text>
       
        <Flex className={styles.alok_five1}>
        <Box>
          <Image  src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg"></Image>
          <Text color={"orange"} mt={10} fontSize={14} fontWeight="bold">New</Text>
          <Text color={"black"} mt={5} fontSize={30} fontWeight="bold">iPhone 14 Pro</Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={2} fontSize={18} >The ultimate iPhone.</Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={10} fontSize={14}>From $999</Text>
          <Button mt={3} bgColor={"#0077ED"} borderRadius={30} color={"white"}>Buy</Button>
          <hr style={{marginTop:"50px"}}></hr>
        </Box>
        <Box>
        <Image src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14__ct4sjk962pea_large.jpg"></Image>
        <Text color={"orange"} mt={10} fontSize={14} fontWeight="bold">New</Text>
          <Text color={"black"} mt={5} fontSize={30} fontWeight="bold">iPhone 14 </Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={2} fontSize={18} >A total powerhouse.</Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={10} fontSize={14}>From $799**</Text>
          <Button mt={3} bgColor={"#0077ED"} borderRadius={30} color={"white"}>Buy</Button>
          <hr style={{marginTop:"50px"}}></hr>
        </Box>
        <Box>
        <Image src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg"></Image>
        <Text color={"orange"} mt={10} fontSize={14} fontWeight="bold">New</Text>
          <Text color={"black"} mt={5} fontSize={30} fontWeight="bold">iPhone 13</Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={2} fontSize={18} >As amazing as ever.</Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={10} fontSize={14}>From $599**</Text>
          <Button mt={3} bgColor={"#0077ED"} borderRadius={30} color={"white"}>Buy</Button>
          <hr style={{marginTop:"50px"}}></hr>
        </Box>
        <Box>
        <Image src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg"></Image>
        <Text color={"orange"} mt={10} fontSize={14} fontWeight="bold">New</Text>
          <Text color={"black"} mt={5} fontSize={30} fontWeight="bold">iPhone 12</Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={2} fontSize={18} >Serious power. Serious value.</Text>
          <Text color={"#1D1D1F"} fontFamily={"sans-serif"} mt={10} fontSize={14}>From $429</Text>
          <Button mt={3} bgColor={"#0077ED"} borderRadius={30} color={"white"}>Buy</Button>
          
        <hr style={{marginTop:"50px"}}></hr>
        </Box>
        
        </Flex>
       </Box>


  {/* six box */}

  <Grid className={styles.alok_six}>
    <Box  >
    <Text  color={"black"} fontFamily={"sans-serif"} mt={2} fontSize={17}>6.7″ or 6.1″</Text>
    <Text mt={3} color={"#1D1D1F"} fontFamily={"sans-serif"}  fontSize={14}>Super Retina XDR display2
    <br></br>ProMotion technology<br></br>Always-On display</Text>
   
    </Box>
    <Box>
    <Text  color={"black"} fontFamily={"sans-serif"} mt={2} fontSize={17}>6.7″ or 6.1″</Text>
    <Text mt={3} color={"#1D1D1F"} fontFamily={"sans-serif"}  fontSize={14}>Super Retina XDR display2
    <br></br>ProMotion technology<br></br>Always-On display</Text>
    </Box>
    <Box>
    <Text  color={"black"} fontFamily={"sans-serif"} mt={2} fontSize={17}>6.1″ or 5.4″</Text>
    <Text mt={3} color={"#1D1D1F"} fontFamily={"sans-serif"}  fontSize={14}>Super Retina XDR display2
    <br></br>-<br></br>-</Text>
    </Box>
    <Box>
    <Text  color={"black"} fontFamily={"sans-serif"} mt={2} fontSize={17}>4.7″</Text>
    <Text mt={3} color={"#1D1D1F"} fontFamily={"sans-serif"}  fontSize={14}>Retina HD display
    <br></br>-<br></br>-</Text>
    </Box>
  </Grid>

  {/* box seven */}

  <Grid className={styles.alok_seven} >
    <GridItem >
      <Image  marginLeft={"120px"}
       src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_sos__d13do2p9n7qu_large.png" ></Image>
    Emergency SOS via satellite3 <br></br>
    Emergency SOS <br></br>
    Crash Detection
    </GridItem>
    <GridItem>
    <Image  marginLeft={"120px"}
       src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_sos__d13do2p9n7qu_large.png" ></Image>
    Emergency SOS via satellite3 <br></br>
    Emergency SOS <br></br>
    Crash Detection
    </GridItem>
    <GridItem>
    <Image  marginLeft={"120px"}
       src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_sos__d13do2p9n7qu_large.png" ></Image>
    - <br></br>
    Emergency SOS <br></br>
    -
    </GridItem>
    <GridItem>
    <Image  marginLeft={"120px"}
       src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_sos__d13do2p9n7qu_large.png" ></Image>
    - <br></br>
    Emergency SOS <br></br>
    -
    </GridItem>
    
    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_14_pro_camera__fxu2mrckyk2u_large.png" ></Image>
    Pro camera system
<br></br>
48MP Main Ultra Wide <br></br>
Telephoto <br></br>
Photonic Engine for incredible detail and color <br></br>
Autofocus on TrueDepth <br></br>
front camera
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_14_pro_camera__fxu2mrckyk2u_large.png" ></Image>
    Advanced dual-camera system
<br></br>
12MP Main Ultra Wide
 <br></br>
Telephoto <br></br>
Photonic Engine for incredible detail and color <br></br>
Autofocus on TrueDepth <br></br>
front camera
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_14_pro_camera__fxu2mrckyk2u_large.png" ></Image>
    Advanced camera system
<br></br>
12MP Main <br></br>
-<br></br>
Photonic Engine for incredible detail and color <br></br>
Autofocus on TrueDepth <br></br>
front camera
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_14_pro_camera__fxu2mrckyk2u_large.png" ></Image>
    Dual-camera system
<br></br>
12MP Main Ultra Wide <br></br>
- <br></br>
Photonic Engine for incredible detail and color <br></br>
Autofocus on TrueDepth <br></br>
front camera
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_battery__wqowcbwj50y2_large.png" ></Image>
    Up to 29 hours
    <br></br>
video playback4
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_battery__wqowcbwj50y2_large.png" ></Image>
    Up to 24 hours
    <br></br>
video playback4
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_battery__wqowcbwj50y2_large.png" ></Image>
    Up to 20 hours
    <br></br>
video playback4
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_battery__wqowcbwj50y2_large.png" ></Image>
    Up to 15 hours
    <br></br>
video playback4
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_a16__fjqclpv24fma_large.png" ></Image>
    A16 Bionic chip
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_a16__fjqclpv24fma_large.png" ></Image>
    A15 Bionic chip <br></br>
with 5-core GPU
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_a16__fjqclpv24fma_large.png" ></Image>
    A15 Bionic chip <br></br>
with 4-core GPU
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_a16__fjqclpv24fma_large.png" ></Image>
    A15 Bionic chip <br></br>
with 4-core GPU

    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_face_id__eyzciiwkc5oy_large.png" ></Image>
    Face ID
    <hr style={{marginTop:"50px"}}></hr>
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_face_id__eyzciiwkc5oy_large.png" ></Image>
    Face ID
    <hr style={{marginTop:"50px"}}></hr>
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_face_id__eyzciiwkc5oy_large.png" ></Image>
    Face ID
    <hr style={{marginTop:"50px"}}></hr>
    </GridItem>

    <GridItem mt={50}>
    <Image  marginLeft={"120px"}     src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/icon_touch_id__etlcbgeryay6_large.png" ></Image>
    Touch ID
    <hr style={{marginTop:"50px"}}></hr>
    </GridItem>
  </Grid>


  {/* box eight */}
  <Box className={styles.alok_eight2}>
  <Box className={styles.alok_eight}>
  <Image className={styles.alok_eight1}  src="https://www.apple.com/v/iphone/home/bk/images/overview/cny-2023/cny23_familypage_banner_iphone_bunnylogo__dagr97y2stg2_large.png" ></Image>
  <Text mt={3} color={"white"} fontFamily={"sans-serif"}  fontSize={48}>A gift for every wish</Text>
  Find something for everyone <br></br>
this Lunar New Year.
  </Box>
  <Text mt={3} color={"black"} fontFamily={"sans-serif"}  fontSize={48}>Ways to Buy iPhone</Text>
  </Box>


  {/* box nine */}

  <Box className={styles.alok_nine}>
<Box className={styles.alok_nine1}>
<Text  color={"black"} fontFamily={"sans-serif"}  fontSize={28}>Special carrier deals at Apple</Text>
<Text  color={"black"} fontFamily={"sans-serif"}  fontSize={48}>Save up to $1000 on the newest <br></br>
iPhone after trade-in.5</Text>


<Grid className={styles.alok_nine2}>
<GridItem className={styles.alok_nine3} >
    <Image className={styles.alok_nine4}  src="https://www.apple.com/v/iphone/home/bk/images/overview/retail/logo_att__b4yop8gfjb7m_large.jpg" ></Image>
    Get up to $1000 <br></br>
credit after trade-in
    </GridItem>

    <GridItem className={styles.alok_nine3} >
    <Image className={styles.alok_nine4} src="https://www.apple.com/v/iphone/home/bk/images/overview/retail/logo_sprint_alt__083puftk876e_large.jpg" ></Image>
    Get up to $1000 <br></br>
credit after trade-in
    </GridItem>

    <GridItem className={styles.alok_nine3} >
    <Image className={styles.alok_nine4} src="https://www.apple.com/v/iphone/home/bk/images/overview/retail/logo_tmobile_alt__fxs6r6y8jvu6_large.jpg" ></Image>
    Get up to $1000 <br></br>
credit after trade-in
    </GridItem>

    <GridItem className={styles.alok_nine3} >
    <Image className={styles.alok_nine4} src="https://www.apple.com/v/iphone/home/bk/images/overview/retail/logo_verizon_alt__dsygf2q4fxyu_large.jpg" ></Image>
    Get up to $1000 <br></br>
credit after trade-in
    </GridItem>
    
</Grid>
<Button mt={10}  backgroundColor={"#0071E3"} color={"white"} w={40} h={12} borderRadius={"30px"} >Find your deal</Button>
</Box>

  </Box>

  <Box className={styles.alok_ten}>

 <Box display={"flex"} backgroundColor={"white"} margin={"auto"} width={"90%"} paddingTop={"100px"}>
 <Box ml={"8%"} mr={"10%"}>
  <Text fontSize={48} >Trade in your smartphone <br></br> for credit.</Text>
  <Text fontSize={20} >With Apple Trade In, you can get credit towards a new <br></br> iPhone when you trade in your eligible smartphone.4 <br></br> It’s good for you and the planet.</Text>
 </Box>
 <Box>
  <Image src="https://www.apple.com/in/iphone/home/images/overview/retail/trade_in__djk6i9425m4i_large.jpg"></Image>
 </Box>
 </Box>


 <Box className={styles.alok_ten1}>
<Text fontSize={48}>
Why Apple is the best <br></br> place to buy iPhone.
</Text>
<Text fontSize={20} >You can choose a payment option that works for <br></br> you, pay less with a trade‑in, connect your new <br></br> iPhone to your carrier and get set up quickly.<br></br>
You can also chat with a Specialist anytime.</Text>
 </Box>

 <Box className={styles.alok_ten2} >
  <Box mt={50} >
    <Text fontSize={48} >MagSafe</Text>
    <Text fontSize={20} >Snap on a magnetic case, <br></br> wallet or both. And get faster <br></br> wireless charging.</Text>
    
  </Box>
  <Box>
    <Image height={"90%"} src="https://www.apple.com/v/iphone/home/bk/images/overview/accessories/magsafe__bfji5hb1mqsy_large.jpg" ></Image>
  </Box>
 </Box>


 <Box className={styles.alok_ten3} >
 <Box>
    <Image height={"98%"}  
     src="https://www.apple.com/v/iphone/home/bk/images/overview/accessories/airtag__b5lt0bcbd9ua_large.jpg" ></Image>
  </Box>
  <Box mt={50} >
    <Text fontSize={48} >MagSafe</Text>
    <Text fontSize={20} >Snap on a magnetic case, <br></br> wallet or both. And get faster <br></br> wireless charging.</Text>
    
  </Box>
 
 </Box>

 <Box className={styles.alok_ten4}  >
  <Text fontSize={48} >Magic runs in <br></br> the family.</Text>
  <Text fontSize={20} >Explore all AirPods models and <br></br> find the best ones for you.</Text>
<Image w={"74%"} h={"70%"} m={"auto"}  src='https://www.apple.com/v/iphone/home/bk/images/overview/accessories/airpods-pro-fall-22/airpods__eb24cvhoe26a_large.jpg' ></Image>
 </Box>

 <Flex className={styles.alok_ten5}>
  <Box>
    <Image 
    m={"auto"} src='https://www.apple.com/v/iphone/home/bk/images/overview/buystrip/icon_delivery__f4vnk0swb0eq_large.png' ></Image>
    <Text fontSize={20} fontWeight={"bold"} >Free delivery</Text>
    <Text fontSize={20} >Get free delivery <br></br> direct to your door.</Text>
  </Box>
  <Box>
  <Image 
    m={"auto"} w={"56px"} src='https://www.apple.com/in/global/includes/buystrip/images/ways-to-buy/icon_large.svg' ></Image>
    <Text fontSize={20} fontWeight={"bold"} >Ways to Buy</Text>
    <Text fontSize={20} >Choose the way that’s <br></br> right for you.</Text>
  </Box>
  <Box>
  <Image 
    m={"auto"} src='https://www.apple.com/v/iphone/home/bk/images/overview/buystrip/icon_personal_session__e6a44cdlylm6_large.png' ></Image>
    <Text fontSize={20} fontWeight={"bold"} >Get help buying</Text>
    <Text fontSize={20} >Have a question? Call <br></br> a Specialist or chat online.</Text>
  </Box>
 </Flex>

 <Box className={styles.alok_ten6}>

 </Box>

 <Box className={styles.alok_ten7}>
 <Box backgroundColor={"white"} >
  <Text fontSize={48} mb={"80px"} mt={"20px"} >Switching to iPhone <br></br>
is super simple.</Text>
  <Image src='https://www.apple.com/in/iphone/home/images/overview/why-iphone/switching_to_iphone__e3oz9r418awm_large.jpg'></Image>
 </Box>
<Box>
  <Image src='https://www.apple.com/v/iphone/home/bk/images/overview/why-iphone/privacy_update__cc6s1lqakkk2_large.jpg' ></Image>
</Box>
 </Box>
  
 <Text fontSize={48} m={"auto"}  mt={"20px"} >Get more out of your iPhone.</Text>


 <Box  className={styles.alok_ten8}>
 <Box backgroundColor={"white"} w={"50%"}>
  
  <Image m={"auto"} mt={"100px"} src='https://www.apple.com/in/iphone/home/images/overview/bundle__gkzbqz77r82m_large.jpg'></Image>
 </Box>
<Box backgroundColor={"white"} w={"50%"} m={"auto"} h={"500px"} >
  <Image m={"auto"} mt={"200px"} src='https://www.apple.com/v/iphone/home/bk/images/overview/more-iphone/apple_one__cq8ojsqxitea_large.jpg' ></Image>
  <Text>Bundle four Apple services. <br></br> And enjoy more for less.</Text>
</Box>
 </Box>
 
</Box>
    </>
  )
}

export default Iphone