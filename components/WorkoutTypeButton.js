import React from 'react';
import { Text, View, Pressable } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles, {colorLabel} from '../style/style';


export default function WorkoutTypeButton({values, selectedValue, selectionChanged}){
    return (
        <View style={styles.workoutRow}>
            {values.map(value => 
                <Pressable key={value} onPress={ () =>selectionChanged(value)}>
                    
                    <Text style={ value=="Run" ? [styles.workoutTypeButtonFirst, value==selectedValue && styles.selectedWorkout] : value=="Swim" ? [styles.workoutTypeButtonLast, value==selectedValue && styles.selectedWorkout] : [styles.workoutTypeButton, value==selectedValue && styles.selectedWorkout]}>
                    <MaterialCommunityIcons name={value=="Run" ? "run-fast" : value=="Bike" ? "bike" : "swim"} size={18} color={value==selectedValue ? "white" : colorLabel}/>
                    <Text style={value==selectedValue ? styles.workoutTypeButtonText : styles.workoutTypeButtonTextS}>
                        {value}
                    </Text>
                    </Text>
                </Pressable>
            )}
        </View>
    );
}