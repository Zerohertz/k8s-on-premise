import "client-only";

import { decamelizeKeys } from "humps";

import useDebounceCallback from "./useDebounceCallback";

interface UseGAReturn {
  gaEvent(evnetName: string, eventData: any): void;
  gaPageView(pageName: string): void;
}

// TODO: event category customize
const useGA = (): UseGAReturn => {
  const gaEvent = useDebounceCallback((eventName: string, eventData: any) => {
    window.gtag("event", eventName, decamelizeKeys(eventData));
  });

  const gaPageView = (pageName: string) => {
    window.gtag("event", "page_view", { pageName });
  };

  return {
    gaEvent,
    gaPageView,
  };
};

export default useGA;
