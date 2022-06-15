import React from 'react'
import logo from '../../assets/logo.png'
import { loadTop } from '../../services/loadData'
import { Image, StyleSheet, Text, View } from 'react-native'

class Top extends React.Component {
  state = {
    top: {
      welcome: '',
      subtitle: ''
    }
  }

  refreshTop = () => {
    const result = loadTop()

    this.setState({ top: result })
  }

  componentDidMount() {
    this.refreshTop()
  }

  render() {
    return <View style={styles.top}>
      <Image style={styles.image} source={logo} />
      <Text style={styles.welcome}>{this.state.top.welcome}</Text>
      <Text style={styles.subtitle}>{this.state.top.subtitle}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  top: {
    padding: 16,
    backgroundColor: '#F6F6F6'
  },
  image: {
    width: 70,
    height: 28
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  },
  welcome: {
    fontSize: 26,
    marginTop: 24,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold'
  }
})

export default Top
