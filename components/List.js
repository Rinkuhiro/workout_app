import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Container, Row, Col } from 'react-native-flex-grid';
import styles, { colorClear } from '../style/style';
import { DistanceContext, WorkoutsContext } from '../context/context';

export default List = ({ navigation }) => {

   const workouts = useContext(WorkoutsContext).workout;
   const distanceType = useContext(DistanceContext).distanceType;
   
   function printWorkout(workout){
    return <Row style={styles.list}><MaterialCommunityIcons name={workout.type==='Run' ? 'run-fast' : workout.type==='Bike' ? 'bike' : 'swim'} size={35} color={colorClear}/><Text>   {workout.day}.{workout.month}.{workout.year}   </Text><Text>Distance : {distanceType ? workout.distance : workout.distance*0.62} {distanceType ? 'km' : 'miles'}  </Text><Text>Duration : {workout.duration} min</Text></Row>;
   }

   let sumRun = 0;
   let sumBike = 0;
   let sumSwim = 0;

   workouts.map(w => w.type==='Run' ? sumRun+= +w.distance : w.type==='Bike' ? sumBike+= +w.distance : sumSwim+= +w.distance);
  
  return (
    <>
    <ScrollView>
    <View>
      <Container fluid style={styles.container}>
        <Row>
          <Col style={styles.total}>
            <MaterialCommunityIcons name='run-fast' size={40} color='#572C57'/>
            <Text style={styles.title}>{distanceType ? sumRun : sumRun*0.62}{distanceType ? 'km' : 'miles'}</Text>
          </Col>
          <Col style={styles.total}>
            <MaterialCommunityIcons name='bike' size={40} color='#572C57'/>
            <Text style={styles.title}>{distanceType ? sumBike : sumBike*0.62}{distanceType ? 'km' : 'miles'}</Text>
          </Col>
          <Col style={styles.total}>
            <MaterialCommunityIcons name='swim' size={40} color='#572C57'/>
            <Text style={styles.title}>{distanceType ? sumSwim : sumSwim*0.62}{distanceType ? 'km' : 'miles'}</Text>
          </Col>
        </Row>
      </Container>
      <Container fluid style={styles.container}>
      {workouts.map(w => printWorkout(w))}
      </Container>
    </View>
    </ScrollView>
    </>
  )
}