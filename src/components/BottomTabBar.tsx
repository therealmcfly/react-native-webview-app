// src/components/BottomTabBar.tsx
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

interface BottomTabBarProps {
  onHomePress: () => void;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ onHomePress }) => {
  return (
    <LinearGradient colors={['#1c1c1c', '#000']} style={{ height: 56 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity onPress={onHomePress}>
          <MaterialIcons name="home" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default BottomTabBar;
