import React, {useState} from 'react';
import {View, Button, Platform, Text, Input, TextComponent} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
 
const Mydatepicker = () => {
  //const [date, setDate] = useState(new Date(1598051730000));
  const [date, setDate] = useState(new Date(1590682645617));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [temp, setTemp] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setTemp(currentDate.toString())
    alert(currentDate);
  };
 
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
 
  const showDatepicker = () => {
    showMode('date');
  };
 
  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View>
      <Text>{temp}</Text>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
 
export default Mydatepicker;