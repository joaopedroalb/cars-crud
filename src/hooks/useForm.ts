import { useState } from "react";

const useForm = (type?:any) =>{
    const[value,setValue] = useState('')
    const [error,setError] = useState<string|null>(null)
    
    const types:any = {
        email:{
            regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Preencha um email válido'
        },
        year:{
            regex: /^(19|20)\d{2}$/,
            message:'Preencha um ano válido'
        }
    }

    function validate(value:any){
        console.log(!type)
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