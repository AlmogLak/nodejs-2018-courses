import * as React from 'react';
import './App.css';
import AppProps from './App.props';
import TableRow from './TableRow';
import Item from '../models/Item';

class App extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
        this.joinShopping = this.joinShopping.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.cancelJoining = this.cancelJoining.bind(this);
    }

    joinShopping(item: Item) {
        this.props.joinShopping(item);
    }

    cancelJoining(item: Item) {
        this.props.cancelJoining(item);
    }

    deleteItem(itemId: string) {
        this.props.deleteItem(itemId);
    }

    addNewItem(event: React.FormEvent<HTMLButtonElement>) {
        this.props.addNewItem();
    }

    render() {
        return (
            <>
            <span>logged as: </span><span style={{color: 'tomato'}}>{this.props.username} </span>
            <button type="button" onClick={this.props.onLogout}>x</button>
            <h1>Group Shopping</h1>
            <hr />
            <button className="add-item-button" type="button" onClick={this.addNewItem}>+ Publish this item!</button>
            <h3>Current Deals: </h3>
            <table>
                <tbody>
                {this.props.items.map(item => (
                    <TableRow 
                        key={item.id || item._id} 
                        item={item} 
                        joinShopping={this.joinShopping} 
                        cancelJoining={this.cancelJoining}
                        deleteItem={this.deleteItem}
                        isMine={this.isMine(item)} 
                    />
                ))}
                </tbody>
            </table>
            </>
        );
    }

    isMine(item: Item) {
        return this.props.username === item.attuid;
    }
}

export default App;