import React, { useState, useEffect, createContext } from 'react';
import SearchInput from './SearchInput';

export const DataContext = createContext('');

function FetchUsers() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchGithubApi = async (query) => {
        const API_URL = `https://api.github.com/search/users?q=${query}`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw Error(message);
            }
            const data = await response.json();
            setIsLoaded(true);
            setUsers(data.items);
        }
        catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    }

    useEffect(() => {
        fetchGithubApi();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <DataContext.Provider value={{ users, fetchGithubApi }}>
                <SearchInput />
            </DataContext.Provider>
        );
    }
}

export default FetchUsers;