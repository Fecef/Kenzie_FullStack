import { Box } from "./style"

interface IContainer {
    children: React.ReactNode
}

export function Container({ children }: IContainer) {
    return (
        <Box>
            {children}
        </Box>
    )
}