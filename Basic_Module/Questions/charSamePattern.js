function samePattern(n){
    let char = 65
    for(let i=0; i<n ; i++){
        let row = " "
        for(let j=0; j<=i; j++){
            row += String.fromCharCode(char + i)
        }
        console.log(row)
    }
}

let n = 4;
samePattern(n)
