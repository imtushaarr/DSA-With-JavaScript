function squarePattern(n) {
    for(let i=0; i<=4; i++){
        let row = " "
        for(let j=1; j<=n; j++){
            row += j
        }
        console.log(row)
    }
}

let n = 4
squarePattern(n)
