import React from 'react'
import Producer from './Producer'
import { FlatList, StyleSheet, Text } from 'react-native'
import useProducers from '../../hooks/useProducers'

export default function Producers({ top: Top }) {
  const [title, producers] = useProducers()

  const ListHeader = () => {
    return <>
      <Top />
      <Text style={styles.title}>{title}</Text>
    </>
  }

  return <FlatList
    data={producers}
    ListHeaderComponent={ListHeader}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => <Producer {...item} />}
  />
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 16,
    lineHeight: 32,
    color: '#464646',
    fontWeight: 'bold',
    marginHorizontal: 16
  }
})
