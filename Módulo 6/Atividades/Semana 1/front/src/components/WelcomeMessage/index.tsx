import { Box } from "./style";

export function WelcomeMessage() {
    return (
        <Box>
            <h1>DESAFIO <span>KENZIE</span> FULL STACK</h1>
            <p>Este projeto tem por objetivo demonstrar uma aplicação web simples, de ponta-a-ponta.</p>
            <ul>
                <li><strong>1º Passo</strong> - Faça um cadastro</li>
                <li><strong>2º Passo</strong> - Logue na sua conta</li>
                <li><strong>3º Passo</strong> - Adicione outro usuário</li>
                <li><strong>4º Passo</strong> - Realize as operações de CRUD</li>
            </ul>
        </Box>
    )
}