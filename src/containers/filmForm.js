import {useState} from 'react'

const FilmForm = ({onFilmSubmit}) => {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const nameToSubmit = name.trim()
        const urlToSubmit = url.trim()
        if (!nameToSubmit || !urlToSubmit){
            return
        }

        onFilmSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        })
        

    setName('')
    setUrl('')
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type='text' placeholder='Film Title' value={name} onChange={handleNameChange}></input>
            <input type='text' placeholder='Url' value={url} onChange={handleUrlChange}></input>
            <input type='submit' value='Post'></input>
        </form>
    )
}

export default FilmForm