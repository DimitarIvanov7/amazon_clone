import React from 'react'
import { useState, useEffect, useRef } from 'react';
import HomepageSlickSlider from './HomepageSlickSlider';
import SpecificItem from './SpecificItem';
import styled from 'styled-components'


const CategoryContainer = styled.div`
    width: 95vw;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    grid-column: 1/2;
    grid-row: 3/-1;
    z-index: 4;
`
const Category = styled.div`
    width: 23%;
    min-width:16rem;
    height: 25rem;
    background-color: white;
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
    }
`

const ProductContainer = styled.img`
    max-width: 80%;
    max-height: 80%;
    margin: 0 auto;
    object-fit: scale-down;
    cursor: pointer;
`

const SpecificItemsContainer = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    width: 95%;
    gap: 1rem;
`

function Categories({ products }) {
    


  return (
    <CategoryContainer id="Categories-and-products">
        {products.map(productArr =>
        <Category key={productArr[0].Id}>
            <h2>{productArr[0].Data.categories[0].name}</h2>
                <ProductContainer src={productArr[0].Data.main_image.link}/>
        </Category>
        )}

        
        <HomepageSlickSlider title={"Additional products to explore"} itemsShow={8} products={products[0]} />
    
        <HomepageSlickSlider title={"Related to items you've viewed"} itemsShow={8} products={products[3]} />
    

    
        <SpecificItemsContainer>
            <SpecificItem item={products[2][0].Data} />
        
            <SpecificItem message={"Top Sellers in Baby Products for you"} item={products[4][0].Data} />
        
            <SpecificItem item={products[5][0].Data} />

            <SpecificItem item={products[7][0].Data} />

        </SpecificItemsContainer>
    

    
        <HomepageSlickSlider title={"Inspired by your browsing history"} itemsShow={8} products={products[6]} />
    
    

    
        <HomepageSlickSlider title={"Check out supplies for your pet"} itemsShow={6} products={products.length > 0 && products[5]} />
    

        
            <SpecificItemsContainer>
                <SpecificItem item={products[3][1].Data} />
            
                <SpecificItem message={"Top Sellers in Software for you"} item={products[6][1].Data} />
            
                <SpecificItem item={products[5][4].Data} />

                <SpecificItem message={"Amazon bestseller book"} item={products[7][5].Data} />

            </SpecificItemsContainer>
        

        
            <HomepageSlickSlider title={"Related to items you viewed"} itemsShow={10} products={products.length > 0 && products[6]} type={ true}/>
        

    </CategoryContainer>
  )
}

export default Categories