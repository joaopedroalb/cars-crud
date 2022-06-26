import React, { useState } from 'react'
import InputForms from '../components/Forms/InputForms'
import useForm from '../hooks/useForm'
import { FormContainer, RowCenter, RowContent } from '../styles/components'
import { Car } from '../types/globalTypes'

const DEFAULT_IMAGE = "https://cdn.discordapp.com/attachments/469630958811742212/989356191987671040/unknown.png"


export default function CreateCar() {
  const modelo = useForm('text')
  const anoModelo = useForm('year')
  const placa = useForm('placa')
  const chassi = useForm('text')
  const renavam = useForm('renavam')
  const anoFabricacao = useForm('year')
  const cor = useForm('text')
  const uf = useForm('text')
  const pathImg = useForm()

  const [img,setImg] = useState(DEFAULT_IMAGE)
  const onError = () => setImg(DEFAULT_IMAGE);

  const ImageChange = () =>{
    setImg(pathImg.value)
  }

  return (
    <>
      <RowCenter>
        <img src={img ? img : DEFAULT_IMAGE} onError={onError} className="notSelected imgCreate"/>
      </RowCenter>
      <FormContainer>
        <RowContent>
          <InputForms
              name='model'
              label='Modelo'
              value={modelo.value}
              onChange={modelo.onChange}
              type='text'
              error={modelo.error}
              placeholder='Civic'
              width='50%'
            />

            <InputForms
              name='ano_modelo'
              label='Ano Modelo'
              value={anoModelo.value}
              onChange={anoModelo.onChange}
              type='number'
              error={anoModelo.error}
              placeholder='2012'
              width='25%'
            />

            <InputForms
              name='ano_fabricacao'
              label='Ano Fabricação'
              value={anoFabricacao.value}
              onChange={anoFabricacao.onChange}
              type='text'
              error={anoFabricacao.error}
              placeholder='2012'
              width='25%'
            />
        </RowContent>

        <RowContent>
          <InputForms
              name='chassi'
              label='Chassi'
              value={chassi.value}
              onChange={chassi.onChange}
              type='text'
              error={chassi.error}
              placeholder='HE2IJX24060831'
              width='50%'
            />

            <InputForms
              name='renavam'
              label='Renavam'
              value={renavam.value}
              onChange={renavam.onChange}
              type='number'
              error={renavam.error}
              placeholder='92364923674'
              width='50%'
            />
        </RowContent>

        <RowContent>
          <InputForms
              name='image'
              label='Image Url'
              value={pathImg.value}
              onBlur={ImageChange}
              onChange={pathImg.onChange}
              type='text'
              error={pathImg.error}
              placeholder='https://www.google.com/img/logo_brands.png'
              width='50%'
            />

          <InputForms
              name='placa'
              label='Placa'
              value={placa.value}
              onChange={placa.onChange}
              type='text'
              error={placa.error}
              placeholder='HHH-1234'
              width='15%'
          />

          <InputForms
            name='uf'
            label='UF'
            value={uf.value}
            onChange={uf.onChange}
            type='text'
            error={uf.error}
            placeholder='CE'
            width='10%'
          />

          <InputForms
            name='cor'
            label='Cor'
            value={cor.value}
            onChange={cor.onChange}
            type='text'
            error={cor.error}
            placeholder='Branca'
            width='25%'
          />

        </RowContent>
        <RowCenter>
          <button>Adicionar</button>
        </RowCenter>
      </FormContainer>
    </>
  )
}
