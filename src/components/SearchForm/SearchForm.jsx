import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
            // Notiflix.Notify.info('Please enter something!');
            return;
        }
        onSubmit(searchQuery);
        setSearchQuery('')
    };

        return (            
                <form onSubmit={handleSubmit} >
                    <button type="submit">
                    {/* <ImSearch/> */}
                    <span>Search</span>
                    </button>
    
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                </form>
            )
};

export default SearchForm;