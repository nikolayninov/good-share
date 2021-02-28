import React from 'react';
import firebase from 'firebase/app'

class Db extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            offers: []
        }
    }

    componentDidMount() {
        const usersRef = firebase.database().ref('users')
        usersRef.on('value', (snapshot) => {
            let users = snapshot.val()
            let newState = [];
            for (let user in users) {
                newState.push({
                    uid: user,
                    name: users[user].name,
                    email: users[user].email
                })
            }
            this.setState({
                users: newState
            })
        })

        const offersRef = firebase.database().ref('offers')
        offersRef.on('value', (snapshot) => {
            let offers = snapshot.val()
            let newState = [];
            for (let offer in offers) {
                newState.push({
                    uid: offer,
                    description: offers[offer].description,
                    price: offers[offer].price
                })
            }
            this.setState({
                offers: newState
            })
        })

    }
    render() {
        return (
            <div>
                {
                    this.state.users.map((user) => {
                        return (
                            <div key={user.uid}>
                                <div >
                                    Name: {user.name}
                                </div>
                                <div>
                                    Email: {user.email}
                                </div>
                            </div>
                        )
                    })
                }
                {
                    this.state.offers.map((offer) => {
                        return (
                            <div key={offer}>
                                <div >
                                    Name: {offer.description}
                                </div>
                                <div>
                                    Email: {offer.price}
                                </div>
                            </div>
                        )
                    })

                }
            </div >
        )
    }
}

export default Db;