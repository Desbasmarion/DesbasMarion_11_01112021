import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <Link to='/'>
                    <img src='../img/kasa.svg' alt='Logo' />
                </Link>
            </div>
        )
    }
}
