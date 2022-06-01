import React, { Component } from 'react';
import { CellType } from '../models';

class Cell extends Component { 
    state = {
        type: this.props.type,
        row: this.props.row,
        col: this.props.col,
        id: this.props.id
    }

    renderCellUI() {
        switch (this.state.type) {
            case CellType.EMPTY:
                return(<div> </div>);
                break;
            case CellType.WALL:
                return(<div>■</div>);
                break;
            default:
                return(<div>/!\</div>);
                break;
        }
    }

    render() {
        return (
            <React.Fragment>
                { this.renderCellUI() }
            </React.Fragment>
        );
    }
}

export default Cell;