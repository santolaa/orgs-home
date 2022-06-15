import Star from './Star'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

export default function Stars({
  quantity: oldQuantity,
  editable = false,
  large = false
}) {
  const [quantity, setQuantity] = useState(oldQuantity)

  const RenderStars = () => {
    const starsList = []

    for (let index = 0; index < 5; index++) {
      starsList.push(
        <Star
          key={index}
          large={large}
          disabled={!editable}
          filled={index < quantity}
          onPress={() => setQuantity(index + 1)}
        />
      )
    }

    return starsList
  }

  return <View style={styles.stars}>
    <RenderStars />
  </View>
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  }
})
