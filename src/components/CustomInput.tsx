import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const CustomInput = ({ label, value, onChangeText, placeholder }: Props) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder || ''}
      keyboardType="numeric"
    />
  </View>
);
