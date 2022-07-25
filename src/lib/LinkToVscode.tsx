import React, { useEffect, useState } from 'react'

import process from "process";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function isDev(): boolean {
    return development;
}

type Props = { children?: React.ReactNode }


export const LinkToVscode: React.FC<Props> = isDev() ? ({ children }) => {
    const fileName = (children as any)?._source?.fileName

    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const listen = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setVisible((state) => !state)
            }
        }
        document.addEventListener('keydown', listen)
        return () => document.removeEventListener('keydown', listen)
    }, [setVisible])

    const showLink = visible && fileName

    return (
        <>
            {showLink && <a href={'vscode://file' + fileName} > {fileName} </a>}
            {children}
        </>
    )
} : React.Fragment
