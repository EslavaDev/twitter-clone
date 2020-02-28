import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 50px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
    border-color: red;
    border-width: 1;
    border-style: solid;
    background-color: green;
  color: ${({ theme }) => theme.colors.primary};
`

const Index = () => {
    const router = useRouter()
    const handleclick = () => {
        router.push('/about')
    }
return <Title>
    <h1>My page</h1>
    <button onClick={handleclick}>about</button>
    </Title>}
export default Index;