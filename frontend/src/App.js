import styled from "styled-components";
import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import GetAllProducstData from "./hooks-functions/GetAllProductsData";
import Category from "./pages/Category";
import Cart from "./pages/Cart";


const MainContainer = styled.div`  
`
function App() {

  const [categories, setCategories] = useState([])

  const [products, setProducts] = useState([])

  useEffect(() => {
      getProductData()
      
  }, [])

  const getProductData = async () => {

    const Data = await GetAllProducstData('get-products')

    setCategories(Data.categories);

    setProducts(Data.products)
    
  }

  return (
    <>
      <MainContainer id='main-container'>
          {categories.length !== 0 &&
          <Header categories={categories} />
        }
        {products.length > 0 &&
          <>
              <Routes>
                <Route path='/' element={<Home products={products} />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/category/:name' element={<Category />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
              <Footer />
          </>
        }
      </MainContainer>
    </>
  );
}

export default App;
