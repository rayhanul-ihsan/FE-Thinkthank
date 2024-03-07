import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'


type Props = {
    image: string
}

const AvatarTrivia = (props: Props) => {
    const {image} = props
    console.log(image)
  return (
    <View>
      <Text>
        <Image
              src={image}
              className="w-20 h-20  my-2 rounded-full" 
            />
      </Text>
    </View>
  )
}

export default AvatarTrivia

const styles = StyleSheet.create({})