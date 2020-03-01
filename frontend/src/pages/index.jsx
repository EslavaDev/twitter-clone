import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { getSearch } from '../store/layout/selectors'
import { Button } from 'semantic-ui-react'

const Index = () => {
  const [date, setDate] = useState();
    const router = useRouter()
    const selector = useSelector(getSearch)
    const handleclick = () => {
      router.pathname
        console.log(router.pathname, router.route);
        console.log(router.asPath);
        router.push('/home')
    }
return(
  <Button onClick={handleclick}>Continuar</Button>
)
    }
export default Index;