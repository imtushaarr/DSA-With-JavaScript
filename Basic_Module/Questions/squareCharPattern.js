function patternPrint(n){
    for(let i=0; i < n; i++){
        let row = " "
        for(let j=0; j < n; j++){
            row += String.fromCharCode(65+j)
        }
        console.log(row)
    }
}

const n = 4;
patternPrint(n)
