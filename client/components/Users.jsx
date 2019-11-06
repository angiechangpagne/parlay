import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserDisplay from './UserDisplay';



class Users extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[], 
            
        }
         //bind important functions
         this.openModal=this.openModal.bind(this);
         this.closeModal=ths.closeModal.bind(this);
    };


    componentDidMount(){
        fetch('/api/') //from api from database
        .then(res => res.json())
        .then((users)=>{
            if(!Array.isArray(users)) users=[];
            return this.setState({
                users,
                fetchedChars:true
            });
        })
        .catch(err => console.log('Users.componentDidMount: get users: ERROR: ',err));
    }
   



openModal(tyle,position,id){
    this.setState({
        modalState:{
            ...this.state.modalState,
            open:true,
            type,
            position,
            id
        }
    })
}

closeModal(){
    this.setState({
        modalState:{
            ...this.state.modalState,
            open:false
        }
    })
}

render(){
    if(!this.state.fetchedChars) return (
        <div> 
            <h1> Loding data, please wait ...</h1>
        </div>
    );
    const { users } =this.state;
    if(!users) return null;

    if(!users.length) return (
        <div> No users found</div>
    );

    const charElems=characters.map((char,i) => {
        return (
            <UserDisplay 
                key={i}
                name={name}
                openModal={this.openModal}
            />
        );
    });

    return (
        <section className="mainSection">
            <header className="pageHeader">
                <h2> Parlay </h2>
                <Link to={`/create`}>
                    <button 
                    type="button"
                    className="btnSeondary"
                    >
                        Create User
                    </button>
                </Link>
            </header>
            <div className="charContainer">
                {charElems}
            </div>
            {this.state.modalState.open && 
            <DetailsModal 
                type={thisstate.modelState.type}
                position={this.state.modalState.position}
                id={this.state.modalState.id}
                closeModal={this.closeModal}
                />
            }
        </section>
    );
 } 
}

export default Users;

