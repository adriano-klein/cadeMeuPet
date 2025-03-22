import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={roboto.className}>
        <SpeedInsights />
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
