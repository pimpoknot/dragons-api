import { extendTheme } from "@chakra-ui/react"

export const DragonTheme = extendTheme({
    styles: {
        global: {
            "html, body": {
               padding: 0,
               bg: "#333",
               margin: 0,
            },
            a: {
                color: "teal.500",
            },
        },
    },
})
