import { Box,Text,Flex,Image,Button,Link} from '@chakra-ui/react'
import React from 'react'
import styles from "../../Styles/Watch.module.css"
const WatchBody2 = () => {
  return (
    <>
        <Box className={styles.WatchBody2_container}>
            <Text className={styles.WatchBody2_text}>Which Apple watch is right for you?</Text>
            <Box className={styles.WatchBody2_child}>
                {/* grand child 1 */}
                <Box className={styles.WatchBody2_grandChild}>
                    <Box className={styles.s8Device} borderBottom={'1px solid #d2d2d7'} height={'fit-content'} paddingBottom={'40px'}>
                        <Image width={'216px'} height={'254px'} margin={'auto'}  src={'https://www.apple.com/in/watch/images/compare/compare_s8__q5ebcy3sahme_large_2x.jpg'} />
                        <Flex gap={'6px'} margin={'30px 0px 12px 50px'}>
                            <Box bgColor={'#18364f'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#c4c4c4'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#d4cdc9'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#c71048'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#565452'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#e2e3e4'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#e4cdb5'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#040303'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                        </Flex>
                        <Text color={'#bf4800'} fontSize={'12px'}>New</Text>
                        <Text fontSize={'21px'} fontWeight={'600'} lineHeight={'1.1904'} letterSpacing={'0.02em'} fontFamily={'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}>Apple Watch Series 8</Text>
                        <Text marginTop={'5px'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.4285'} letterSpacing={'-0.016em'} fontFamily={'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}>From ₹45900.00*</Text>
                        <Box display={'grid'}>
                        <Button marginLeft={'80px'} marginTop={'10px'} color={'white'} backgroundColor={'#0071e3d9'} position={'absolute'} borderRadius={'980px'} _hover={{backgroundColor:"#0071e3"}} fontSize={'12px'} fontWeight={'400'} height={7} letterSpacing={'-0.022em'} minW={'28px'}>Buy</Button>
                        <Link color={'#0071e3'} marginTop={'60px'}>Learn more <span marginTop={'4px'}>{'>'}</span></Link>
                        </Box>
                    </Box>
                    <Box className={styles.s8Display}  height={'fit-content'}>
                        <Text fontSize={'19px'} lineHeight={'1.21'} fontWeight={600} letterSpacing={'0.012em'}>45 mm or 41 mm</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Swimproof<sup>1</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>IP6X dust resistant<sup>1</sup></Text>
                        <Text fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>-</Text>
                        <Text fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>-</Text>
                    </Box>
                    <Box className={styles.s8Retina}  height={'fit-content'}>
                        <Image margin={'auto'} width={'42px'} height={'41px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_retina_display_s8__d7bm67bpu5aq_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Always-On Retina display</Text>
                        <Text color={'#6e6e73'} fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}>up to 1,000 nits</Text>
                    </Box>
                    <Box className={styles.s8Boa}  height={'fit-content'} >
                        <Image margin={'auto'} width={'42px'} height={'41px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_bo_app__bn0uz5oly82u_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Blood Oxygen app<sup>2</sup></Text>
                    </Box>
                    <Box className={styles.s8ecg}  height={'fit-content'} >
                        <Image margin={'auto'} width={'46px'} height={'39px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_ecg_app__cha5dfocq4wi_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>ECG app<sup>3</sup></Text>
                    </Box>
                    <Box className={styles.s8Heartrate}>
                        <Image margin={'auto'} width={'42px'} height={'38px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_heart_rate_notifications__dwkylcnr0nu6_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}  w={'119px'} margin={'auto'} marginTop={'0.8em'}>High and Low heart rate notifications</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}  w={'119px'} margin={'auto'} marginTop={'0.8em'}>Irregular rythm notifications<sup>3</sup></Text>
                    </Box>
                    <Box className={styles.s8Temperature}>
                        <Image margin={'auto'} width={'40px'} height={'42px'} src='	https://www.apple.com/v/watch/ba/images/compare/quicklook_temperature_sensing__dwxwqe1iyeqa_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Temperature Sensing<sup>5</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} w={'119px'}  margin={'auto'} marginTop={'0.8em'}>Cycle Tracking with retrospective ovulation estimates<sup>6</sup></Text>
                    </Box>
                    <Box className={styles.s8Sos}  height={'fit-content'} width={'200px'} margin={'auto'} >
                    <Image margin={'auto'} width={'41px'} height={'41px'} src='	https://www.apple.com/v/watch/ba/images/compare/quicklook_sos__eevzwecgdqaa_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Emergency SOS<sup>7</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} w={'119px'} margin={'auto'} marginTop={'0.8em'} >International emergency calling<sup>8</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Fall Detection<sup>9</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Crash Detection<sup>10</sup></Text>
                        <Text fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>-</Text>
                    </Box>
                    <Box className={styles.s8Gps}>
                        <Image margin={'auto'} width={'42px'} height={'39px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_cellular__fp5gj5mokv2i_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Cellular available<sup>9</sup></Text>
                    </Box>
                </Box>
                {/* grand child 2 */}
                <Box className={styles.WatchBody2_grandChild}>
                    <Box className={styles.seDevice} borderBottom={'1px solid #d2d2d7'} height={'fit-content'} paddingBottom={'40px'}>
                        <Image width={'216px'} height={'254px'} margin={'auto'}  src={'https://www.apple.com/in/watch/shared/compare/images/overview/compare_se__fjdos6x4rmmy_large_2x.jpg'} />
                        <Flex gap={'6px'} margin={'30px 0px 12px 90px'}>
                            <Box bgColor={'#18364f'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#e4cdb5'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                            <Box bgColor={'#040303'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                        </Flex>
                        <Text color={'#bf4800'} fontSize={'12px'}>New</Text>
                        <Text fontSize={'21px'} fontWeight={'600'} lineHeight={'1.1904'} letterSpacing={'0.02em'} fontFamily={'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}>Apple Watch SE</Text>
                        <Text marginTop={'5px'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.4285'} letterSpacing={'-0.016em'} fontFamily={'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}>From ₹29900.00*</Text>
                        <Box display={'grid'}>
                        <Button marginLeft={'80px'} marginTop={'10px'} color={'white'} backgroundColor={'#0071e3d9'} position={'absolute'} borderRadius={'980px'} _hover={{backgroundColor:"#0071e3"}} fontSize={'12px'} fontWeight={'400'} height={7} letterSpacing={'-0.022em'} minW={'28px'}>Buy</Button>
                        <Link color={'#0071e3'} marginTop={'60px'}>Learn more <span marginTop={'4px'}>{'>'}</span></Link>
                        </Box>
                    </Box>
                    <Box className={styles.seDisplay}  height={'fit-content'}>
                        <Text fontSize={'19px'} lineHeight={'1.21'} fontWeight={600} letterSpacing={'0.012em'}>44 mm or 40 mm</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Swimproof<sup>1</sup></Text>
                        <Text fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>-</Text>
                        <Text fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>-</Text>
                        <Text fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>-</Text>
                    </Box>
                    <Box className={styles.seRetina}  height={'fit-content'}>
                        <Image margin={'auto'} width={'42px'} height={'41px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_retina_display_se__bkqpyec086ya_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Always-On Retina display</Text>
                        <Text color={'#6e6e73'} fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}>up to 1,000 nits</Text>
                    </Box>
                    <Box className={styles.seBoa}  height={'fit-content'} >
                        <Text height={'41px'} fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'-0.8em'}>_</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Blood Oxygen app<sup>2</sup></Text>
                    </Box>
                    <Box className={styles.seecg}  height={'fit-content'} >
                        <Text height={'41px'} fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'-0.8em'}>_</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>ECG app<sup>3</sup></Text>
                    </Box>
                    <Box className={styles.seHeartrate}>
                        <Image margin={'auto'} width={'42px'} height={'38px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_heart_rate_notifications__dwkylcnr0nu6_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}  w={'119px'} margin={'auto'} marginTop={'0.8em'}>High and Low heart rate notifications</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}  w={'119px'} margin={'auto'} marginTop={'0.8em'}>Irregular rythm notifications<sup>3</sup></Text>
                    </Box>
                    <Box className={styles.seTemperature}>
                        <Image margin={'auto'} width={'40px'} height={'42px'} src='	https://www.apple.com/v/watch/ba/images/compare/quicklook_temperature_sensing__dwxwqe1iyeqa_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} w={'119px'}  margin={'auto'} marginTop={'0.8em'}>Cycle Tracking with retrospective ovulation estimates<sup>6</sup></Text>
                    </Box>
                    <Box className={styles.seSos}  height={'fit-content'} width={'200px'} margin={'auto'} >
                    <Image margin={'auto'} width={'41px'} height={'41px'} src='	https://www.apple.com/v/watch/ba/images/compare/quicklook_sos__eevzwecgdqaa_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Emergency SOS<sup>7</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} w={'119px'} margin={'auto'} marginTop={'0.8em'} >International emergency calling<sup>8</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Fall Detection<sup>9</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Crash Detection<sup>10</sup></Text>
                        <Text fontSize={'20px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>-</Text>
                    </Box>
                    <Box className={styles.seGps}>
                        <Image margin={'auto'} width={'42px'} height={'39px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_cellular__fp5gj5mokv2i_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Cellular available<sup>9</sup></Text>
                    </Box>
                </Box>
                {/* grand child 3 */}
                <Box className={styles.WatchBody2_grandChild}>
                    <Box className={styles.ultraDevice} borderBottom={'1px solid #d2d2d7'} height={'fit-content'} paddingBottom={'40px'}>
                        <Image width={'216px'} height={'254px'} margin={'auto'}  src={'https://www.apple.com/in/watch/images/compare/compare_ultra__bzeon0dzb49y_large_2x.jpg'} />
                        <Flex gap={'6px'} margin={'30px 0px 12px 100px'}>
                            <Box bgColor={'#d4cdc9'} borderRadius={'50%'} width={'11px'} height={'11px'}></Box>
                        </Flex>
                        <Text color={'#bf4800'} fontSize={'12px'}>New</Text>
                        <Text fontSize={'21px'} fontWeight={'600'} lineHeight={'1.1904'} letterSpacing={'0.02em'} fontFamily={'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}>Apple Watch Ultra</Text>
                        <Text marginTop={'5px'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.4285'} letterSpacing={'-0.016em'} fontFamily={'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif'}>From ₹89900.00*</Text>
                        <Box display={'grid'}>
                        <Button marginLeft={'80px'} marginTop={'10px'} color={'white'} backgroundColor={'#0071e3d9'} position={'absolute'} borderRadius={'980px'} _hover={{backgroundColor:"#0071e3"}} fontSize={'12px'} fontWeight={'400'} height={7} letterSpacing={'-0.022em'} minW={'28px'}>Buy</Button>
                        <Link color={'#0071e3'} marginTop={'60px'}>Learn more <span marginTop={'4px'}>{'>'}</span></Link>
                        </Box>
                    </Box>
                    <Box className={styles.ultraDisplay}  height={'fit-content'} display={'grid'} gap={'5px'}>
                        <Text fontSize={'19px'} lineHeight={'1.21'} fontWeight={600} letterSpacing={'0.012em'} marginTop={'0.8em'}>49 mm</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Swimproof<sup>1</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>IP6X dust resistant<sup>1</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>MIL-STD 810H certification</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Action button</Text>
                    </Box>
                    <Box className={styles.ultraRetina}  height={'fit-content'}>
                        <Image margin={'auto'} width={'42px'} height={'41px'} marginTop={'16px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_retina_display_ultra__d3e6x9is0pkm_large_2x.png'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Always-On Retina display</Text>
                        <Text color={'#6e6e73'} fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}>up to 1,000 nits</Text>
                    </Box>
                    <Box className={styles.ultraBoa}  height={'fit-content'} >
                        <Image margin={'auto'} width={'42px'} height={'41px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_bo_app__bn0uz5oly82u_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Blood Oxygen app<sup>2</sup></Text>
                    </Box>
                    <Box className={styles.ultraecg}  height={'fit-content'} >
                        <Image margin={'auto'} width={'46px'} height={'39px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_ecg_app__cha5dfocq4wi_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>ECG app<sup>3</sup></Text>
                    </Box>
                    <Box className={styles.ultraHeartrate}>
                        <Image margin={'auto'} width={'42px'} height={'38px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_heart_rate_notifications__dwkylcnr0nu6_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}  w={'119px'} margin={'auto'} marginTop={'0.8em'}>High and Low heart rate notifications</Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'}  w={'119px'} margin={'auto'} marginTop={'0.8em'}>Irregular rythm notifications<sup>3</sup></Text>
                    </Box>
                    <Box className={styles.ultraTemperature}>
                        <Image margin={'auto'} width={'40px'} height={'42px'} src='	https://www.apple.com/v/watch/ba/images/compare/quicklook_temperature_sensing__dwxwqe1iyeqa_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Temperature Sensing<sup>5</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} w={'119px'}  margin={'auto'} marginTop={'0.8em'}>Cycle Tracking with retrospective ovulation estimates<sup>6</sup></Text>
                    </Box>
                    <Box className={styles.ultraSos}  height={'fit-content'} width={'200px'} margin={'auto'} >
                    <Image margin={'auto'} width={'41px'} height={'41px'} src='	https://www.apple.com/v/watch/ba/images/compare/quicklook_sos__eevzwecgdqaa_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Emergency SOS<sup>7</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} w={'119px'} margin={'auto'} marginTop={'0.8em'} >International emergency calling<sup>8</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Fall Detection<sup>9</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Crash Detection<sup>10</sup></Text>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} w={'119px'} margin={'auto'} marginTop={'0.8em'}>86 decible siren to attract attention</Text>
                    </Box>
                    <Box className={styles.ultraGps}>
                        <Image margin={'auto'} width={'42px'} height={'39px'} src='https://www.apple.com/v/watch/ba/images/compare/quicklook_cellular__fp5gj5mokv2i_large_2x.png' alt='retina_col1'/>
                        <Text fontSize={'14px'} lineHeight={'1.42'} fontWeight={400} letterSpacing={'-0.01em'} marginTop={'0.8em'}>Cellular<sup>9</sup></Text>
                    </Box>
                </Box>
            </Box>
            <Flex gap={'40px'} margin='0px 0px 0px 450px'>
            <Link color={'#0071e3'} fontSize={'24px'}>Compare all models <span marginTop={'4px'}> {'>'}</span></Link>
            <Link color={'#0071e3'} fontSize={'24px'}>Shop Apple Watch<span marginTop={'4px'}> {'>'}</span></Link>
            </Flex>
        </Box>   
    </>
  )
}

export default WatchBody2