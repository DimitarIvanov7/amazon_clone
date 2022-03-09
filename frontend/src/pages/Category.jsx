import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import GetCategoryData from '../hooks-functions/GetCategoryData'
import SpecificItem from '../components/SpecificItem'


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-bottom: 5rem;
    width: 100%;
    background-color: white;
`

const FiltersContainer = styled.div`
    grid-column: 1/1;
    
`
const ResultsContainer = styled.div`
    grid-column: 2/-1;
    
`

const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: .5rem;
    margin-right: 2rem;

`



function Category() {
    const { name } = useParams();
    
    const [category, setCategory] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const category = await GetCategoryData(name)

        console.log(category);
        setCategory(category)
    }



  return (
      <Container>
          <FiltersContainer>

          </FiltersContainer>
          <ResultsContainer>
              <h2>Results</h2>
              <ProductsContainer>
                  {category && category.map(product => 
                      
                      <SpecificItem item={product.Data} type={ "search"}/>
                        
                    )}
              </ProductsContainer>
          </ResultsContainer>
    </Container>
  )
}

export default Category