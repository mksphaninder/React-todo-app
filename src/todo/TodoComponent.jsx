import React, { Component} from 'react';

class TodoComponent extends Component {

    render() {
        return(
            <div className="title">
                Editing the todo with id {this.props.match.params.id}
            </div>
        )
    }
}

export default TodoComponent;