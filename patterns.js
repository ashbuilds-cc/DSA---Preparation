function printSquare(side) {
    if (side <= 1) {
        return -1;
    }
    for (let i = 0; i < side; i++) {
        let str = "";
        for (let j = 0; j < side; j++) {
            str += "*"
            if (j !== side - 1) {
                str += " "
            }
        }
        console.log(str);
    }
}

function printRightTriangle(side) {
    if (side <= 1) {
        return -1;
    }
    for (let i = 0; i < side; i++) {
        let str = "";
        for (let j = 0; j <= i; j++) {
            str += "*"
            if (j !== side - 1) {
                str += " "
            }
        }
        console.log(str);
    }
}

function printNumberedRightTriangle(side, incHorizontal) {
    if (side <= 1) {
        return -1;
    }
    for (let i = 0; i < side; i++) {
        let str = "";
        for (let j = 0; j <= i; j++) {
            str += `${incHorizontal ? j + 1 : i + 1}`
            if (j !== side - 1) {
                str += " "
            }
        }
        console.log(str);
    }
}


function printInvNumberedRightTriangle(side, incHorizontal) {
    if (side <= 1) {
        return -1;
    }
    for (let i = side; i > 0; i--) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += `${incHorizontal ? j + 1 : i}`
            if (j !== side - 1) {
                str += " "
            }
        }
        console.log(str);
    }
}

function printRightPerpTriangle(side) {
    if (side <= 1) {
        return -1;
    }
    for (let i = 0; i < side; i++) {
        let str = "";
        for (let j = 0; j < side; j++) {
            if (j < side - i - 1) {
                str += " "
            } else {
                str += "*"
            }
        }
        console.log(str);
    }
}

function printBinaryTriangle(side) {
    if (side <= 1) {
        return -1;
    }
    for (let i = 1; i <= side; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            if(j%2 === 0){
                str += "1"
            }else{
                str += "0"
            }
            if(j !== i-1){
                str += " ";
            }
        }
        console.log(str);
    }
}

function printDiffBinaryTriangle(side) {
    if (side <= 1) {
        return -1;
    }
    let toggle = 1;
    for (let i = 1; i <= side; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += toggle;
            if(toggle === 1){
                toggle = 0;
            }else{
                toggle = 1;
            }
            if(j !== i-1){
                str += " ";
            }
        }
        console.log(str);
    }
}


// printSquare(10);
// printRightTriangle(10);
// printNumberedRightTriangle(5, false);
//printInvNumberedRightTriangle(5, false);
//printRightPerpTriangle(5);
//printBinaryTriangle(5);
printDiffBinaryTriangle(5);