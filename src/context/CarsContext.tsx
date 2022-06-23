import { createContext, ReactNode, useEffect, useState } from "react";
import { Car } from "../types/globalTypes";

type ProviderProps = {
    children:ReactNode
}

type Cars = {
    cars:Array<Car>
}

export const CarsContext = createContext({} as Cars)

export default function CarsProvider({children}:ProviderProps){
    const [cars,setCars] = useState<Array<Car>>([])

    useEffect(()=>{
        const getData = async () => {
            let list = [] as Array<Car>
        
            if(localStorage.getItem('cars')){
                list = JSON.parse(localStorage.getItem('cars') as string)
            }

            if(!localStorage.getItem('cars')){
                const res = await fetch('cars.json')
                const data = await res.json()
                list = data.cars
                localStorage.setItem('cars',JSON.stringify(list))
                
            }

            setCars(list)
        }
        getData()
    },[])



    return(
        <CarsContext.Provider value={{cars}}>
            {children}
        </CarsContext.Provider>
    )
}