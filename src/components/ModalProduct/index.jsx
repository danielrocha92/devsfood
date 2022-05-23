import React from "react";
import { 
    Container, 
    ProductArea, 
    ProductButtons, 
    ProductPhoto, 
    ProductInfoArea, 
    ProductDetails, 
    ProductQuantityArea,
    ProductName,
    ProductIngredients 
        
} from "./styled";

export default ({ data })=> {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        ,,,
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>

            </ProductButtons>
        </Container>
    );
}