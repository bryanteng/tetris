import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fillQueue } from '../actions/pieces'

class PieceDisplay extends Component {

    componentDidMount(){
        this.props.fillQueue() 
    }

    render() {
        return (
        <div className="Pieces">
            {this.props.piecesQueue.map(pieces=><div className="Piece">{pieces.map(piece=> <tr>{piece.map(block=><td className="block" style={{backgroundColor: block ? block : null}}></td>)}</tr> ) }</div>)}
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
      piecesQueue: state.pieces.piecesQueue,
    }
  }
  
export default connect(mapStateToProps, {fillQueue})(PieceDisplay)