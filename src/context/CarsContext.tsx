import { createContext, ReactNode, useEffect, useState } from "react";
import { Car } from "../types/globalTypes";

type ProviderProps = {
    children:ReactNode
}

type Cars = {
    cars:Array<Car>
    deleteById:(id:number)=>void
    addCar:(car:Car)=>void
    getNewId:()=>number
    editCar:(car:Car)=>void
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

    const deleteById = (id:number) => {
        const newCars = cars.filter(car=>car.id!==id)
        setCars(newCars)
        localStorage.setItem('cars',JSON.stringify(newCars))
    }

    const addCar = (car:Car)=>{            
        setCars([...cars,car])
        localStorage.setItem('cars',JSON.stringify([...cars,car]))
    }

    const getNewId = ():number =>{
        const id = cars.sort((acc,cur)=>{ return acc.id-cur.id})[cars.length-1].id+1
        return id
    }

    const editCar = (car:Car)=>{
        const newCars = cars.map(c=>{
            if(c.id===car.id)
                return car
            return c
        })
        setCars(newCars)
        localStorage.setItem('cars',JSON.stringify(newCars))
    }

    return(
        <CarsContext.Provider value={{cars,deleteById,addCar,getNewId,editCar}}>
            {children}
        </CarsContext.Provider>
    )
}