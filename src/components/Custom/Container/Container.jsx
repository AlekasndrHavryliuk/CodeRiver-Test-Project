import { StyledContainer } from "./Container.styles"
import React from 'react'

const Container = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
}

export default Container