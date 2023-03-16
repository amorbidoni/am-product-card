import * as React from 'react';
import  renderer  from 'react-test-renderer';
// import * as ReactDOM from 'react-dom';
import { ProductImage, ProductCard } from "../../src/components";
import { product2 } from '../data/products';

describe('PoductImage', () => {
    test('Debe mostrar el componente con la imagen personalizada', ()=>{
        const wrapper = renderer.create(
            <ProductImage className='custom-classw'/>
        )
        expect (wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe mostrar el componente con la imagen del producto', ()=>{
       const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage/> 
                    )
                }
            </ProductCard>
       )
       expect ( wrapper.toJSON() ).toMatchSnapshot();
    });
});
