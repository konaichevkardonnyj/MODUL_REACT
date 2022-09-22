import {Component} from "react";
import React from "react";
/*import NextID from "react-id-generator";*/

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import EmployeesList from "../employees-list/employees-list"
import EmployeesAddForm from "../employees-add-form/employees-add-form"
import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [                                                       /*переменная с данными по сотрудникам*/
                {name: 'Vasya', salary: 1500, increase: false, like: false, id: '1'},  /*increase: false добавление класса*/
                {name: 'Tata', salary: 1000, increase: true, like: false, id: '2'},
                {name: 'Tima', salary: 800, increase: false, like: false, id: '3'},
                {name: 'Moty', salary: 500, increase: false, like: false, id: '4'},
            ]
        }
        this.maxId = 5
    }

      deleteItem = (id) =>{
            this.setState(({data})=>{
              /* const index = data.findIndex(item => item.id === id); /!*выводит только нужный id по компаненту employees-list*!/
                const before = data.slice(0, index);   /!*slice(0, index)  запишет с 0 до id*!/
                const after = data.slice(index + 1);     /!*slice(index + 1)  запишет id + 1 *!/
                const newArr = [...before, ...after];*/
                return {
                    data: data.filter(item => item.id !== id)
                }
            })
          }
      addItem = (name, salary) => {
          const newItem = [{
             name,
             salary,
             increase: false,
             id: this.maxId++
             }]
          this.setState(({data})=>{
              const newArr = [...data, ...newItem]
              return {data: newArr}
              })
          }
        onToggle = (id, prop) => {
        this.setState(({data})=>({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop] }
                }
                return item
            })
            }))
        }
        render() {
            const staff = this.state.data.length;
            const prize = this.state.data.filter(item => item.increase).length;
            return (
                <div className='app'>
                    <AppInfo staff = {staff} prize = {prize}/>
                    <div className='search-panel'>
                        <SearchPanel/>
                        <AppFilter/>
                    </div>
                    <EmployeesList data={this.state.data} /*передача переменной data для компанета в файле employees-list.js*/
                                   onDelete={this.deleteItem}
                                   onToggle = {this.onToggle}/>
                    <EmployeesAddForm onAdd = {this.addItem}/>
                </div>

            )
        }
    }

export default App;
