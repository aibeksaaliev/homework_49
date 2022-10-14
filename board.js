"use strict";
function createChessDesk(size) {
    let count = 0;
    let deskBySymbols = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (count % 2 === 0) {
                deskBySymbols += '██';
            }
            else {
                deskBySymbols += '  ';
            }
            count++;
        }
        deskBySymbols += '\n';
        count++;
    }
    console.log(deskBySymbols);
}
createChessDesk(16);
