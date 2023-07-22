const question = [
  {
        'que': "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a",
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    }
];
//load questions
let index = 0;
let total = question.length;
let right = 0
let wrong = 0
const quebox = document.getElementById("quebox")
const optioninput = document.querySelectorAll(".option")
const loadquestion = () => {
  if(index == total){
     return endquiz()
  }
  reset();
  const data = question[index]
  quebox.innerText = `${index+1}) ${data.que}`;
  optioninput[0].nextElementSibling.innerText = data.a;
  optioninput[1].nextElementSibling.innerText = data.b;
  optioninput[2].nextElementSibling.innerText = data.c;
  optioninput[3].nextElementSibling.innerText = data.d;
}


// check that answers are right or wrong
const submitquiz = () => {
  
  const data = question[index]
  const ans = getAnswer()
  if(ans == data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadquestion(); // going to nxt question
  return;
}
const getAnswer = () => {
  let answer;
  optioninput.forEach((input)=>{
    if(input.checked){
      answer = input.value;

    }
  })
  return answer;
}
const reset = () => {
  optioninput.forEach((input)=>{
    input.checked = false;
  })
}
const endquiz = () =>{
  document.getElementById("box").innerHTML = 
    `<div style = "text-align:center;">
    <h3>Thank you for playing quiz</h3>
    <h2> ${right}/${total}  are correct </h2>
    </div>`
}






//initial call
loadquestion();