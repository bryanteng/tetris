import React, { Component } from 'react';
import Tetriminoes from './Tetriminoes'
import '../styles/Board.css'
import { connect } from 'react-redux'
import { getPiece } from '../actions/pieces'

class Board extends Component {

    state={
        boardState: [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
      }

      handleButtonPress =()=>{
        let board = this.state.boardState
        this.props.getPiece()
        console.log(this.props.currentPiece, "props")
        if((board[0][4] && board[0][5] && board[0][6]) == false){
            for(let block in this.props.currentPiece){
                let temp = +(Math.floor(board[0].length/2-1)) + +block
                console.log(temp)
                board[0][temp] = this.props.currentPiece[block]
            }
        }
        this.setState({boardState: board})
      }

    render() {
        console.log(this.state.boardState, 'board')
        return (
            <div className="BoardC">
                <Tetriminoes/>
                <table className="Board">
                    {this.state.boardState.map((line,index) =>{
                    return <tr className="line">{line.map((block,index)=>{
                            return <td className="block" > </td>
                        })}</tr>
                    }) }
                </table>
                <button onClick={this.handleButtonPress}>push me for a piece</button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
      currentPiece: state.pieces.currentPiece,
    }
  }
  
export default connect(mapStateToProps, {getPiece})(Board)