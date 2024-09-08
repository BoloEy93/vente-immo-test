const Search = () => {
    return (
        <header>
            <h2 className="header__title">Cherche, Explore et Achetes !</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Entrer la Ville, le Quartier, ou les Coordonnées"
            />
        </header>
    );
}

export default Search;
