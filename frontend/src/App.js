import styled from "styled-components";
import { useState, useEffect, useRef } from 'react'
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";


const MainContainer = styled.div`  
`
function App() {

  const [categories, setCategories] = useState([])

  const [products, setProducts] = useState([])

  useEffect(() => {
      getProductData()
      
  }, [])


  const getProductData = async () => {
      const req = await fetch('http://localhost:5000/get-products');
      const res = await req.json()

      const uniqueCategories = res.map(item => item.Data.categories[0].name)
          .filter((item, i, ar) => ar.indexOf(item) === i)
          .sort()
      
      setCategories(uniqueCategories)

      const categoriesObj = uniqueCategories.map(categorie => {
          return res.filter(product => product.Data.categories[0].name===categorie)
      })
      
      setProducts(categoriesObj)
  }


  return (
    <>
      <BrowserRouter>
        <MainContainer id='main-container'>
            {categories.length !== 0 &&
            <Header categories={categories} />
          }
          {products.length > 0 &&
              <>
                <Routes>
                  <Route path='/' element={<Home products={products} />} />
                  <Route path='/product/:id' element={<Product />} />
                
                </Routes>
                <Footer />
            </>
          }
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
