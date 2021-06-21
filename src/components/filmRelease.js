const FilmRelease = ({children, url}) => {
    return(
        <>
            <li><a href={url}>{children}</a></li>
        </>
    )
}

export default FilmRelease