import React, { useState } from 'react'
import UserTable from './components/UserTable'
import { v4 as uuidv4 } from 'uuid'
import UserAddForm from './components/UserAddForm';
import EditUserForm from './components/EditUserForm';

const App = () => {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' }
  ];

  //state
  const [users, setUsers] = useState(usersData);


  //Agregar usurio
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  //editar usuario
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = (user) =>{
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username

    })
  }



  const updateUser = (id, updateUser) => {
    setEditing(true)
    setUsers(users.map(user => user.id === id ? updateUser : user))
  }

  return (
    <div className="container">
      <h1>CRUD app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <EditUserForm currentUser={currentUser} updateUser = {updateUser}/>
            ) : (
              <UserAddForm addUser={addUser} />
            )
          }


        </div>
        <div className="flex-large">
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}
            setEditing={setEditing}
            />
        </div>
      </div>
    </div>
  );

}

export default App;
