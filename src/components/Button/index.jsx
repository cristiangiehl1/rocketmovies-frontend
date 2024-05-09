import { Container } from "./styles";

export function Button({ isDelete = false, title, icon: Icon, ...rest}) {
    return(
        <Container
            $isDelete={isDelete}
            type="button"           
            {...rest}    
        >   
           {Icon && <Icon size={20} />}
           {title}
        </Container>
    )
}