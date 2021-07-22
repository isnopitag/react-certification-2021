import React from 'react'
import styled from 'styled-components'
import { NavBar } from './NavBar'

export const NavBarContainer = () => {
    const Container = styled.div`
        background: #ffffff;
        height: 100vh;
    `
    return (
        <Container>
            <NavBar/>
        </Container>
    )
}
