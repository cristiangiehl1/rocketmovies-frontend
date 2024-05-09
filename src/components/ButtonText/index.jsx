import { Container } from "./styles";
import { Link } from 'react-router-dom';

export function ButtonText({ link, title, icon: Icon ,...rest }) {
    return(
        
            <Container
                type="button"
                {...rest}
            >
                <Link to={link}>
                    {Icon && <Icon size={20} />}
                    {title}
                </Link>
            </Container>
       

    )
}