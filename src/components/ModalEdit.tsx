import { ReactNode } from 'react'
import { ModalBg } from '../styles/components'

type ModalProps = {
    active: boolean
    onClose:any
    children:ReactNode
}

export default function ModalEdit({active,onClose,children}:ModalProps) {

    if(!active) return null

    return (
        <ModalBg onClick={onClose}>
            {children}
        </ModalBg>
    )
}
