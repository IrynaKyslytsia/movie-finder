import { useState } from "react";
import Notiflix from 'notiflix';
import { ImSearch } from "react-icons/im";
import { Form, Button, Input } from "./SearchForm.styled";

const SearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
            Notiflix.Notify.info('Please enter something!');
            return;
        }
        onSubmit(searchQuery);
        setSearchQuery('')
    };

        return (            
                <Form onSubmit={handleSubmit} >
                    <Button type="submit">
                    <ImSearch width='18' height='18'/>
                    </Button>
    
                    <Input
                        type="text"
                        value={searchQuery}
                        onChange={handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                </Form>
            )
};

export default SearchForm;