import React, { Component } from 'react';
import Tetriminoes from './Tetriminoes'
import '../styles/Board.css'
import { connect } from 'react-redux'
import { getPiece } from '../actions/pieces'

class Board extends Component {

    state={
        boardState: [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],
        x_coord: 4,
        y_coord: 0
      }

      handleOnKeyDown=(event) => {
        let pressed = event.key
        if(pressed === "ArrowRight"){
            let x = this.state.x_coord
            if(x < 10) this.setState({x_coord: x +1}, this.draw(x, this.state.y_coord))
        }else if(pressed ==="ArrowLeft"){
            let x = this.state.x_coord
            if(x > 0) this.setState({x_coord: x -1}, this.draw(x, this.state.y_coord))
        }else if(pressed ==="ArrowUp"){
            console.log("up")
        }else if(pressed === "ArrowDown"){
            console.log("down")
        }
      }

      gameStart =()=>{
        this.props.getPiece()
        this.draw(this.state.x_coord,this.state.y_coord)
        if(this.props.currentPiece[0]){
        // setInterval(()=> {
        //     this.setState({backgroundColor: ret[counter]})
        //     counter++},500)
        }
      }

    draw = (x_coord,y_coord)=>{  
        let board = this.state.boardState
    //   if(this.props.currentPiece[0]) console.log(this.props.currentPiece[0][0], "props")
    //   if(!!(board[0][4] && board[0][5] && board[0][6]) === false){
        console.log(x_coord,"x")
        console.log(y_coord,"y")
          for(let blocks in this.props.currentPiece){
              for(let block in this.props.currentPiece){
              let temp = +block + +x_coord
              board[+blocks][+temp] = this.props.currentPiece[blocks][block]
              }
        //   }
      }
      this.setState({boardState: board})
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
                <button onClick={this.gameStart} >start </button>
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

    //   handleButtonPress =()=>{
    //     let board = this.state.boardState
    //     this.props.getPiece()
    //     if(this.props.currentPiece[0]) console.log(this.props.currentPiece[0][0], "props")
    //     if(!!(board[0][4] && board[0][5] && board[0][6]) === false){
    //         for(let blocks in this.props.currentPiece){
    //             for(let block in this.props.currentPiece){
    //             let temp = 4 + +block
    //             board[blocks][temp] = this.props.currentPiece[blocks][block]
    //             }
    //         }
    //     }
    //     this.setState({boardState: board})
    //   }