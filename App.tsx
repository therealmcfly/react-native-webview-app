// App.tsx
import React, { useContext, useState, useEffect } from 'react';
import AppStack from './src/navigation/AppStack';
import BottomTabBar from './src/components/BottomTabBar';
import Constants from 'expo-constants';
import { BackHandler, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { WebviewContext } from './src/contexts/webviewContext';
import { WebViewNavigation } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function App() {

	const [navState, setNavState] = useState<WebViewNavigation>();

  const { webViewRef } = useContext(WebviewContext);
	const [refreshKey, setRefreshKey] = useState(0);

	const updateNavState = (newNavState: WebViewNavigation) => {
		setNavState(newNavState);
	};

  const handleHomeButtonPress = () => {
		setRefreshKey((prevKey) => prevKey + 1);
	};

	const handleBackButton = () => {
    if (webViewRef.current && navState?.canGoBack) {
			webViewRef.current.goBack();
      return true;
    }
    return false;
  };

	useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [navState]);

  return (
		<>
			<StatusBar translucent={true} style='dark' backgroundColor='white'/>
      <SafeAreaProvider>
      <SafeAreaView style={{flex : 1 }}>
				
				<AppStack refreshKey={refreshKey} updateNavState = {updateNavState} />
				<BottomTabBar onHomePress={handleHomeButtonPress} />
			</SafeAreaView>
      </SafeAreaProvider>
		</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  statusBar: {
    flex: 1,
    // other styles for your main container
  },
});