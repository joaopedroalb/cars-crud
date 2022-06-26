import { useState } from "react";

const useForm = (type?:any) =>{
    const[value,setValue] = useState('')
    const [error,setError] = useState<string|null>(null)
    
    const types:any = {
        placa:{
            regex: /^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$/,
            message: 'Preencha uma placa válida'
        },
        year:{
            regex: /^(19|20)\d{2}$/,
            message:'Preencha um ano válido'
        },
        renavam:{
            regex:/^[0-9]+$/,
            message:'Preencha um revanam válido'
        }
    }

    function validate(value:any){
        if(!type) return true 

        if(value.length === 0){
            setError('Preencha um valor.')
            return false
        }

        if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        }

        setError(null)
        return true
    }

    function onChange({target}:any){
        validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        validate:()=>validate(value),
        onBlur:()=>validate(value),
        error
    }
}

export default useForm