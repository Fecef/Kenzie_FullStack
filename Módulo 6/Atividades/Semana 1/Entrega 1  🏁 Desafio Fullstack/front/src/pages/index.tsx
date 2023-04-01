import Head from 'next/head'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { WelcomeMessage } from '@/components/WelcomeMessage'
import { FormLogin } from '@/components/Form/FormLogin'
import { Footer } from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Kenzie Challange</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE-Edge" />
        <meta name="description" content="Desafio de uma aplicação web full stack." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="https://kenzie.com.br/favicon.jpeg" type="image/x-icon" />
      </Head>

      <Header />
      <main>
        <Container>
          <WelcomeMessage />
          <FormLogin />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Home;
