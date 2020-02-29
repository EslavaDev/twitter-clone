import React, {useState} from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getSearch } from '../store/layout/selectors'
import Layout from '../components/layout';

const Title = styled.div`
  font-size: 50px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border-radius: 10px;
    border-color: white;
    border-width: 1;
    border-style: solid;
    /* background-color: green; */
  color: ${({ theme }) => theme.colors.primary};
`

const Index = () => {
  const [date, setDate] = useState();
    const router = useRouter()
    const selector = useSelector(getSearch)
    const handleclick = () => {
        console.log(selector);
        // router.push('/about')
    }
    const handleChange = date => {
      setDate(date);
    };
return <Layout>
  <Title>
    <h1>My page</h1>

    <div style={{ marginTop: 20 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
    </Title>
  </Layout>
    }
export default Index;