import React, { useState } from 'react'
import InputForms from '../components/Forms/InputForms'
import useForm from '../hooks/useForm'
import { RowContent } from '../styles/components'
import { Car } from '../types/globalTypes'


export default function CreateCar() {
  const modelo = useForm('text')
  const anoModelo = useForm('year')
  const placa = useForm()
  const chassi = useForm()
  const renavam = useForm()
  const anoFabricacao = useForm('year')
  const cor = useForm()
  const uf = useForm()
  const pathImg = useForm()

  return (
    <>
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

    </>
  )
}
