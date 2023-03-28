import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IContact } from "@/interfaces/contact";
import FormUpdateContact from "@/components/Form/FormUpdateContact";
import api from "@/services/api";

import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export interface Props {
    contact: IContact
}

const Contact: NextPage<Props> = ({ contact }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Header />
            <main>
                <Container>
                    <FormUpdateContact contact={contact} />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Contact;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: "1" } },
            { params: { id: "2" } }
        ],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const id = context.params!.id
    const res = await api.get(`/user/contact/${id}}`)
    const contact: IContact = res.data

    return { props: { contact } }
}