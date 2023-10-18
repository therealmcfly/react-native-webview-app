import { createContext, createRef, useContext } from "react";
import WebView from "react-native-webview";


export const WebviewContext = createContext<{
  webViewRef: React.RefObject<WebView>;
}>({ 
	webViewRef: createRef()
});
