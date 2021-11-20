import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Pg2 from './Pg2'
const autoBind = require('react-auto-bind')

class Pg3 extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)
        console.log('# Constructor - Pg3')
    }

    componentWillMount() {
        console.log('# WillMount - Pg3')
    }
    componentDidMount() {
        console.log('# DidMount - Pg3')
    }

    componentWillUnmount() {
        console.log('# WillUnmount - Pg3')
    }
    render() {
        return (
            <div>
                <h1>Page3</h1>
                <Pg2 />
            </div>
        )
    }
}

export default withRouter(connect()(Pg3))
