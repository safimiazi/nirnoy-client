// ClientLayout.tsx
"use client";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import { ThemeProvider } from "../theme-provider";
import { ReduxProvider } from "../redux/ReduxProvider";
import { ConfigProvider } from "antd";

// Mark this as a Client Component

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000000",
            colorInfo: "#000000",
          },
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </ConfigProvider>
    </Provider>
  );
}
