import React, { Component } from 'react';

class PieceDisplay extends Component {
    state={
        pieces: [1,2,3,4]
    }
    render() {
        return (
        <div className="Pieces">
            {this.state.pieces.map(piece=><div className="Piece">{piece}</div>)}
        </div>
        )
    }
}

export default PieceDisplay;