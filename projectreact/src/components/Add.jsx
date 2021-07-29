
import React from 'react';

// function addToLocalStorage(addTodos) {
//     localStorage.setItem('addTodos', JSON.stringify(addTodos));
//     renderTodos(addTodos);
// }

class AddTodo extends React.Component {
    constructor() {
        super();

        this.state = {
            Id: "",
            Title: "",
            Status: "Pending"
        };
    }

    handleIdChange = (event) => {
        this.setState({
            Id : event.target.value
        });
    };

    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        });
    };

    handleStatusChange = (event) => {
        this.setState({
            Status : event.target.value
        });
    };

    handleTodoSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            Id : this.state.Id,
            Title : this.state.Title,
            Status : this.state.Status
        });

        this.setState({
            Id : "",
            Title : "",
            Status : "Pending"
        });
    };

    render() {
        return(
            <div className="container border-1">
                <h3>Add Todo</h3>

                <form onSubmit={this.handleTodoSubmit}>
                    <div className="form-group">
                        <input value={this.state.Id} 
                            className="form-control"
                            placeholder="Enter Id"
                            onChange={this.handleIdChange}
                        />
                    </div>
                    <div className="form-group">
                        <input value={this.state.Title} 
                            className="form-control"
                            placeholder="Enter Title"
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    <div className="form-group">
                        <select value={this.state.Status} className="form-control" onChange={this.handleStatusChange}>
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <button type="submit" className="form-control btn btn-primary">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

export default AddTodo;