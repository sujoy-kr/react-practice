export const Search = ({searchText, setSearchText}) => {
    return (
        <div className="search">
            <div>
                <img src="search.png" alt="search"/>
                <input type="text"
                       placeholder="Search through thousand of movies"
                       value={searchText}
                       onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
        </div>
    )
}