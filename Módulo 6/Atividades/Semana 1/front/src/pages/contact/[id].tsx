import { GetServerSideProps, NextPage } from "next";

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IContact } from "@/interfaces/contact";
import FormUpdateContact from "@/components/Form/FormUpdateContact";
import { api } from "@/services/api";
import nookies from "nookies"


export interface Props {
    contact: IContact
    id: string;
}

const Contact: NextPage<Props> = ({ contact, id }) => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <FormUpdateContact contact={contact} id={id} />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Contact;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const cookies = nookies.get(ctx)
    const token = cookies["kenzie.token"]

    if (!token) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    const id = ctx.params!.id as string
    const res = await api.get(`/user/contact/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const contact: IContact = res.data

    return { props: { contact, id } }
}