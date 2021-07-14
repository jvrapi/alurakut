import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useCommunity } from '../../hooks/useCommunity'

const initialValues = {
  title: '',
  image: '',
  link: ''
}

const CreateCommunityForm: React.FC = () => {
  const { updateCommunities } = useCommunity()
  const [values, setValues] = useState(initialValues)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    updateCommunities({
      id: new Date().toISOString(),
      name: values.title,
      image: values.image,
      link: values.link
    })
    setValues(initialValues)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={values.title}
          onChange={handleChange}
          placeholder="Qual vai ser o nome da sua comunidade?"
          name="title"
          aria-label="title"
          type="text"
        />
      </div>
      <div>
        <input
          value={values.image}
          onChange={handleChange}
          placeholder="Coloque uma URL para usarmos de capa"
          name="image"
          aria-label="image"
          type="text"
        />
      </div>
      <div>
        <input
          value={values.link}
          onChange={handleChange}
          placeholder="Deseja colocar um link externo?"
          name="link"
          aria-label="link"
          type="text"
        />
      </div>
      <button>Criar comunidade</button>
    </form>
  )
}

export default CreateCommunityForm
