import React, { Component } from 'react';
import { CellType } from '../models';
import Cell from './cell';
import {
  Button,
  Form
} from "@aws-amplify/ui-react";
import { v4 as uuidv4 } from 'uuid';

class Maze extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.rows,
            cols: this.props.cols,
            maze: generateMaze(this.props.rows, this.props.cols)
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.regenMaze = this.regenMaze.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    regenMaze() {
        this.setState({maze: generateMaze(this.state.rows, this.state.cols)});
    }

    render() { 
        return (
            <React.Fragment>
                <div>
                    <table>
                        <tbody>
                            { renderMaze(this.state.maze) }
                        </tbody>
                    </table>
                </div>
                <div>
                    <form>
                        <label htmlFor="rows">Rows: </label><input type="number" name="rows" value={this.state.rows} onChange={this.handleInputChange} />
                        <label htmlFor="cols">Cols: </label><input type="number" name="cols" value={this.state.cols} onChange={this.handleInputChange} />
                    </form>
                    <Button onClick={() => this.regenMaze()}>(A)Maze me</Button>
                </div>
            </React.Fragment>
        );
    }
}

function renderMaze(maze) {
    let htmlOutput = maze.map((row, index) =>
        <tr key={index}>
            {
                row.map((cell) => 
                    <td key={cell.id}><Cell id={cell.id} row={cell.row} col={cell.col} type={cell.type} /></td>
                )
            }
        </tr>
    );

    return (htmlOutput);
}

function generateMaze(rows, cols) {
    let cellType;
    let generatedMaze = new Array();

    for (let x = 0; x < rows; x++) {
        let currentRow = new Array();
        for (let y = 0; y < cols; y++) {
            if((x === rows-1 || y === cols-1 || x === 0 || y === 0)) {
                cellType = CellType.WALL;
            } else {
                cellType = (Math.random() > .33 ? CellType.EMPTY : CellType.WALL);
            }
            let uuid = uuidv4();
            currentRow.push({ id: uuid, row: x, col: y, type: cellType });
        }
        generatedMaze.push(currentRow);
    }

    return (generatedMaze);
}
 
export default Maze;