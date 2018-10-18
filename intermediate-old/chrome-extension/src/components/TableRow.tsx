import * as React from 'react';
import TableRowProps from './TableRow.props';
import './TableRow.css';
import Loader from './Loader';

class TableRow extends React.Component<TableRowProps> {
    constructor(props: TableRowProps) {
        super(props);
        this.onJoinShopping = this.onJoinShopping.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.getControls = this.getControls.bind(this);
        this.onCancelJoining = this.onCancelJoining.bind(this);
    }

    onJoinShopping(event: React.FormEvent<HTMLButtonElement>) {
        if (this.props.item._id !== undefined) {
            this.props.joinShopping(this.props.item);
        }
    }

    onCancelJoining(event: React.FormEvent<HTMLButtonElement>) {
        if (this.props.item._id !== undefined) {
            this.props.cancelJoining(this.props.item);
        }
    } 

    removeItem(event: React.FormEvent<HTMLButtonElement>) {
        console.log('removing itemId ', this.props.item._id);
        if (this.props.item._id !== undefined) {
            this.props.deleteItem(this.props.item._id);
        }
    }

    render() {
        return (
            <tr>
                <td><img className="item-image" src={this.props.item.imageUrl} /></td>
                <td>
                    <a
                        className="ellipsis link"
                        target="_blank"
                        href={this.props.item.url}
                        title={this.props.item.name}
                    >{this.props.item.name}
                    </a>
                    <Loader 
                        value={this.props.item.buyers && this.props.item.buyers.length} 
                        target={this.props.item.targetNumOfBuyers} 
                    />
                </td>
                <td className="price">{this.props.item.currency} {this.props.item.price}</td>
                {this.getControls()}
            </tr>
        );
    }

    getControls() {
        return this.props.isMine ?
            (<td><button type="button" onClick={this.removeItem}>🗑️</button></td>) :
            (
            <td>
                <button type="button" onClick={this.onCancelJoining}>-</button>
                <button type="button" onClick={this.onJoinShopping}>+</button>
            </td>
            );
    }
}

export default TableRow;