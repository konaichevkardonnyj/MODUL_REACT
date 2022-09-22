import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggle}) => {   /*в аргументе массив с элементами*/

 //   const element = data.map((item, i)=>{  /*чтобы перебрать массив*/
    const element = data.map(item =>{  /*чтобы перебрать массив*/
//        const {id} = item;        // item = объект id = key который не изменяться
        const {id, ...ItemProps} = item;  //ItemProps = объединение 3 свойств по остаточному признаку
        return (
//      <EmployeesListItem  name={item.name} salary ={item.salary} increase ={item.increase}/> /*{...item} - тот же результат (развертка или object string operator)*/
//        <EmployeesListItem key= {i} name={item.name} salary ={item.salary} increase ={item.increase}/> //- тот же результат (развертка или object string operator)*/
        <EmployeesListItem
            key= {id}
            {...ItemProps}
            onDelete = {() => onDelete(id)}
            onToggle = {(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )

    })

    console.log(element);
    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployeesList;