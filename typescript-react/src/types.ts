type ID = number | string; //composition

const userId: ID = 5;
const postId: ID = "ddsdsu6";

type Cords = [number, number]; //tuple

const cords: Cords = [34.567, 78.9];

type ReqStatus = "request" | "succes" | "error"; //union

const requestStatus: ReqStatus = "succes";

type CellSize = 2 | 3 | 7 | 0;

const cell: CellSize = 0;

console.log(userId, postId, cords, requestStatus, cell);
export {};
