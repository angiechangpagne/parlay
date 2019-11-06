/**
 * ************************************
 *
 * @module  UserCreator
 * @author ANGEN
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */
 import React, {useState,useEffect } from 'react';
 import { Link, withRouter } from 'react-router-dom';



 //require past history nodes
 const userData=requires(''); //json data based on id?
 
//hook for handling inputs
const useInput=init => {
    const [value,setValue]=useState(init);
    const onChange= e => {
        setValue(e.target.value);
    }
    return [value,onChange];
}

// const UserCreator = props => {
//     const []
// }


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