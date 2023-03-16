import * as React from 'react';
import  renderer, { act }  from 'react-test-renderer';

import {  ProductCard } from "../../src/components";
import { product1 } from '../data/products';

describe('PoductCard', () => {

    test('debe mostrar el comopnente correctamente', ()=>{

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ()=>(
                        <h1>Children</h1>
                    )
                }
            </ProductCard>
        )
       expect (wrapper.toJSON()).toMatchSnapshot()
    })

    test('Debe incrementar el contador', ()=>{
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    ({count, increaseBy})=>(
                        <>
                            <h1>Product card</h1>
                            <p>{count}</p>
                            <button onClick={()=> increaseBy(1)}>1</button>
                        </>
                    )
                }
            </ProductCard>
        );
        
        let tree = wrapper.toJSON();
        
        expect(tree).toMatchSnapshot();

        act(()=>{
            (tree as any).children[2].props.onClick(); 
            tree = wrapper.toJSON();
            expect ((tree as any).children[2].children[0]).toBe('1')  
        })



    })
});
