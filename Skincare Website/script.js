document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let score = {
        dry: 0,
        normal: 0,
        oily: 0,
        sensitive: 0,
    };
    const responses = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked'),
    };
    for (let question in responses) {
        if (responses[question]) {
            console.log(`Question ${question}: ${responses[question].value}`); 

            switch (responses[question].value) {
                case 'A':
                    if (question === 'q1') score.dry++; 
                    if (question === 'q2') score.oily++; 
                    if (question === 'q3') score.dry++;
                    break;
                case 'B':
                    score.normal++; 
                    break;
                case 'C':
                    if (question === 'q1') score.oily++;
                    if (question === 'q3') score.oily++; 
                    if (question === 'q4') score.sensitive++;
                    break;
                case 'D':
                    score.sensitive++; 
                    break;
            }
        }
    }
    console.log('Scores:', score);


    let skinType = "";
    const maxScore = Math.max(score.dry, score.normal, score.oily, score.sensitive);

    if (score.dry === maxScore) {
        skinType = "Dry Skin";
    } else if (score.normal === maxScore) {
        skinType = "Normal Skin";
    } else if (score.oily === maxScore) {
        skinType = "Oily Skin";
    } else if (score.sensitive === maxScore) {
        skinType = "Sensitive Skin";
    }
    document.getElementById("result").innerText = "Your skin type is: " + skinType;
});
