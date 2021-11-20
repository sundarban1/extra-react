import React from 'react'
const autoBind = require('react-auto-bind')


class Comp1 extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)
        this.state = { inputName: '' }
        console.log('# Constructor - Comp1')
    }
    componentWillMount() {
        console.log('# WillMount - Comp1')
    }
    componentDidMount() {
        console.log('# DidMount - Comp1')
    }

    componentWillUnmount() {
        console.log('# WillUnmount - Comp1')
    }
    onNameChange(e) {
        this.setState({ inputName: e.target.value })
    }
    onAdd(e) {
        let name = this.state.inputName
        this.setState({ inputName: '' },
            () => {
                this.textInput.focus()
                if (this.props.onAdd)
                    this.props.onAdd(name)
            })
    }
    render() {
        let items = this.props.clients || []
        const clients = items.map((item, indx) => {
            return (<div key={`key_${indx}`}>name: {item.name}</div>)
        })
        return (
            <div>
                <h1>Page 2</h1>
                <div>
                    name:
                    <input type="text" ref={(input) => this.textInput = input} onChange={this.onNameChange} value={this.state.inputName} />
                    <button onClick={this.onAdd} >add</button>
                </div>

                {clients}
            </div>
        )
    }
}

export default Comp1