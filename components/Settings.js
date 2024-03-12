import React, {useContext} from 'react'
import { View } from 'react-native'
import { DistanceContext } from '../context/context'
import RadioButton from './RadioButton'
import styles from '../style/style'


export default function Settings() {
  const setDistanceType = useContext(DistanceContext).setDistanceType;

  const options = [
    {
      label: 'Kilometers',
      value: true
    }, {
      label: 'Miles',
      value: false
    }
  ]


  return (
    <View style={styles.container2}>
      <RadioButton options={options} onPress={(value) => {setDistanceType(value)}}></RadioButton>
    </View>
  )
}