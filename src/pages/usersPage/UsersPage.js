import React from 'react';
import styles from './usersPage.module.css'
const UsersPage = ({users}) => {
    return (
        <div className={styles.users}>
            {
                users.map((user) => (
                    <div key={user.name} >
                        <h2>{user.name}</h2>
                        <h2>{user.age}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersPage;