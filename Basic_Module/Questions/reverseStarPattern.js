let numberOfStars = 5
function loopPattern(n){
    for(let i=n; i>=1; i--){
        let star = " ";
        for(let j=1; j<= i; j++){
            star += "*";
        }
        console.log(star)
    }
}
loopPattern(numberOfStars)
