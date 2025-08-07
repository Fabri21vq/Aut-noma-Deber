import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomBotton';


export const Screen2 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const dividir = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('VALORES INVÁLIDOS');
    } else if (a === 0 && b === 0) {
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
      <CustomButton title="Dividir" onPress={dividir} />
      {resultado !== '' && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
};
