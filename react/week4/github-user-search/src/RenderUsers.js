import React, { useContext } from 'react';
import { DataContext } from './FetchUsers';

function RenderUsers() {
    const { users } = useContext(DataContext);

    return (
        <ul>
            {users.map(item => (
                <li key={item.id}>{item.login}</li>
            ))}
        </ul>
    )
}

export default RenderUsers;
