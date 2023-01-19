import React from 'react'
import { Box, Flex, Grid, Image, Text,Link, InputLeftElement,InputGroup,Input, } from '@chakra-ui/react'
import {TfiSearch} from 'react-icons/tfi'
import MetaData from '../Components/Home/MetaData'
const Support = () => {
  return (
    <>
    <Box fontFamily={'SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif'}>
      <Box width={'100%'} height={'500px'} overflow={'hidden'} >
        <MetaData title={"BlueApple (India)"}/>
        <Image transform={'scale(1.26)'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/psp-hero-banner-homepage-welcome.image.large_2x.jpg'} alt={'Support_image1'}/>
        <Text position={'relative'} top={'-320px'} left={'8px'} fontSize={'48px'} fontWeight={'600'} color={'white'}>Apple Support</Text> 
      </Box>
      <Flex justifyContent={'center'} alignItems={'center'} gap={'75px'} margin={'30px auto 40px auto'}>
          <Box>
            <Image width={'68px'} height={'68px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png'} alt={'drawer_image1'}/>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'}>iPhone</Text>
          </Box>
          <Box>
            <Image width={'68px'} height={'68px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_imac_family_2x.png'} alt={'drawer_image1'}/>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'}>Mac</Text>
          </Box>
          <Box>
            <Image width={'68px'} height={'68px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png'} alt={'drawer_image1'}/>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'}>iPad</Text>
          </Box>
          <Box>
            <Image width={'68px'} height={'68px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png'} alt={'drawer_image1'}/>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'}>Watch</Text>
          </Box>
          <Box>
            <Image width={'68px'} height={'68px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage-productdrawer-airpods-dark_2x.png'} alt={'drawer_image1'}/>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'}>AirPods</Text>
          </Box>
          <Box>
            <Image width={'68px'} height={'68px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productdrawer_applemusic_2x.png'} alt={'drawer_image1'}/>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'}>Music</Text>
          </Box>
          <Box>
            <Image width={'68px'} height={'68px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/homepage-productdrawer-appletv_2x.png'} alt={'drawer_image1'}/>
            <Text _hover={{textDecoration:'underline'}} cursor={'pointer'}>TV</Text>
          </Box>
        </Flex>
        <Flex display={'flex'} height={'200px'} justifyContent={'center'} marginTop={'100px'} borderTop={'1px solid #d2d2d7'} borderBottom={'1px solid #d2d2d7'} alignItems={'center'}>
          <Flex width={'70%'} height={'50%'} justifyContent={'center'} gap={'40px'} > 
            <Grid justifyContent={'center'} alignItems={'center'} borderRight={'1px solid #d2d2d7'}>
              <Image margin={'auto'} marginRight={'50%'} width={'40px'} height={'40px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/promo-icon-homepage-password_2x.png'} alt={'notebokk'}/>
              <Link  width={'200px'}  marginTop={'0px'} marginRight={'40px'} color={'#0071e3'}>Forgotten Apple ID or password <span >{'>'}</span></Link>
            </Grid>
            <Grid justifyContent={'center'} alignItems={'center'} borderRight={'1px solid #d2d2d7'}>
              <Image margin={'auto'} marginRight={'50%'}  width={'40px'} height={'40px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/promo-icon-homepage-repair_2x.png'} alt={'notebokk'}/>
              <Link  width={'200px'}  marginTop={'0px'} marginRight={'40px'} color={'#0071e3'}>Apple Repair <span >{'>'}</span></Link>
            </Grid>
            <Grid justifyContent={'center'} alignItems={'center'} borderRight={'1px solid #d2d2d7'}>
              <Image margin={'auto'} marginRight={'50%'}  width={'40px'} height={'40px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/promo-icon-homepage-subscriptions_2x.png'} alt={'notebokk'}/>
              <Link  width={'200px'}  marginTop={'0px'} marginRight={'40px'} color={'#0071e3'}>Billing and Subscription<span >{'>'}</span></Link>
            </Grid>
          </Flex>
        </Flex>
        <Grid justifyContent={'center'} alignItems={'center'} gap={'20px'} padding={'40px 40px'} borderBottom={'1px solid #d2d2d7'}>
          <Text fontSize={'40px'} lineHeight={'1.05'} fontWeight={'500'} letterSpacing={'0.008em'}>Search for topics</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<TfiSearch color='gray.300' />}
            />
            <Input type='tel' placeholder='Search Support' size={'lg'} width={'700px'} fontSize={'30px'} paddingLeft={'50px'}/>
          </InputGroup>
        </Grid>
        <Flex justifyContent={'center'} alignItems={'center'} height={'300px'} > 
          <Image width={'400px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-update-ios-promo_2x.png'} alt={'image3'}/>
          <Grid width={'25%'} textAlign={'left'} rowGap={'10px'}>
            <Text  fontSize={'40px'} lineHeight={'1.05'} fontWeight={'500'} letterSpacing={'0.008em'}>Update to iOS 16</Text>
            <Text  fontSize={'22px'} lineHeight={'1.4545'} fontWeight={'300'} letterSpacing={'0.016em'} >Explore all-new personalisation features, privacy and security enhancements, and more ways to communicate seamlessly.</Text>
            <Link fontSize={'22px'} lineHeight={'1.4545'} fontWeight={'300'} letterSpacing={'0.016em'} width={'300px'} color={'#0070c9'}>Find out how to get the latest<span >{'>'}</span></Link>
          </Grid>
        </Flex>
        <Box overflow={'hidden'}>
          <Image transform={'scaleX(1.5)'} height={'80vh'} position={'relative'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/psp-hero-banner-homepage-getsupport.image.large_2x.jpg'} alt={'image4'}/>
          <Grid textAlign={'left'} position={'absolute'} marginLeft={'200px'} marginTop={'-350px'} gap={'10px'}>
            <Text fontSize={'40px'} lineHeight={'1.05'} fontWeight={'500'} letterSpacing={'0.008em'} color={'white'}>Get Support</Text>
            <Text fontSize={'17px'} lineHeight={'1.52'} fontWeight={'400'} letterSpacing={'-0.021em'} marginTop={'12px'} color={'white'}>Choose your and we'll find you the best </Text>
            <Link fontSize={'17px'} lineHeight={'1.52'} fontWeight={'400'} letterSpacing={'-0.021em'} color={'#6BF'}>Start Now<span >{'  >'}</span></Link>
            <Link fontSize={'17px'} lineHeight={'1.52'} fontWeight={'400'} letterSpacing={'-0.021em'} color={'#6BF'}>Download the Apple Support app<span >{'  >'}</span></Link>
          </Grid>
        </Box>
        <Flex justifyContent={'center'} alignItems={'center'} borderBottom={'1px solid #d2d2d7'} height={'400px'} paddingBottom={'48px'} >
          <Image width={'400px'} height={'200px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/repair/applecare-plus-homepage_2x.png'} alt={''}/>
          <Grid w={'30%'} textAlign={'left '}>
          <Text fontSize={'40px'} lineHeight={'1.05'} fontWeight={'500'} letterSpacing={'0.008em'}>Accidents happen. AppleCare+ covers them.</Text>
          <Text fontSize={'22px'} lineHeight={'1.4545'} fontWeight={'300'} letterSpacing={'0.016em'} marginTop={'0.75em'} >Get unlimited repairs for accidental damage protection, priority access to Apple experts and more.</Text>
          <Link fontSize={'22px'} lineHeight={'1.4545'} fontWeight={'300'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>Find out more about AppleCare+<span >{'  >'}</span></Link>
          </Grid>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} borderBottom={'1px solid #d2d2d7'} height={'400px'} paddingBottom={'48px'}>
          <Grid w={'30%'} textAlign={'left '}>
            <Text fontSize={'40px'} lineHeight={'1.05'} fontWeight={'500'} letterSpacing={'0.008em'}>My Support</Text>
            <Text fontSize={'22px'} lineHeight={'1.4545'} fontWeight={'300'} letterSpacing={'0.016em'} marginTop={'0.75em'} >Get up-to-date information about your Apple products in one place including repairs, tech support cases and much more.</Text>
            <Link fontSize={'22px'} lineHeight={'1.4545'} fontWeight={'300'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>Sign in to My Support <span >{'  >'}</span></Link>
          </Grid>
          <Image width={'400px'} height={'200px'} src={'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-my-support_2x.jpg'} alt={''}/>
        </Flex>
        <Grid justifyContent={'center'} alignItems={'center'} gap={'15px'} marginTop={'40px'} marginBottom={'40px'} paddingBottom={'50px'} borderBottom={'1px solid #d2d2d7'} >
          <Text fontSize={'24px'} lineHeight={'1.2089'} fontWeight={'500'} letterSpacing={'0.015em'} >Beware of Counterfeit parts</Text>
          <Text width={'590px'} fontSize={'17px'} lineHeight={'1.52'} fontWeight={'400'} letterSpacing={'-0.021em'}>Some counterfeit and third-party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an <Text color={'#0070c9'}>Apple Authorised Service Provider</Text>. If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.</Text>
          <Text width={'590px'} fontSize={'17px'} lineHeight={'1.52'} fontWeight={'400'} letterSpacing={'-0.021em'}>Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</Text>
        </Grid>
        <Grid textAlign={'left'} marginLeft={'250px'} marginBottom={'80px'}>
        <Text fontSize={'24px'} lineHeight={'1.4545'} fontWeight={'500'} letterSpacing={'0.016em'} marginTop={'0.75em'}>Apple Service Programs</Text>
        <Link fontSize={'17px'} lineHeight={'1.4545'} fontWeight={'400'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>Apple Watch Series 6 Service Program for Blank Screen Issue </Link>
        <Link fontSize={'17px'} lineHeight={'1.4545'} fontWeight={'400'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues </Link>
        <Link fontSize={'17px'} lineHeight={'1.4545'} fontWeight={'400'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>iPhone 11 Display Module Replacement Program for Touch Issues</Link>
        <Link fontSize={'17px'} lineHeight={'1.4545'} fontWeight={'400'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>15-inch MacBook Pro Battery Recall Program </Link>
        <Link fontSize={'17px'} lineHeight={'1.4545'} fontWeight={'400'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>Apple Three-Prong AC Wall Plug Adapter Recall Program </Link>
        <Link fontSize={'17px'} lineHeight={'1.4545'} fontWeight={'400'} letterSpacing={'0.016em'} marginTop={'0.75em'} color={'#0070c9'}>See all programs<span >{'  >'}</span></Link>
          
        </Grid>
    </Box>  
    </>
  )
}

export default Support