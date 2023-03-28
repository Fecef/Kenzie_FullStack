import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '@/contexts/authContext'
import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'
import { UserProvider } from '@/contexts/userContext';
import { ContactProvider } from '@/contexts/contactContext';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <AuthProvider>
        <UserProvider>
          <ContactProvider>
            <Component {...pageProps} />
          </ContactProvider>
        </UserProvider>
      </AuthProvider>
    </>
  )
}
