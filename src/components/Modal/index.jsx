import React from "react";
import { Container, ModalBody } from './styled';

export default ({ status, setStatus, children }) => {
    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBig')) {
            setStatus(false);
        }
    }


    return (
        <Container 
            className="modalBig"
            status={status} 
            onClick={handleModalClick}
        >
             <ModalBody>
                 {children}
             </ModalBody>
        </Container>
    );
}
