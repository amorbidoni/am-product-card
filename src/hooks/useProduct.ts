import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";
interface useProductArgs{
    product:Product;
    onChange?:(arg:OnChangeArgs)=>void;
    value?: number;
    initialValues?:InitialValues;
}
export const useProduct = ({onChange, product, value = 0, initialValues }: useProductArgs)=>{
    
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false); 

    function increaseBy(value:number){ 
        let newValue = Math.max(counter + value, 0);

        if(initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        
        setCounter(newValue)
        onChange && onChange({product, count: newValue});
    }
    
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter( value );
    }, [value]);

    // useEffect(() => {
    //     isMounted.current = true;
    // }, []);
    const reset = ()=>{
        setCounter(initialValues?.count || value)
    }
    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        
        increaseBy,
        reset
    }
}