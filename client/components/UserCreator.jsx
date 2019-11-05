/**
 * ************************************
 *
 * @module  UserCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */


 import React from 'react';


 const UserCreator=({
     newName,
     changeAmount,

 }) => (
    <div>
        <form onSubmit={createUser}>
            <input 
            id="new-user"
            value={newName}
            onChange={e => changeAmount(e.target.value)}
            />
            <button className="primary" type="submit"> Create User</button>
        </form>

    </div>
 );


 export default UserCreator;