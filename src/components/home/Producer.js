import Stars from '../Stars'
import React, { useMemo, useReducer } from 'react'
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const distanceInMeters = (distance) => {
  console.log('distanceInMeters')
  return `${distance}m`
}

export default function Producer({ name, image, distance, stars }) {
  const [editable, toggleEditable] = useReducer((editable) => !editable, false)

  const distanceText = useMemo(() => distanceInMeters(distance), [distance])

  return <TouchableOpacity style={styles.card} onPress={toggleEditable}>
    <Image style={styles.image} source={image} accessibilityLabel={name} />
    <View style={styles.info}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Stars quantity={stars} editable={editable} large={editable} />
      </View>
      <Text style={styles.distance}>{distanceText}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  image: {
    width: 48,
    height: 48,
    marginLeft: 16,
    borderRadius: 6,
    marginVertical: 16
  },
  card: {
    borderRadius: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',

    // Shadow on Android
    elevation: 4,

    // Shadow on iOS
    shadowRadius: 2.62,
    shadowColor: '#000',
    shadowOpacity: 0.23,
    shadowOffset: { width: 0, height: 2 },
  },
  info: {
    flex: 1,
    marginLeft: 8,
    marginRight: 16,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})
