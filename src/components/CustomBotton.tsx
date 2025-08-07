import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    onPress: () => void;
}

export const CustomButton = ({ title, onPress }: Props) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);
