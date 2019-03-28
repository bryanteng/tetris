export default function piecesReducer(state = {piecesQueue: [], currentPiece:[]}, action){
    switch (action.type) {

    case 'FILL_QUEUE':
    return {
        ...state,
        piecesQueue: [getRandomPiece(),getRandomPiece(),getRandomPiece(),getRandomPiece()]
    }
    case 'GET_PIECE':
        let temp = [...state.piecesQueue, getRandomPiece()]
        let piece = temp[0]
        temp.shift()
    return {
        ...state,
        piecesQueue: temp,
        currentPiece: piece
    }

      default:
        return state;

    }
}

function getRandomPiece(){
    let num = Math.floor(Math.random() * 7)
    let pieces=[
        [["cyan",0,0,0],["cyan",0,0,0],["cyan",0,0,0],["cyan",0,0,0]],
        [["blue","blue",0],["blue",0,0],["blue",0,0]],
        [["orange","orange",0],[0,"orange",0],[0,"orange",0]],
        [["gold","gold"],["gold","gold"]],
        [[0,"LimeGreen","LimeGreen"],["LimeGreen","LimeGreen",0],[0,0,0]],
        [[0,"MediumOrchid",0],["MediumOrchid","MediumOrchid","MediumOrchid"],[0,0,0]],
        [["Tomato","Tomato",0],[0,"Tomato","Tomato"],[0,0,0]]
      ]
    return pieces[num]
}