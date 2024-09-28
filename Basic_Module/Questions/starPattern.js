let numberOfStars = 5
function loopPattern(n){
    for(let i=0; i<=n; i++){
        let star = " ";
        for(let j=0; j<= i; j++){
            star += "*";
        }
        console.log(star)
    }
}
loopPattern(numberOfStars)
