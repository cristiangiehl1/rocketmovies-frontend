import { Container } from "./styles";


export function Input({ icon: Icon, id, label, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <label className="sr-only" htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
        </Container>
    )
}