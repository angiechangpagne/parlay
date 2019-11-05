/**
 * ************************************
 *
 * @module  UserDisplay
 * @author ANGEN
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

 import React from 'react';
 import LabeledText from './LabeledText';
 //iterativetext?

 const UserDisplay=({
     index,
     name,
     initialAmount,
     currentAmount,
     status,
     createUser,
     withdrawGame,
 }) => (
     <div className="userBox">
         <LabeledText label="User ID" text={index} />
         
     </div>
 )