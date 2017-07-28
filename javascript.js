/**
 * Created by Gintarė on 2017-07-28.
 */
var area = function(sideOne, sideTwo, sideThree) {
    var formula = (sideOne + sideTwo + sideThree) / 2;
    var answer = Math.sqrt(formula * (formula - sideOne) * (formula - sideTwo) * (formula - sideThree));
    return answer;
};
document.write(area (5,6,7));

// Using Heron's formula
