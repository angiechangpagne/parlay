/**
 * ************************************
 *
 * @module  GameGenerator
 * @author      ANGEN
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

 import React from 'react';

 const GameGenerator =({
     newGame,
     newQuestion, 
     updatePlayers,
     updateStatus,
 }) =>(
     <div>
         <form onSubmit={generateGame}>
             <input 
                id="new-game"
                value={newQuestion}
                onChange={e => newQuestion(e.target.value)}
             />
             <button className="primary" type="submit"> Generate Game</button>
         </form>
     </div>
 );

 export default GameGenerator;