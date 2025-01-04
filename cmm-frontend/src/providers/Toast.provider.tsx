import { createContext, useState, useContext, ReactNode, useMemo } from "react";
import Snackbar, { Toast } from "../components/Snackbar";

interface ToastContextType {
  showToast: ({ ...args }: Toast) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (toast: Toast) => {
    setToast(toast);
    setTimeout(() => setToast(null), 3000);
  };

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast && (
        <Snackbar
          toast={toast}
          autoHideDuration={3000}
          onClose={() => setToast(null)}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return {
    success: (props: Omit<Toast, "type">) =>
      context.showToast({ ...props, type: "success" }),
    error: (props: Omit<Toast, "type">) =>
      context.showToast({ ...props, type: "error" }),
    warning: (props: Omit<Toast, "type">) =>
      context.showToast({ ...props, type: "warning" }),
    info: (props: Omit<Toast, "type">) =>
      context.showToast({ ...props, type: "info" }),
  };
};
