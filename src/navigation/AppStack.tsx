// src/navigation/AppStack.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebViewNavigation } from 'react-native-webview';




export type AppStackParamList = {
  Main: undefined;
  PostPage: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

interface AppStackProps {
  refreshKey: number;
	updateNavState: (newNavState: WebViewNavigation) => void;
}

const AppStack: React.FC<AppStackProps> = ({ refreshKey, updateNavState }) => {


  return (
		
		
		<NavigationContainer key={refreshKey}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Main" >
							{(props) => (
							<MainScreen {...props} updateNavState={updateNavState} />
						)}
						</Stack.Screen>
				</Stack.Navigator>
		</NavigationContainer>
  );
};

export default AppStack;
