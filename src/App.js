import React, {Component} from 'react';
import NavBar from './Components/navbar';
import './App.css';
import Counters from './Components/counters';


class App extends Component{
    state = {
        counters: [
            { id: 1, value: 4, },
            { id: 2, value: 0, },
            { id: 3, value: 0, },
            { id: 4, value: 0, },
        ]
    };

        //a good place to initialize the properties in this class
    constructor(props){
        super(props); //calling constructor of the parent class
        console.log('App-Constructor');
        //this.state = this.props.something;
    }

    //called after component is rendered in the dom, this is where you can make ajax calls to get data from the server
    componentDidMount(){
        console.log('App-Mounted');
    }

    //the third is render, check comments in below

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        //console.log(this.state.counters[index]);
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters: counters });
    };

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters });
        console.log('Event handler called', counterID)
    };

    render(){
        console.log('App-Rendered');
        return(
            <React.Fragment>
                <NavBar totalCounters = {this.state.counters.filter(c=>c.value>0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }

}

export default App;