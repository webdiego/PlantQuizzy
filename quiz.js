const correctAnswers = ['A','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('div.d-none');

form.addEventListener('submit', e=>{
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value,form.q4.value]; 

  //CHECK ANSWERS
  userAnswers.forEach((answer, index) =>{
   
   if(answer === correctAnswers[index]){
     score += 25;
     
   }
  });
 


  //Show result on page 

  scrollTo(0,0); // When we submit got to x and y = 0 (top)
  result.querySelector('span').textContent = `${score}% `;
  result.classList.remove('d-none');

  let output = 0 ;
  const timer = setInterval(() => {
    
    result.querySelector('span').textContent = `${output}% `;
    if(output === score){
      clearInterval(timer);
     } else{
        output++;
      }
   

  }, 10);

});

