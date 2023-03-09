var clicks=0;

function clicked(e){
      console.log('clicked');

      clicks+=1;

      if(clicks == 0){
          e.innerHTML = "o";
      } else if(clicks == 1){
          e.innerHTML = "x";
      } else {
          e.innerHTML = "o";
          clicks=0;
      }
}
