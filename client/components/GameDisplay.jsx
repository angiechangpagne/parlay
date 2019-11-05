/**
 * ************************************
 *
 * @module  GameDisplay
 * @author ANGEN
 * @date
 * @description presentation component that renders a game instance
 * ************************************
 */

 import React from 'react';
 //should not just be labeled text, but an interactive div

 const GameDisplay=({
     index,//game id
    users,//array of 2 users
    question,

 })=>(
     <div className="gameBox">
         <UserDisplay label="User 1" text={users[0]}></UserDisplay>
         <UserDisplay label="User 2" text={users[1]}></UserDisplay>
        <LabeledText label="winner" text={  //function call to run during game
        }></LabeledText>
     </div>
 )


 export default GameDisplay;