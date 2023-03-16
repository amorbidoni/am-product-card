import * as React from 'react';
import  renderer  from 'react-test-renderer';
// import * as ReactDOM from 'react-dom';
import { ProductTitle, ProductCard } from "../../src/components";
import { product1 } from '../data/products';

describe('ProductCard', () => {
    test('Debe mostrar el componente con el titulo personalizado', ()=>{
        const wrapper = renderer.create(
            <ProductTitle title='custom product' className='custom-classw'/>
        )
        expect (wrapper.toJSON()).toMatchSnapshot()
    });

    test('debe mostrar el componente con el nombre del producto', ()=>{
       const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                    <ProductTitle/> 
                    )
                }
            </ProductCard>
       )
       expect (wrapper.toJSON()).toMatchSnapshot()
    })
});
