import { createContext, useState } from "react";

interface iSpinnerContextProps {
  children: React.ReactNode;
}

interface iSpinnerContext {
  spinner: boolean;
  waiting: () => void;
  doneWaiting: () => void;
}

export const SpinnerContext = createContext<iSpinnerContext>(
  {} as iSpinnerContext
);

export function SpinnerProvider({ children }: iSpinnerContextProps) {
  const [spinner, setSpinner] = useState(false);

  const waiting = () => setSpinner(true);
  const doneWaiting = () => setSpinner(false);

  return (
    <SpinnerContext.Provider value={{ spinner, waiting, doneWaiting }}>
      {children}
    </SpinnerContext.Provider>
  );
}
