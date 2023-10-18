// src/screens/MainScreen.tsx
import React, { useRef, createContext, useEffect, useState } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { WebviewContext } from '../contexts/webviewContext';


interface MainScreenProps {
  navigation: any;
	route: any;
	updateNavState: (newNavState: WebViewNavigation) => void;
}

type AddressData = {
	address: string;
	zonecode: string;
};

const MainScreen: React.FC<MainScreenProps> = ( {navigation, route, updateNavState} ) => {
	
	const [navState, setNavState] = useState(false);

	const { webViewRef } = React.useContext(WebviewContext);

	const onNavStateChange = (navState: WebViewNavigation) => {
    updateNavState(navState);
	};

	

  return (
    <WebviewContext.Provider value={{ webViewRef }}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://google.com' }}
				originWhitelist={["*"]}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
        onNavigationStateChange={onNavStateChange}
      />
    </WebviewContext.Provider>
  );


};

export default MainScreen;