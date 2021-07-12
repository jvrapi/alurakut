import React from 'react'
import AlurakutProfileSidebarMenuDefault from '../AlurakutProfileSidebarMenuDefault'

type AlurakutMenuProfileSidebarProps = {
  githubUser: string
}

const AlurakutMenuProfileSidebar: React.FC<AlurakutMenuProfileSidebarProps> = ({
  githubUser
}) => {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img
          src={`https://github.com/${githubUser}.png`}
          style={{ borderRadius: '8px' }}
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  )
}

export default AlurakutMenuProfileSidebar
