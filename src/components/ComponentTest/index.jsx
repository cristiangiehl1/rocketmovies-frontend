import { FiPlus } from "@react-icons/all-files/fi/FiPlus";
import { FiX } from "@react-icons/all-files/fi/FiX";

import { Container } from "./styles";


export function NoteItem({isNew = false, value, onClick, ...rest}){    
    return (
        <Container $isnew={isNew}>
            <input
                type="text"                
                value={value}
                readOnly={!isNew}                
                {...rest}
            />
            <button onClick={onClick}>
                {isNew ? <FiPlus/> : <FiX />}                
            </button>
            
        </Container>
    )
} 