import isYes from './is-yes.js';

const quizButton = document.getElementById('quizbutton');
const totalGood = document.getElementById('totalGood');
const totalBad = document.getElementById('totalBad');
let count = 0;


// const hideResults = () => {
//     Document.getElementById('results').style.display = 'none';
// };

// quizButton.addEventListener('click', () => {
//     hideResults();
// });

quizButton.addEventListener('click', () => {
    // console.log('button works');

    // if (Document.getElementById('resultsBad').style.display) = 'block') {
    //     Document.getElementById('resultsBad').style.display = 'none';
    // };

    // Document.getElementById('results').style.display = 'none';
    // Document.getElementById('resultsBad').style.display = 'none';
    // hideResults();
    if (count >= 1) {
        count = 0;   
    }
    // document.getElementById('results').style.display = 'none';
    const name = prompt('What\'s yer name?');
    const confirmation = confirm(`${name}, are you for sure for sure you want to take this quiz?  It might be REALLY hard...`);
    if (confirmation === false) return;
    const answer1 = prompt('Do I like P5.js?');
    const answer2 = prompt('Do I like narcs?');
    const answer3 = prompt('Am I indeed a human?');
    // let count = 0;
    if (isYes(answer1)) count += 1;
    if (!isYes(answer2)) count += 1;
    if (isYes(answer3)) count += 1;

    if (count >= 2) {
        totalGood.textContent = `${name}, you got ${count} correct, that's pretty good, I guess... ` + (Math.round((count / 3) * 100) + '%');
        document.getElementById('resultsGood').style.display = 'block';
        document.getElementById('results').style.display = 'block';
    } else {
        totalBad.textContent = `${name}, you got ${count} correct, that was terrible! ` + (Math.round((count / 3) * 100) + '%');
        document.getElementById('resultsBad').style.display = 'block';
        document.getElementById('results').style.display = 'block';
    }
    
});


