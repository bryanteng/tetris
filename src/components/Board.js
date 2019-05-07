import React, { Component } from 'react';
import Tetriminoes from './Tetriminoes'
import '../styles/Board.css'
import { connect } from 'react-redux'
import { getPiece, fillQueue } from '../actions/pieces'

class Board extends Component {

    state={
        boardState: [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],
        x_coord: 4,
        y_coord: 0
      }

      handleOnKeyDown=(event) => {
        let pressed = event.key
        if(pressed === "ArrowRight"){
            this.move(1)
        }else if(pressed ==="ArrowLeft"){
            this.move(-1)
        }else if(pressed ==="ArrowUp"){
            console.log("up")
        }else if(pressed === "ArrowDown"){
            this.drop()
        }
      }

      gameStart = () => {
        this.props.getPiece()
        // if(this.props.currentPiece) {
        //     this.draw(4,0)
        // }
      }

    draw = (x_coord,y_coord) => {  
        let board = this.state.boardState
        for(let blocks in this.props.currentPiece){
            for(let block in this.props.currentPiece){
                let temp = +block + +x_coord
                board[+blocks + y_coord][+temp] = this.props.currentPiece[blocks][block]
            }
        }
    }

    drop = () => {
        this.setState({y_coord: this.state.y_coord+1})
        if(!this.collide()) 
            this.draw(this.state.x_coord,this.state.y_coord)
    }
    
    move = (offset) => {
        this.setState({x_coord: this.state.x_coord+offset})
        if (this.collide()) {
            this.setState({x_coord: this.state.x_coord - offset})
        }else{
            this.draw(this.state.x_coord,this.state.y_coord)
        }
    }
    collide = () => {
        let m = this.state.boardState
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0 &&
                   (m[y + this.state.y_coord] &&
                    m[y + this.state.y_coord][x + this.state.x_coord]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.props.currentPiece !== prevProps.currentPiece && this.state.boardState !== prevState.boardState)
    //     this.draw(this.state.x_coord,this.state.y_coord)   
    // }
    
    componentDidMount() {
        this.props.fillQueue()
    }
    

    render() {
        console.log(this.props.currentPiece)
        return (
            <div className="BoardC">
                <Tetriminoes/>
                <table className="Board" focus="true" onKeyDown={this.handleOnKeyDown} tabIndex="0">
                    <tbody>
                        {this.state.boardState.map((line,vertical_index) =>{
                        return <tr className="line" key={vertical_index}>{line.map((block,horizontal_index)=>{
                                return <td className="block" key={`${vertical_index}${horizontal_index}`} style={{backgroundColor: block ? block : null}} > </td>
                            })}</tr>
                        }) }
                    </tbody>
                </table>
                <button onClick={this.gameStart} >start </button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
      currentPiece: state.pieces.currentPiece
    }
  }
  
export default connect(mapStateToProps, {getPiece, fillQueue})(Board)

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


        // if(this.props.currentPiece[0]){
        // setInterval(()=> {
        //     this.setState({backgroundColor: ret[counter]})
        //     counter++},500)
        // }