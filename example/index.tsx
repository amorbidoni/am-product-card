import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id:'1',
  title:'My Product!'
}
const App = () => {
  return (
    <>
      <div>
        <ProductCard 
          product={ product }  
          initialValues={{count:4, maxCount:10}}>
          {
            ({  count,
              isMaxCountReached,
              product,
              increaseBy,
              reset }) => (
                <>
                      <ProductImage/>
                      <ProductTitle />
                      <ProductButtons/>
                  </>
              )
            }
        </ProductCard>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
