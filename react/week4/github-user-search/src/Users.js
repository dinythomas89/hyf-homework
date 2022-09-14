import React, { useState, useEffect, createContext } from 'react';
import RenderUsers from './RenderUsers';
import SearchInput from './SearchInput';

export const DataContext = createContext('');

function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchGithubApi = async (query) => {
        const API_URL = `https://api.github.com/search/users?q=${query}`;

        try {
            setIsLoaded(false);
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

    function Loading() {
        return <div>Loading... </div>;
    }


    return (
        <DataContext.Provider value={{ users, fetchGithubApi, isLoaded }}>
            <SearchInput />
            {isLoaded ? <Loading /> : <RenderUsers />}
        </DataContext.Provider>
    );
}

export default Users;