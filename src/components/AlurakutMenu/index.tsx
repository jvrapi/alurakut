import React from 'react'
import { BASE_URL, v } from '../../assests/global'
import { useUser } from '../../hooks/useUser'
import AlurakutMenuProfileSidebar from '../AlurakutMenuProfileSidebar'
import Link from '../Link'
import { Container, Logo } from './styles'
const menuItens = [
  { name: 'Inicio', slug: '/' },
  { name: 'Amigos', slug: '/amigos' },
  { name: 'Comunidades', slug: '/comunidades' }
]
const AlurakutMenu: React.FC = () => {
  const [isMenuOpen, setMenuState] = React.useState(false)
  const { gitHubUser } = useUser()
  return (
    <Container isMenuOpen={isMenuOpen}>
      <div className="container">
        <Logo src={`${BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {menuItens.map(menuItem => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={'/logout'}>Sair</a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && (
            <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={gitHubUser} />
    </Container>
  )
}

export default AlurakutMenu
