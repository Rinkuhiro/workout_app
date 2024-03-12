import {useState, useContext} from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native';
import WorkoutTypeButton from './WorkoutTypeButton';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-paper';
import { WorkoutsContext, DistanceContext } from '../context/context';


export default function Add() {

    const types = ["Run", "Bike", "Swim"];
    const [type, setType] = useState(types[0]);
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const workouts = useContext(WorkoutsContext).workout;
    const setWorkouts = useContext(WorkoutsContext).setWorkouts;
    const distanceType = useContext(DistanceContext).distanceType;



    const showDatePicker = () => {
        setShow(true);
    };

    const changeDate = (event,selectedValue) => {
        const current = selectedValue || date;
        setDate(current);
        setShow(false);
    }

    const addWorkout = () => {
        if (isNaN(+distance+1) || distance.length===0) {
            alert("The distance is not a number");
        } else if (distance<0) {
            alert("The distance is negative");
        } else if (isNaN(+duration+1) || duration.length===0) {
            alert("The duration is not a number");
        } else if(duration<0) {
            alert("The duration is negative");
        } else {
            let temp = [];
            workouts.map(w=>temp.push(w));
            let distanceTemp = distanceType ? distance : distance*1.61;
            temp.push({type:type,distance:distanceTemp,duration:duration,day:date.getDate(),month:date.getMonth()+1,year:date.getFullYear()});
            setWorkouts(temp);
            alert("Workout added !");

        }
    }

    return (
        <ScrollView>
     <View style={styles.container}>
        <Text style={styles.label2}>Select the type of workout :</Text>
        <WorkoutTypeButton values={types} selectedValue={type} selectionChanged={setType}/>
        <Text style={styles.label}>Distance ({distanceType ? 'km' : 'miles'}):</Text>
        <TextInput placeholder='0' style={styles.input} onChangeText={setDistance} keyboardType='numeric'></TextInput>
        <Text style={styles.label}>Duration (min):</Text>
        <TextInput placeholder='0' style={styles.input} onChangeText={setDuration} keyboardType='numeric'></TextInput>
        <Button onPress={showDatePicker} title="Pick date" style={styles.buttonDate}>
            <MaterialCommunityIcons name='calendar' size={20} color="white"/>
            <Text style={styles.buttonText2}>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</Text>
        </Button>
        {show && (
            <DateTimePicker 
                testID='dateTimePicker'
                value={date}
                mode={'date'}
                is24Hour={true}
                display='default'
                onChange={changeDate}/>
        )}
        <Button onPress={addWorkout} style={styles.button}><Text style={styles.buttonText}> Add a workout</Text> </Button>
     </View>
     </ScrollView>
    ) 
}