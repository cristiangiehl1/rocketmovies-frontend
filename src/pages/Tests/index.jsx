import { Container } from "./styles";

import { NoteItem } from "../../components/ComponentTest";

export function Tests() {
    return (
        <Container>
            <div>
                <NoteItem value="React"/>
                <NoteItem value="React"/>
                <NoteItem value="React" />
                <NoteItem placeholder="Novo marcador" isNew/>
            </div>         
        </Container>
    )
}