import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomInput from '../components/InputField';
import { styles } from '../theme/appTheme';


export default function Screen2() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const dividir = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (a === 0 && b === 0) {
      setResultado('INDETERMINACIÓN');
    } else if (b === 0) {
      setResultado('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResultado((a / b).toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>

      <CustomInput label="Número 1" value={num1} onChangeText={setNum1} />
      <CustomInput label="Número 2" value={num2} onChangeText={setNum2} />

      <TouchableOpacity style={styles.button} onPress={dividir}>
        <Text style={styles.Text}>Dividir</Text>
      </TouchableOpacity>

      {resultado !== '' && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
}