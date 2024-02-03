

let textInput = document.getElementById('wordInput');
let longitudContainer = document.getElementById('longitud');

function wordLength(){
  
  if(textInput.value === ''){
    textInput.classList.add('error');
    setTimeout(()=>{
      textInput.classList.remove('error')
    },500)
  }else {

    if(longitudContainer.getElementsByTagName('p').length < 10){
      longitudContainer.innerHTML += '';

      let p = document.createElement('p');
    p.textContent = `"${textInput.value}"`  + " tiene: " + textInput.value.length + " letras";
    longitudContainer.append(p);
    }else{
      longitudContainer.innerHTML = ''
      setTimeout(() => {
        longitudContainer.innerHTML += "<h4>Excediste el número de palabras. Ya puedes intentarlo de nuevo.</h4>"
      },0);
      setTimeout(()=>{
        longitudContainer.innerHTML = ''
      },3000);
      }
     
    }

  textInput.value = '';
}

textInput.addEventListener('keydown', function(e){
  if(e.key === 'Enter'){
    e.preventDefault();
    wordLength();
  }
})