import { NavLink } from "react-router-dom"
import styles from './MenuLink.module.css'
import React from 'react'

// o componente MenuLink será responsável por construir os links do header. Ele receberá duas props: children = elemento-filho do MenuLink(nome da página); to = rota/caminho do link. 
// trocamos o useLocation() pelo NavLink, que desempenha uma mesma função, porém com maior facilidade. No atributo className, atribuimos uma arrow function, que recebe como propriedade isActive, que retorna true se o link estiver ativo e retorna false caso contrário. Usamos a template string para concatenar os estilos, atribuindo o styles.link para ambos os links, independente de ativo ou não. Porém, se isActive retorna como true, o estilo styles.link__destacado é aplicado (sublinhado), que indica que o link está ativo. Caso contrário, retorna uma string vazia, não aplicando o estilo. 
export default function MenuLink({ children, to }) {
    return (
        <NavLink to={to} className={({ isActive }) =>
            `
            ${styles.link}
            ${isActive ? styles.link__destacado : ""}
            `}
            end
            >
            {children}
        </NavLink>
    )
}

