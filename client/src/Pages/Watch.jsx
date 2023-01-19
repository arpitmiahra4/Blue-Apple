import React from 'react'
import WatchBody1 from '../Components/Watch/WatchBody1'
import WatchBody2 from '../Components/Watch/WatchBody2'
import WatchBody3 from '../Components/Watch/WatchBody3'
import WatchBody4 from '../Components/Watch/WatchBody4'
import WatchBody5 from '../Components/Watch/WatchBody5'
import WatchBody6 from '../Components/Watch/WatchBody6'
import styles from "../Styles/Watch.module.css"
const Watch = () => {
  return (
    <>
      
      <div className={styles.Watch_body}>
        {/* <WatchNav/> */}
        <WatchBody1/>
        <WatchBody2/>
        <WatchBody3/>
        <WatchBody4/>
        <WatchBody5/>
        <WatchBody6/>
        </div>
    </>
  )
}

export default Watch