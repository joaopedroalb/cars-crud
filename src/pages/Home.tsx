import React, { useEffect, useState } from 'react'
import CardCar from '../components/CardCar';
import { CardContainer, HomeBG } from '../styles/homeStyle';
import { Car } from '../types/globalTypes';

export default function Home() {
  const [cars,setCars] = useState<Array<Car>|null>(null)
  useEffect(()=>{
    const getData = async () => {
      const res = await fetch('cars.json')
      const data = await res.json()
      setCars(data.cars)
    }
    getData()
  },[])

  return (
    <HomeBG>
        <CardContainer>
          {
            cars&&cars.map(car=>(
              <CardCar key={car.id} car={car}/>
            ))
          }
        </CardContainer>
    </HomeBG>
  )
}
