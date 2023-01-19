import React from 'react'
import WatchBody1 from '../Components/Watch/WatchBody1'
import WatchBody2 from '../Components/Watch/WatchBody2'
import WatchBody3 from '../Components/Watch/WatchBody3'
import WatchBody4 from '../Components/Watch/WatchBody4'
import WatchBody5 from '../Components/Watch/WatchBody5'
import WatchBody6 from '../Components/Watch/WatchBody6'
import styles from "../Styles/Watch.module.css"
import TopDrawer from '../Components/Home/TopDrawer';
import allData from '../Components/Home/allData';
import MetaData from '../Components/Home/MetaData'
import { Box } from '@chakra-ui/react'
const Watch = () => {
  return (
    <>
      
      <Box className={styles.Watch_body}>
      <MetaData title={"BlueApple (India)"}/>
      <Box>
        <TopDrawer data={allData.topDrawer.watch} />
      </Box>
        <WatchBody1/>
        <WatchBody2/>
        <WatchBody3/>
        <WatchBody4/>
        <WatchBody5/>
        <WatchBody6/>
        </Box>
    </>
  )
}

export default Watch