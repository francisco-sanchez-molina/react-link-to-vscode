export function getFilename(children?: React.ReactNode): string | undefined {
    if (!children) {
        return undefined
    }
    if (Array.isArray(children)) {
        return getFilename(children[0])
    }
    const fileName = (children as any)?._source?.fileName
    if (fileName) {
        return fileName
    }
    if (typeof children === 'object' && 'props' in children) {
        return getFilename(children.props.children)
    }

    return undefined
}