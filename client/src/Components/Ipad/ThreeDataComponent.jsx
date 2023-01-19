import { Flex,Grid, Image, Text,Link } from '@chakra-ui/react'
import React from 'react'

const ThreeDataComponent = () => {
  return (
    <>
        <Flex width={'100%'} maxW={'1000px'} margin={'0 auto'} flexWrap={'nowrap'} justifyContent={'center'} paddingBottom={'56px'} textAlign='center' gap={'85px'} marginTop={'140px'}>
            <Grid>
                <Image margin={'auto'} height={'75px'} weight={'51px'} src='https://www.apple.com/v/watch/ba/built/assets/ac-buystrip/shipping/icon__d0y57vpw2meu_large.svg' alt='ipad_images'/>
                <Text fontSize={'21px'} fontWeight={'600'} marginTop={'0.53em'} letterSpacing={'0.011em'} lineHeight={'1.1904'} >Free delivery</Text>
                <Text width={'240px'} margin={'8px auto 8px auto'} fontSize={'20px'} fontWeight={'400'}>Get free delivery direct to your door</Text>
                <Link color={'#0071e3'} fontSize={'20px'} >Learn more <span marginTop={'4px'}>{'>'}</span></Link>
            </Grid>
            <Grid>
                <Image margin={'auto'} height={'75px'} weight={'54px'} src='https://www.apple.com/in/global/includes/buystrip/images/financing/icon_large.svg' alt='ipad_images'/>
                <Text fontSize={'21px'} fontWeight={'600'} marginTop={'0.53em'} letterSpacing={'0.011em'} lineHeight={'1.1904'} >Ways to buy</Text>
                <Text width={'260px'} margin={'8px auto 8px auto'} fontSize={'20px'} fontWeight={'400'} >Choose the way that's right for you.</Text>
                <Link color={'#0071e3'} fontSize={'20px'} >Learn more <span marginTop={'4px'}>{'>'}</span></Link>
            </Grid>
            <Grid>
                <Image margin={'auto'} height={'75px'} weight={'54px'} src='https://www.apple.com/v/ipad/home/cc/images/overview/icon_engraving__cv9oecgi9r0i_large.png' alt='ipd_images'/>
                <Text fontSize={'21px'} fontWeight={'600'} marginTop={'0.53em'} letterSpacing={'0.011em'} lineHeight={'1.1904'} >Personalise it</Text>
                <Text width={'300px'} margin={'8px auto 8px auto'} 
                fontSize={'20px'} fontWeight={'400'} >Engrave your iPad with your name or a personal note — free. Only at Apple.</Text>
                <Link color={'#0071e3'} fontSize={'20px'} >Learn more <span marginTop={'4px'}>{'>'}</span></Link>
            </Grid>
        </Flex>   
    </>
  )
}

export default ThreeDataComponent;