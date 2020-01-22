import React, {Component} from 'react'

import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'


export  default class Calculator extends Component {

    clearMemory () {
        console.log('limpar')
    };
    
    setOperation(operation) {
        console.log(operation)
    }
    
    addDigit(n) {
        console.log(n)
    }

    /* Função construtor para referenciar corretamente o this */
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    render () {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className = "calculator">
                <Display value= {112315142345234}/>
                <Button label = "AC" click = {this.clearMemory} triple/>
                <Button label = "/" click ={this.setOperation} operation/>
                <Button label = "7" click ={this.addDigit}/>
                <Button label = "8" click ={this.addDigit}/>
                <Button label = "9" click ={this.addDigit}/>
                <Button label = "*" click ={this.setOperation} operation/>
                <Button label = "4" click ={this.addDigit}/>
                <Button label = "5" click ={this.addDigit}/>
                <Button label = "6" click ={this.addDigit}/>
                <Button label = "-" click ={this.setOperation } operation/>
                <Button label = "1" click ={this.addDigit}/>
                <Button label = "2" click ={this.addDigit}/>
                <Button label = "3" click ={this.addDigit}/>
                <Button label = "+" click ={this.setOperation} operation/>
                <Button label = "0" click ={this.addDigit} double/>
                <Button label = "." click ={this.addDigit}/>
                <Button label = "=" click ={this.setOperation} operation/>
                </div>
        )

    }
}