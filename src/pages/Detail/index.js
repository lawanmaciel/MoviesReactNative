import React from 'react'
import { Container, Header, HeaderButton } from './styles'
import { Feather, Ionicons } from '@expo/vector-icons'

function Detail() {
    return (
        <Container>
            <Header>
                <HeaderButton>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
                <HeaderButton>
                    <Ionicons
                        name="bookmark"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
            </Header>
        </Container>
    )
}

export default Detail