let btn = document.getElementById('button');

btn.addEventListener('click', generateAdvice);

function generateAdvice(){
   fetch('https://api.adviceslip.com/advice')
   .then(response => response.json())
   .then((data) => formatAdvice(data.slip)).catch(error => console.log("Error occured: ", error))
}

function formatAdvice(data){
    let span = document.getElementById('advice-number');
    let content = document.getElementById('quote');
    span.textContent = `${data.id}`;
    content.textContent = `${data.advice}`;
}


