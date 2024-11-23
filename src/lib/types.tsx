export type RoutesType = {
    path?: string,
    element?: JSX.Element,
    children?: RoutesType[]
}

export type NavLinkType = {
    desc: string,
    path: string
}