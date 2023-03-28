import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormAddContact } from "@/components/Form/FromAddContact";

const Contact = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <FormAddContact />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Contact;