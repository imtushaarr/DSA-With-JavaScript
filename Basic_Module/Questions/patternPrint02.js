function patternPrint(n){
    let num = 1

    for(let i=0; i<n; i++){   // Outer Layer For Column
        row = " ";
        for(let j=0; j<n; j++){   // Inner Layer For Row
            row += num
            num++
        }

        console.log(row)
    }
}

const n = 3;
patternPrint(n)

// Expected Output
// 123
// 456
// 789
