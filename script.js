let result = '';
let refresh = a => {
   if(result.length >= 48){
      alert('You have reached the maximum length. Please click on C to continue.');
      result.split('').substring(0, 48).join('');
   }
   document.querySelector('.output').innerHTML = a;
};


// nums

let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
for(let i = 0; i <= 9; i++){
   document.querySelector(`.${numArr[i]}`).addEventListener("click", e => {
      result += i;
      refresh(result);
   });
}

document.querySelector(`.dot`).addEventListener("click", e => {
   result += '.';
   refresh(result);
});

// operators

let opArr = ['plus', 'minus', 'times', 'divide'];

for(let i = 0; i < 4; i++){
   document.querySelector(`.${opArr[i]}`).addEventListener("click", e => {
      if(opArr[i] == 'plus'){
         result += '+';
         refresh(result);
      } else if(opArr[i] == 'minus'){
         result += '-';
         refresh(result);
      } else if(opArr[i] == 'times'){
         result += ' * ';
         refresh(result);
      } else if(opArr[i] == 'divide'){
         result += ' / ';
         refresh(result);
      }
   });
}

// other stuff

document.querySelector(`.equal`).addEventListener("click", e => {
   try{
      refresh(eval(result));
      result = String(eval(result));
   } catch(e){
      refresh(e);
      result = '';
   }
});

document.querySelector(`#C`).addEventListener("click", e => {
   result = '';
   refresh(result);
});

document.querySelector(`.backspace`).addEventListener("click", e => {
   result = result.slice(0, -1);
   refresh(result);
});

document.querySelector(`.percent`).addEventListener("click", e => {
   result = String(result /= 100);
   refresh(result);
});
