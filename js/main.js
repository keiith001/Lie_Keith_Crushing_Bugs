//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    puzzlePiecesBox = document.querySelector(".puzzle-pieces"),
    resetButton = document.querySelector("#resetBut");
let draggedPiece;

function changeBGImage() {
    // Removing puzzle pieces from the puzzle board
    dropZones.forEach((zone) => {
        while (zone.firstChild) {
          zone.removeChild(zone.firstChild);
        }
    });

    // Moving back puzzle pieces from the puzzle board to the puzzle box
    puzzlePieces.forEach((piece) => {
        puzzlePiecesBox.appendChild(piece);
    });

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
    puzzlePieces[0].src = `images/topLeft${this.id}.jpg`;
    puzzlePieces[1].src = `images/bottomLeft${this.id}.jpg`;
    puzzlePieces[2].src = `images/topRight${this.id}.jpg`;
    puzzlePieces[3].src = `images/bottomRight${this.id}.jpg`;

    console.log("Puzzleboard Image changed to", this)
}

function handleStartDrag() {
    console.log("Now dragging this piece:", this)
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log('Image dropped in this zone.')

    // This Bug Fix is to make an error if user try to drop another image inside the dropzone
    // It uses the return attribute to exit the function immediately upon the condition triggered
    const droppedZone = e.currentTarget;
    if (droppedZone.querySelector("img")) {
        alert('ERROR! There is already an image placed here.')
        console.log('ERROR! There is already an image placed here.');
        return;
    }
    
    this.appendChild(draggedPiece);
}

function resetSequence () {
    // Removing puzzle pieces from the puzzle board
    dropZones.forEach((zone) => {
        while (zone.firstChild) {
          zone.removeChild(zone.firstChild);
        }
    });

    // Moving back puzzle pieces from the puzzle board to the puzzle box
    puzzlePieces.forEach((piece) => {
        puzzlePiecesBox.appendChild(piece);
    });

    console.log('Sequence has been reset.')    
}

//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

resetButton.addEventListener("click", resetSequence);