import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const colorBck = "#FEE6F3";
export const colorNav = "#F1C9FA";
export const colorButton = "#9F5F91";
export const colorLabel = "#252e4f";
export const colorButtonD = "#232c4b";
export const colorInput = "white";
export const colorClear = "#9F5F91";

export default StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorBck
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colorBck
  },
  title: {
    color: colorButton,
    fontWeight: 'bold',
    flex: 1,
    fontSize: 13,
    textAlign: 'center',
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: colorButton,
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDate: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: colorButton,
    width: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15,
    padding: 20,
    color: "#fff",
  },
  buttonText2: {
    fontSize: 14,
    padding: 20,
    color: "#fff",
  },
  workoutTypeButton: {
    borderWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  workoutTypeButtonText: {
    fontSize: 15,
    padding: 20,
  },
  workoutTypeButtonTextS: {
    fontSize: 15,
    padding: 20,
    color: colorLabel
  },
  workoutTypeButtonFirst: {
    borderWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderTopLeftRadius : 5,
    borderBottomLeftRadius : 5,
    backgroundColor: 'white',
  },
  workoutTypeButtonLast: {
    borderWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderTopRightRadius : 5,
    borderBottomRightRadius : 5,
    backgroundColor: 'white',
  },
  selectedWorkout:{
    backgroundColor: colorButton,
    color: 'white'
  },
  workoutRow:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    justifyContent: 'flex-start'
  },
  label:{
    color: colorLabel,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom : 10,
    paddingTop: 30,
    paddingRight: 100
  },
  label2:{
    color: colorLabel,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom : 10,
    paddingTop: 20,
    paddingRight: 100
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colorInput,
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30,
  },
  radioLabel: {
    marginRight: 10,
    color: colorClear,
    fontWeight: 'bold',
    fontSize: 20,
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colorClear,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorInput,
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: colorClear,
    color: colorLabel,
  },
  total: {
    margin: 5,
    flexDirection: "row",
    padding: 10,
    backgroundColor: colorNav,
    width: 160,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
    
  },
  list: {
    margin: 10,
    flexDirection: "row",
    padding: 10,
    backgroundColor: colorInput,
    width: 330,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});