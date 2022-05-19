import React from "react";
import { Container } from './styled';

export default ({data}) => {
    return (
        <Container>
            <CategoryImage src={data.image} />
        </Container>
    );
}