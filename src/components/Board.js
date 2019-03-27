import React, { Component } from 'react';
import Tetriminoes from './Tetriminoes'
import '../styles/Board.css'

export default class Board extends Component {

    state={
        boardState: [[1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[20,20,20,20,20,20,20,20,20,20]]
      }

    render() {
        return (
            <div className="BoardC">
                <Tetriminoes/>
                <table className="Board">
                    {this.state.boardState.map((line,index) =>{
                    return <tr className="line">{line.map((block,index)=>{
                            return <td className="block" >{block}</td>
                        })}</tr>
                    }) }
                </table>
            </div>
        );
    }
}