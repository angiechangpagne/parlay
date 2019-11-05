/**
 * ************************************
 *
 * @module  actions.js
 * @author  ANGEN
 * @date
 * @description Action Creators
 *
 * ************************************
 */


 import axios from 'axios';
 import * as types from '../constants/actionTypes';

 //actions send the actions to the reducers to have a single stream of truth

 //chage the betting quantity(initialAmount) because they are afraid
 export const changeAmount = data => ({
     type: types.CHANGE_AMOUNT,
     payload: data,
 });

 //might change payload: must include initial amount
 //create user with initial amount and add to the database
 export const createUser=id=> ({
     type:types.CREATE_USER,
     payload: id, //from mongo database?  _id
 });

 //player wimps out at challenge and deletes themself from society
 //withdraw player from database, game will look for another player from semi-random algorithm
 //the random generator looks for all indexes divisible by both fizz and buzz 
 export const withdrawGame=id=> (dispatch,getState) =>{
     if(getState().parlay.playerList[id]>0) //check over this line
     {
         dispatch({type: types.WITHDRAW_GAME, payload: id});
     }
 };

//game id, different schema
 export const generateGame =event =>(dispatch,getState) => {
     event.preventDefault();
     const game=getState().parlay.generateGame;

     if(game){
         dispatch({
             type:types.GENERATE_GAME,
             payload: game,
         });
     }
 };

 //sync players to the database
 export const syncPlayers= () => (dispatch,getState) => {
    axios.put('/parlay',getState().parlay.playerList)
        .then(({ status }) => {
            if (status==200) dispatch({ type:types.SYNC_MARKETS });
        })
        .catch(console.error);
 };


 //load players but also add loadGame?
 export const loadGame = () =>(dispatch) =>{
     axios.get('/parlay')
     .then(({ data }) =>{
         dispatch({
             type: types.LOAD_GAME,
             payload: data,
         });
     })
     .catch(console.error);
 }