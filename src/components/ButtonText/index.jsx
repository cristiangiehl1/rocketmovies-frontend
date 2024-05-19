import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, onClick, ...rest }) {
    return(
        
            <Container                
                {...rest}
            >
                <button onClick={onClick}>
                    {Icon && <Icon size={20} />}
                    {title}
                </button>
            </Container>    
    )
}