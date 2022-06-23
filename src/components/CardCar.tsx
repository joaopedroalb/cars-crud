import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Card } from "../styles/components"
import { Car } from "../types/globalTypes"

type CardProps = {
  car:Car
}

const DEFAULT_IMAGE = "https://cdn.discordapp.com/attachments/469630958811742212/989356191987671040/unknown.png"

export default function CardCar({car}:CardProps) {
  const {isDark} = useContext(ThemeContext)
  const [img,setImg] = useState(car.path_img)

  const onError = () => setImg(DEFAULT_IMAGE);

  return (
    <Card isDark={isDark}>
      <img src={img ? img : DEFAULT_IMAGE} onError={onError}/>
      <div className="cardInfo">
        <header className="header">
          <h1>{car.ano_modelo}/{car.ano_fabricacao}</h1>
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
