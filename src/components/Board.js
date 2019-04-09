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
        if(this.props.currentPiece[0]) console.log(this.props.currentPiece[0][0], "props")
        if((board[0][4] && board[0][5] && board[0][6]) == false){
            for(let blocks in this.props.currentPiece){
                for(let block in this.props.currentPiece){
                let temp = 4 + +block
                board[blocks][temp] = this.props.currentPiece[blocks][block]
                }
            }
        }
        this.setState({boardState: board}, console.log(this.state.boardState))
      }

      handleOnKeyDown=(event) => {
        console.log(event.key)
      }

    render() {
        return (
            <div className="BoardC">
                <Tetriminoes/>
                <table className="Board" onKeyDown={this.handleOnKeyDown} tabIndex="0">
                    {this.state.boardState.map((line,index) =>{
                    return <tr className="line">{line.map((block,index)=>{
                            return <td className="block" style={{backgroundColor: block ? block : null}} > </td>
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