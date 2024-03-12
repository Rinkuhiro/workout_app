import React, {useState} from "react";
import style from "../style/style";
import { Text, View, Pressable } from "react-native";

export default function Radiobutton({options, onPress}) {
    const [value, setValue] = useState(true);

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    return (
        <>
            {
                options.map((item) => (
                    <View key={item.value} style={style.radioButton}>
                        <Text style={style.radioLabel}>{item.label}</Text>
                        <Pressable style={style.circle} onPress={() => handlePress(item.value)}>
                            {value === item.value && <View style={style.checkedCircle}/>}
                        </Pressable>
                    </View>
                ))
            }
        </>
    )


}