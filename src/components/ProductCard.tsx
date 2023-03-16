import React, { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import  styles  from "../styles/styles.module.css";
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProdutContextProps,  } from "../interfaces/interfaces";


export interface Props{
    product: Product;
    // children?: ReactElement | ReactElement [];
    children:(args:ProductCardHandlers)=> JSX.Element;
    className?:string;
    style?: CSSProperties;
    onChange?:(args:OnChangeArgs)=> void;
    value?: number;
    initialValues?:InitialValues;
}

export const ProductContext =  createContext<ProdutContextProps>({} as ProdutContextProps);
const { Provider } = ProductContext;


export function ProductCard({children, product, className, style, onChange, value, initialValues }: Props) {
    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues });
    return (
        <Provider value={{counter, increaseBy, product, maxCount }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached: isMaxCountReached,
                    product: product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}



export default ProductCard
