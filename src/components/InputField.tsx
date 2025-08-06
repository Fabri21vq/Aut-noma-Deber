import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function CustomInput({ label, value, onChangeText }: Props) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}