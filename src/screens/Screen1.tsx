import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { styles } from '../theme/appTheme';


type Props = NativeStackScreenProps<RootStackParamList, 'Bienvenido'>;

export default function Screen1({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={{ uri: '}' }}
        style={styles.img}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('División')}>
        <Text style={styles.Text}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
}