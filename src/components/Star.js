import React from 'react'
import star from '../assets/star.png'
import greyStar from '../assets/greyStar.png'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function Star({
  filled,
  onPress,
  large = false,
  disabled = true
}) {
  const styles = stylesFunction(large)

  const getImage = () => {
    if (filled) {
      return star
    }
    return greyStar
  }

  return <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
  >
    <Image style={styles.star} source={getImage()} />
  </TouchableOpacity>
}

const stylesFunction = (large) => StyleSheet.create({
  star: {
    marginRight: 2,
    width: large ? 36 : 12,
    height: large ? 36 : 12,
  }
})
