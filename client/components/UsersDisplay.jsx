/**
 * ************************************
 *
 * @module  UsersDisplay
 * @author ANGEN
 * @date
 * @description presentation component that renders n User Display components
 *
 * ************************************
 */

 import React from 'react';
 import UserDispaly from './UserDisplay';

 //const winningsPercentage=

const userCreator=(user,idx,props) =>(
    <UserDisplay 
    {..user}
    key={idx}
    index={idx}
    createUser={() => props.createUser(idx)} //create
    withdrawGame={() => props.withdrawGame(idx)} //delete
    />
);


const UsersDisplay=props=>(
    <div className="displayBox">
        <h4> Users</h4>
        <div className="allUsers">
            {props.userList.map((user,idx) => userCreator(user,idx,props))}
        </div>
    </div>
);


export default UsersDisplay;