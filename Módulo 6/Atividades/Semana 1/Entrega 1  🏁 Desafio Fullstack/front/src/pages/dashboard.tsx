import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies"

import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { IContact } from "@/interfaces/contact";
import { api } from "@/services/api";

export interface Props {
    contacts: IContact[]
}

const Dashboard: NextPage<Props> = ({ contacts }: any) => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Table contacts={contacts} />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Dashboard;

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

    const res = await api.get("/user/contact", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const contacts: IContact[] = res.data

    return { props: { contacts } }
}

