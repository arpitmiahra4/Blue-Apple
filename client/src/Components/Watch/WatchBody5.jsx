import { Flex,Grid, Image, Text,Link } from '@chakra-ui/react'
import React from 'react'

const WatchBody5 = () => {
  return (
    <>
        <Flex width={'100%'} maxW={'1100px'} margin={'0 auto'} flexWrap={'nowrap'} justifyContent={'center'} paddingBottom={'56px'} textAlign='center' gap={'150px'}>
            <Grid>
                <Image margin={'auto'} height={'90px'} weight={'90px'} src='https://www.apple.com/v/watch/ba/built/assets/ac-buystrip/shipping/icon__d0y57vpw2meu_large.svg' alt='Watch_body5'/>
                <Text fontSize={'21px'} fontWeight={'600'} marginTop={'0.53em'} letterSpacing={'0.011em'} lineHeight={'1.1904'} >Free delivery</Text>
                <Text width={'200px'} margin={'8px auto 8px auto'} >Get free delivery direct to your door</Text>
                <Link color={'#0071e3'}>Learn more <span marginTop={'4px'}>{'>'}</span></Link>
            </Grid>
            <Grid>
                <Image margin={'auto'} height={'90px'} weight={'90px'} src='https://www.apple.com/in/global/includes/buystrip/images/financing/icon_large.svg' alt='Watch_body5'/>
                <Text fontSize={'21px'} fontWeight={'600'} marginTop={'0.53em'} letterSpacing={'0.011em'} lineHeight={'1.1904'} >Ways to buy</Text>
                <Text width={'200px'} margin={'8px auto 8px auto'} >Choose the way that's right for you.</Text>
                <Link color={'#0071e3'}>Learn more <span marginTop={'4px'}>{'>'}</span></Link>
            </Grid>
            <Grid>
                <Image margin={'auto'} height={'90px'} weight={'90px'} src='https://www.apple.com/v/watch/ba/built/assets/ac-buystrip/help/icon__d0y57vpw2meu_large.svg' alt='Watch_body5'/>
                <Text fontSize={'21px'} fontWeight={'600'} marginTop={'0.53em'} letterSpacing={'0.011em'} lineHeight={'1.1904'} >Get help buying</Text>
                <Text width={'200px'} margin={'8px auto 8px auto'} >Have a question? Call a Specialist or chat online. Call 000800 040 1966.</Text>
                <Link color={'#0071e3'}>Contact us <span marginTop={'4px'}>{'>'}</span></Link>
            </Grid>
        </Flex>   
    </>
  )
}

export default WatchBody5