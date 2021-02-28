import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
import { Container, Form, Button, Navbar, FormControl, Image, Nav, NavDropdown, Card, Row, Col } from 'react-bootstrap'
import firebase from 'firebase/app'

class Matching extends React.Component {

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
            <Row>
                <Col sm="3" className="mg-0">
                    <Card body className="">
                        Filter
            </Card>
                </Col>
                <Col>
                    <Card body className="">
                        Offers
                        {
                            this.state.offers
                                .map(offer => {
                                    return (
                                        <Card>
                                            Offer {offer.description}
                                        </Card>
                                    )
                                })
                        }
                    </Card>
                </Col>
            </Row>
        )
    }
};

export default Matching;
