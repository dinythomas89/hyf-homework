import React, { useContext } from 'react';
import { DataContext } from './Users';

function RenderUsers() {
    const { users } = useContext(DataContext);

    return (
        <ul>
            {users.length === 0 ?
                <h2>No users</h2> :
                (
                    users.map(item => (
                        <li key={item.id}>{item.login}</li>
                    ))
                )
            }

        </ul>
    )
}

export default RenderUsers;
