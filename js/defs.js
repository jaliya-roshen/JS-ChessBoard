/**
 *bB = blackBishop , bK = blackKnight , wB = whiteBishop , wQ = whiteQueen
 *
 * @type {{bB: number, bK: number, wB: number, bN: number,
 * bP: number, bQ: number, bR: number, wK: number, wN: number,
 * wP: number, wQ: number, wR: number, EMPTY: 0}}
 *
 * PIECES.EMPTY = 0
 */

//Definig  Pieces in board as a Constant values
const PIECES =  { EMPTY : 0, wP : 1, wN : 2, wB : 3,wR : 4, wQ : 5, wK : 6,
                bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK : 12  };

//Number of square in the board
const BRD_SQ_NUM = 120;


const FILES =  { FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3,
    FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8 };

const RANKS =  { RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3,
    RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8 };


const COLOURS = { WHITE:0, BLACK:1, BOTH:2 };

const SQUARES = {
    A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27, H1:28,
    A8:91, B8:92, C8:93, D8:94, E8:95, F8:96, G8:97, H8:98,
    NO_SQ:99, OFFBOARD:100
};

const BOOL = { FALSE:0, TRUE:1 };

var filesBrd = new Array(BRD_SQ_NUM);
var ranksBrd = new Array(BRD_SQ_NUM);

function fileRankToSquare(f,r) {

    return  ((21 + (f)) + (r) * 10);
    
}

