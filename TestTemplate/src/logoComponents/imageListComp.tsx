import React from 'react';

import { StyleSheet } from 'react-native';

import {LogoImageList} from '@logo-rn/logo-image-list';


const imageListComp =() => {

    const IMAGE_LIST: Array<any> = [
        {
          title: "image1",
          image: require("../assets/a.jpg")
        },
        {
          title: "image2",
          image: require("../assets/b.jpg")
        },
        {
          title: "image3",
          image: require("../assets/c.jpg")
        }
     ]

  return(
 

    <LogoImageList
        imageList={IMAGE_LIST}
        onClick={() => console.log( " Clicked" )} />

      
 )}

export default imageListComp;


const styles = StyleSheet.create({
  
  dividerLogo:{
    margin:5,
    height:5,
    backgroundColor:'red',
    
  }

})