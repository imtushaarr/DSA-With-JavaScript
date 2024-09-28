function patternPrint(n){
    let char = 65

    for(let i=0; i<n; i++){   // Outer Layer For Column
        row = " ";
        for(let j=0; j<n; j++){   // Inner Layer For Row
            row += String.fromCharCode(char)
            char++
        }

        console.log(row)
    }
}

const n = 3;
patternPrint(n)

// Expected Output
// ABC
// DEF
// GFI
