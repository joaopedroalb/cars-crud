import React, { useContext, useEffect, useState } from "react";
import { CarsContext } from "../context/CarsContext";

import {
  Button,
  EditBG,
  FormContainer,
  RowCenter,
  RowContent,
} from "../styles/components";
import { Car } from "../types/globalTypes";
import InputForms from "./Forms/InputForms";

type EditFormProps = {
  carSelected: Car;
  onClose: () => void;
};

const DEFAULT_IMAGE =
  "https://cdn.discordapp.com/attachments/469630958811742212/989356191987671040/unknown.png";

export default function EditForm({ carSelected, onClose }: EditFormProps) {
  const [editedCar, seteditedCar] = useState(carSelected);

  const { editCar } = useContext(CarsContext);

  const [img, setImg] = useState(carSelected.path_img);
  const onError = () => setImg(DEFAULT_IMAGE);
  const imageChange = () => {
    setImg(editedCar.path_img);
  };

  const stopProp = (event: any) => {
    event.stopPropagation();
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    editCar(editedCar);
    onClose();
  };

  return (
    <EditBG onClick={stopProp}>
      <form onSubmit={onSubmit}>
        <div className="row">
          <img
              src={img ? img : DEFAULT_IMAGE}
              onError={onError}
              className="notSelected imgCreate"
            />
          <div className="rightSide">
            <InputForms
              name="model"
              label="Modelo"
              value={editedCar.modelo}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, modelo: target.value });
              }}
              type="text"
              placeholder="Civic"
              width="45%"
              minWidth="180px"
            />

            <InputForms
              name="ano_modelo"
              label="Ano Modelo"
              value={editedCar.ano_modelo}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, ano_modelo: target.value });
              }}
              type="number"
              placeholder="2012"
              width="27.5%"
              minWidth={"105px"}
            />

            <InputForms
              name="ano_fabricacao"
              label="Ano Fabricação"
              value={editedCar.ano_fabricacao}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, ano_fabricacao: target.value });
              }}
              type="text"
              placeholder="2012"
              width="27.5%"
              minWidth={"105px"}
            />

            <InputForms
              name="chassi"
              label="Chassi"
              value={editedCar.chassi}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, chassi: target.value });
              }}
              type="text"
              placeholder="HE2IJX24060831"
              width="45%"
              minWidth="180px"
            />

            <InputForms
              name="renavam"
              label="Renavam"
              value={editedCar.renavam}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, renavam: target.value });
              }}
              type="number"
              placeholder="92364923674"
              width="55%"
              minWidth="185px"
            />
            <InputForms
              name="image"
              label="Image Url"
              value={editedCar.path_img}
              onBlur={imageChange}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, path_img: target.value });
              }}
              type="text"
              placeholder="https://www.google.com/img/logo_brands.png"
              width="45%"
              minWidth="125px"
            />

            <InputForms
              name="placa"
              label="Placa"
              value={editedCar.placa}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, placa: target.value });
              }}
              type="text"
              placeholder="HHH1234"
              width="20%"
              minWidth="85px"
            />

            <InputForms
              name="uf"
              label="UF"
              value={editedCar.uf}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, uf: target.value });
              }}
              type="text"
              placeholder="CE"
              width="10%"
              minWidth="75px"
            />

            <InputForms
              name="cor"
              label="Cor"
              value={editedCar.cor}
              onChange={({ target }: any) => {
                seteditedCar({ ...editedCar, cor: target.value });
              }}
              type="text"
              placeholder="Branca"
              width="20%"
              minWidth="80px"
            />
          </div>
        </div>
        <RowCenter>
          <Button>Salvar</Button>
        </RowCenter>
      </form>
    </EditBG>
  );
}
