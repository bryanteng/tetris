import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fillQueue } from '../actions/pieces'

class PieceDisplay extends Component {



    render() {
        return (
        <div className="Pieces">
            {this.props.piecesQueue.map((pieces,key)=><div key={key} className="Piece">{pieces.map((piece,index)=> <tr key={index}>{piece.map((block,index2)=><td className="block" key={`${index}${index2}`} style={{backgroundColor: block ? block : null}}></td>)}</tr> ) }</div>)}
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