import nookies from "nookies"

import { GetServerSideProps, NextPage } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { FormPerfil } from "@/components/Form/FormPerfil";
import { Header } from "@/components/Header";
import { IUser } from "@/interfaces/user";
import { api } from "@/services/api";


export interface Props {
    user: IUser
}

const Perfil: NextPage<Props> = ({ user }) => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <FormPerfil user={user} />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Perfil;

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

    const res = await api.get("/user/retrieve", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const user: IUser = res.data

    return { props: { user } }
}