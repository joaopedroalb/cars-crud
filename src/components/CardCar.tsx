import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Card } from "../styles/components"
import { Car } from "../types/globalTypes"
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import { CarsContext } from "../context/CarsContext"

type CardProps = {
  car:Car
}

const DEFAULT_IMAGE = "https://cdn.discordapp.com/attachments/469630958811742212/989356191987671040/unknown.png"

export default function CardCar({car}:CardProps) {
  const {isDark} = useContext(ThemeContext)
  const {deleteById} = useContext(CarsContext)

  const [img,setImg] = useState(car.path_img)
  const onError = () => setImg(DEFAULT_IMAGE);
  

  return (
    <Card isDark={isDark}>
      <img src={img ? img : DEFAULT_IMAGE} onError={onError} className="notSelected"/>
      <div className="cardInfo">
        <p className="iconsSection">
            <AiFillDelete size={20} className="icon" color="var(--red)" onClick={()=>deleteById(car.id)}/>
            <AiFillEdit size={20} className="icon"/>
        </p>
        <header className="header">
          <h1>{car.modelo} {car.ano_modelo}/{car.ano_fabricacao}</h1>
          <p>{car.placa}</p>
          <p>{car.chassi}</p>
        </header>
        <div className="rowText">
          <p className="columnSection">
            <div>
              Ano de fabricação: {car.ano_fabricacao}
            </div>
            <div>
              Renavam: {car.renavam}
            </div>
          </p>
          <p className="columnSection">
            <div>
              UF: {car.uf}
            </div>
            <div>
              Cor: {car.cor}
            </div>
          </p>
        </div>
      </div>
    </Card>
  )
}
