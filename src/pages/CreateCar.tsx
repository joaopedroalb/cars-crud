import React, { useContext, useState } from 'react'
import InputForms from '../components/Forms/InputForms'
import { CarsContext } from '../context/CarsContext'
import { ThemeContext } from '../context/ThemeContext'
import useForm from '../hooks/useForm'
import { Button, FormContainer, RowCenter, RowContent } from '../styles/components'
import { useNavigate } from 'react-router-dom'

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

  const {isDark} = useContext(ThemeContext)
  const {addCar} = useContext(CarsContext)

  const [loading,setLoading] = useState(false)

  const navigate = useNavigate();

  const imageChange = () =>{
    setImg(pathImg.value)
  }

  const validateData = () =>{
    if(modelo.value && anoModelo.value && placa.value && chassi.value && renavam.value && anoFabricacao.value && cor.value && uf.value)
      return true
    
    return false
  }

  const submitForm = (event:any) =>{
    event.preventDefault()
    setLoading(true)

    if(validateData()){
      addCar(
        modelo.value,
        anoModelo.value,
        placa.value,
        chassi.value,
        parseInt(renavam.value),
        anoFabricacao.value,
        cor.value,
        uf.value,
        img
      )
      navigate('/')

    }

    setLoading(false)
  }

  return (
    <>
      <RowCenter>
        <img src={img ? img : DEFAULT_IMAGE} onError={onError} className="notSelected imgCreate"/>
      </RowCenter>
      <FormContainer onSubmit={submitForm}>
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
              onBlur={imageChange}
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
              placeholder='HHH1234'
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
          <Button isDark={isDark} disabled={(loading||!validateData())}>Adicionar</Button>
        </RowCenter>
      </FormContainer>
    </>
  )
}
