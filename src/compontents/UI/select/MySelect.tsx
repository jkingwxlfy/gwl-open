'use client'
import type { IService } from '@/models/IService'
import Select from 'react-select'
import type { SingleValue } from 'react-select'
import { useEffect, useState } from 'react'

import './myselect.scss'

interface IMySelectProps {
    setState: (value: SingleValue<IOptionsSelect>) => void
    defaultValue: string
    options: IService[]
    state: SingleValue<IOptionsSelect>
}

export interface IOptionsSelect {
    value: string
    label: string
}

const customStyles = {
    container: (baseStyles: any) => ({
        ...baseStyles,
        width: '100%',
    }),
    control: (baseStyles: any, state: any) => ({
        ...baseStyles,
        width: '100%',
        border: state.isFocused ? '1px solid #f5f5f5' : '1px solid f5f5f5',
    }),
    indicatorSeparator: (baseStyles: any, state: any) => ({
        ...baseStyles,
        display: 'none',
    }),
    option: (baseStyles: any, state: any) => ({
        ...baseStyles,
        backgroundColor: state.isSelected ? '#53C640' : '#fff',
        color: 'rgb(35, 35, 35)',
        fontSize: '16px',
        minHeight: '45px',
        display: 'flex',
        alignItems: 'center',
        padding: '12px 14px',
    }),
    menu: (baseStyles: any) => ({
        ...baseStyles,
        width: '100%',
        marginTop: 0,
        borderRadius: 0,
    }),
    menuList: (baseStyles: any) => ({
        ...baseStyles,
        padding: 0,
    }),
}

const MySelect: React.FC<IMySelectProps> = ({
    setState,
    state,
    options,
    defaultValue,
    ...props
}) => {
    const [optionsSelect, setOptionsSelect] = useState<IOptionsSelect[]>([])
    const defaultOption = { value: 'default', label: defaultValue }

    useEffect(() => {
        setState(defaultOption)
    }, [])

    useEffect(() => {
        if (options.length) {
            setOptionsSelect(
                options.map(item => {
                    return { value: item.title, label: item.title }
                }),
            )
        }
    }, [options])

    return (
        <Select
            value={state}
            onChange={newValue => setState(newValue)}
            options={optionsSelect}
            styles={customStyles}
        />
    )
}
export default MySelect
