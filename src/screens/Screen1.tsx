import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { CustomButton } from '../components/CustomBotton';


type Props = NativeStackScreenProps<RootStackParamList, 'Bienvenido'>;

export const Screen1 = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={{ uri: 'https://i.ibb.co/LDcBV48h/Whats-App-Image-2025-08-07-at-3-31-55-PM.jpg' }}
        style={styles.img}
      />
      <CustomButton title="Acceder" onPress={() => navigation.navigate('División')} />
    </View>
  );
};
