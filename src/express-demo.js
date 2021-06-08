import React, {useState, useEffect} from 'react';

function ExpressDemo(props) {

    const [users, setUsers] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');



    const fetchUsers = async () => {
        // console.log('This function will run once when the component loads up and fetches the users')
        let res = await fetch('http://localhost:3000/api/v1/users')
        let data = await res.json()
        setUsers(data)
    };

    useEffect(() => {
        console.log('This code will only run once when the component loads up')
        // Write code that fetches all the users from the back end.
        fetchUsers()
    }, [])


    const createUser = async () => {
        let res = await fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName: firstName, lastName: lastName})
        })
        fetchUsers()
        setFirstName('')
        setLastName('')

    };

    // react function within a function

    const deleteUser = async (user) => {
        await fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
            method: 'DELETE'
        })
        fetchUsers()

    };

    return (
        <div>
            <h1>List of users in the application</h1>

            <input type="text" placeholder={'First Name'} className={'border mr-2'} value={firstName} onChange={(event) => setFirstName(event.currentTarget.value)} />
            <input type="text" placeholder={'Last Name'} className={'border mr-2'} value={lastName} onChange={(event) => setLastName(event.currentTarget.value)}/>

            <h2>The value of the First Name state variable is: {firstName}</h2>

            <button className={'bg-blue-500 text-white p-1 rounded'} onClick={createUser}>Create User</button>
            <br/>
            <br/>
            <ul>
                {users && users.map((user) => {
                    return <li key={user.id}>
                        {user.firstName} {user.lastName}
                         <button className={'ml-5 bg-red-500 text-white p-1 rounded'} onClick={() => deleteUser(user)}>Delete</button>
                    </li>
                })}
            </ul>

        </div>
    );
}

export default ExpressDemo;
