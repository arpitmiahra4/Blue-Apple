import { Box, Image,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "../../Styles/Watch.module.css"
const WatchNav = () => {
    const [imageUrl,setImageUrl]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            let res= await axios.get("https://apiserver-no4z.onrender.com/watchNav")
            setImageUrl(res.data)
            console.log(imageUrl[1].url)
        }
        getData()
        // console.log(imageUrl)
    },)
  return (
    <>
    <Box className={styles.WatchNav_head}>
        {
            imageUrl.map((ele)=>(
            <Box className={styles.head_child} key={ele.id}>
                <Image src={ele.url} alt={ele.title}/>
                <Text>{ele.title}</Text>
            </Box>
            ))
        }
    </Box>   
    </>
  )
}

export default WatchNav