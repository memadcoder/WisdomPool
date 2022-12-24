import { useState, ReactNode, createContext } from 'react';
type SnackbarContext = {
  snackbar: boolean;
  message: string;
  type: any;
  setSnackbar: () => void;
  setSnackbarMessage: (msg: string) => void;
  setSnackbarType: (typ: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SnackbarContext = createContext<SnackbarContext>(
  {} as SnackbarContext
);

type Props = {
  children: ReactNode;
};

export function SnackbarProvider({ children }: Props) {
  const [snackbar, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const setSnackbar = () => {
    console.log('called snackbarprovider');
    setOpen(!snackbar);
  };

  const setSnackbarMessage = (msg: string) => {
    setMessage(msg);
  };

  const setSnackbarType = (typ: any) => {
    setType(typ);
  };

  return (
    <SnackbarContext.Provider
      value={{
        snackbar,
        message,
        type,
        setSnackbar,
        setSnackbarMessage,
        setSnackbarType
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}
