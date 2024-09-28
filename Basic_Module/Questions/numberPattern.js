// output : 
// 1
// 12
// 123
// 1234

function patternQuestion(n){

    for(let i=0; i<=n; i++){
        let row = " ";
        for(let j=1; j<i; j++){
            row +=j;
        }
        console.log(row)
    }
}

const n =4;
patternQuestion(n)
