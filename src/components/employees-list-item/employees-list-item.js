import './employees-list-item.css';
/*import {Component} from "react";*/

/*class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,  /!*добавление класса *!/
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({  /!*({}) - чтобы не прописывать !state.increase*!/
            increase: !increase
        }))
    }

    onStar = () => {
        this.setState(({star}) => ({  /!*({}) - чтобы не прописывать this.state.star*!/
            star: !star
        }))
    }


    render() {
        const {name, salary, onDelete} = this.props
        const {increase,star} = this.state
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (star) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm" onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}*/
const EmployeesListItem = (props) => {
    const {name, salary, onDelete, increase, like} = props;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (like) {
        classNames += ' like';
    }
    return (
        <li className ={classNames}>
            <span className="list-group-item-label" onClick={props.onToggle} data-toggle = 'like'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm" onClick={props.onToggle}
                        data-toggle = 'increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm " onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}



export default EmployeesListItem;
