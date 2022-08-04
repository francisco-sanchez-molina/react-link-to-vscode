import React, { useEffect, useState } from 'react'
import { getFilename } from './getFilename';
import { isDev } from './isDev';

type Props = { children?: React.ReactNode }

export const LinkToVscode: React.FC<Props> = isDev() ? ({ children }) => {
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

    const fileName = getFilename(children)
    const showLink = visible && fileName

    return (
        <>
            {showLink && <a href={'vscode://file' + fileName} > {fileName} </a>}
            {children}
        </>
    )
} : React.Fragment
