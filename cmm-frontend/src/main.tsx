import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { muiTheme } from "./themes/material.theme.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastProvider } from "./providers/Toast.provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={muiTheme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline enableColorScheme />
        <ToastProvider>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </ToastProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
