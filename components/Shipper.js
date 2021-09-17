import Matter from 'matter-js'
import React from 'react'
import { View,ImageBackground, StyleSheet } from 'react-native'

const Shipper = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color;

    return(
        <View style={{     
                
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}
        >
        <ImageBackground source={require('../img/biker.png')} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        </View>
    )
}

export default (world, color, pos, size) => {
   const initialBird = Matter.Bodies.rectangle(
       pos.x,
       pos.y,
       size.width,
       size.height,
       {label: 'Shipper'}
   )
   Matter.World.add(world, initialBird)

   return {
       body: initialBird,
       color,
       pos,
       renderer: <Shipper/>
   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width:70,
      height:60,
  
    },
   
  });

