import FilmRelease from './filmRelease'

const FilmReleaseList = ({filmReleases}) => {

    const filmReleaseNodes = filmReleases.map(filmRelease => {
        return(
            <FilmRelease key={filmRelease.id} url={filmRelease.url} >{filmRelease.name}</FilmRelease> 
        )
    })

    return(
        <>
            <ul> {filmReleaseNodes} </ul>
        </>
    )
}

export default FilmReleaseList