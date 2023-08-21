interface Window {
  dataLayer: unknown[];
  flutterWebview: {
    postMessage: (message: string) => void;
  };
}
