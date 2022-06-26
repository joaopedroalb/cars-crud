import React, { useContext, useEffect, useState } from 'react'
import CardCar from '../components/CardCar';
import { CarsContext } from '../context/CarsContext';
import { CardContainer, HomeBG } from '../styles/homeStyle';

export default function Home() {
  const {cars} = useContext(CarsContext)

  return (
    <HomeBG>
        <CardContainer>
          {
            (cars&&cars.length>0)&&cars.map(car=>(
              <CardCar key={car.id} car={car}/>
            ))
          }
        </CardContainer>
    </HomeBG>
  )
}
