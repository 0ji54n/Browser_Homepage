import extendTheme from "@chakra-ui/react";
const theme = extendTheme ({
    global: props => ({
        body:{
            bg:"#3b1418"(props),
        }
    })
})
export default theme