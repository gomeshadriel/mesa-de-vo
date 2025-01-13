import "@/styles/globals.css";
import "@fontsource/playwrite-us-trad";
import type { AppProps } from "next/app";
import '@fontsource/work-sans';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
