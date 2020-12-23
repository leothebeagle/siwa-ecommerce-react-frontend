import React from 'react';

class Filter extends React.Component {

    state = {
        filter: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("I am submitting")
        this.props.filterItems(this.state.filter)
        // invoke the function passed in by parent component
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <select name="filter" onChange={this.handleChange}>
                        <option value="reset"> reset filter</option>
                        <option value="greater"> greater than 50</option>
                        <option value="less"> less than 50</option>
                    </select>
                    <button type="submit">filter</button>
                </form>
            </div>
        )
    }
}

export default Filter;