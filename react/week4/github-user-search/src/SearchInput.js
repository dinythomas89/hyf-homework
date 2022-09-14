import React, { useContext } from 'react';
import { DataContext } from './Users';
import RenderUsers from './RenderUsers';

function SearchInput() {
    const { fetchGithubApi } = useContext(DataContext);

    return (
        <div>
            <input type="text" onChange={(e) => fetchGithubApi(e.target.value)} />
            <RenderUsers />
        </div>
    )
}

export default SearchInput;