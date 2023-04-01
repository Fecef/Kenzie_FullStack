import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container } from "../Container";
import { Box } from "./style";

export function Footer() {
    return (
        <Box>
            <Container>
                <address>
                    <Link href="https://github.com/Fecef" target="_blank">Github <FaGithub /></Link>
                    <Link href="https://www.linkedin.com/in/fecef/" target="_blank">LinkedIn <FaLinkedin /></Link>
                </address>
            </Container>
        </Box>
    )
}