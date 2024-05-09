import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft"; 


import { Container, Form } from "./style";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"


export function CreateMovie() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <ButtonText title="Voltar" icon={FiArrowLeft} link="/" />

                    <h1>Novo filme</h1>

                    <div>
                        <Input
                            placeholder="Título"
                            type="text"
                            label="Título"
                            id="title"
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="text"
                            label="Sua nota (de 0 a 5)"
                            id="rating"
                        />
                    </div>
                    <TextArea placeholder="Observações"/>
                    <h2>Marcadores</h2>

                    <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem value="react"/>
                        <NoteItem value="react"/>
                        <NoteItem isNew placeholder="Novo marcador"/>                           
                    </div>
                    <div>
                        <Button $isDelete title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </div>
         
                </Form>
            </main>

        </Container>
    )
}