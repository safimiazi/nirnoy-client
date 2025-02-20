// ClientLayout.tsx
"use client";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import { ThemeProvider } from "../theme-provider";
import { ReduxProvider } from "../redux/ReduxProvider";

  // Mark this as a Client Component



export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ReduxProvider>{children}</ReduxProvider>
      </ThemeProvider>
    </Provider>
  );
}