import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
/*    onValueChange = (e) => {   Объединение в однин по атрибуту name
        this.setState( item =>({
            [e.target.name] : e.target.value
        }))
    }*/
    onName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    onSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
               name: '',
               salary: ''
           })
    }
    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onName}
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                            name = "name"
                            value = {name} />
                    <input type="number" onChange={this.onSalary}
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                            name = "salary"
                           value = {salary} />
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;