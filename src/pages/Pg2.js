import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Comp1 from '../components/Comp1'
const autoBind = require('react-auto-bind')

class Pg2 extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)
        console.log('# Constructor - Pg2')
    }
    onNameChange(e) {
        this.setState({ inputName: e.target.value })
    }
    componentDidMount() {
        console.log('# DidMount - Pg2')
        console.log('start timeout for 10s and fetch async api')
        setTimeout(()=>{
            console.log('tick timeout')
            this.props.addClient({name: 'zzzzzzz'})
        }, 10000)

        const URL_TO_FETCH = 'http://jsonplaceholder.typicode.com/posts';
        fetch(URL_TO_FETCH, {
          method: 'get' // opcional 
        })
        .then((response) => { 
            response.json().then(json =>{
                json.map((item, indx)=>{
                  return  this.props.addClient({name: item.title})
                })
                
            })
          
          this.props.addClient({name: 'xxxxxxxxx'})
        })
    }

    componentWillUnmount() {
        console.log('# WillUnmount - Pg2')
    }
    onAdd(name){
        console.log('name', name)
        let client = {name: name}
        this.props.addClient(client)
    }
    render() {
        return (
            <Comp1 
            clients={this.props.clients.clients} 
            onAdd={this.onAdd}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addClient: (client) => {
            dispatch({
                type: "AddClient",
                payload: client
            })
        }
    }
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Pg2))