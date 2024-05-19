import { Container } from "./styles";

export function ButtonText({ title, icon: Icon ,...rest }) {
    return(
        
            <Container
                type="button"
                {...rest}
            >
                <button>
                    {Icon && <Icon size={20} />}
                    {title}
                </button>
            </Container>
       

    )
}