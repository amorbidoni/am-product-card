# am-prduct-card

Este es un paquete de pruebas de despliegue en NPM

### Andres Morbidoni

## Ejemplo

```
  import { ProductCard, ProductImage, ProductTitle, ProductButtons} from -am-product-card;
```

```
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
```