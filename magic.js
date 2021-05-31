$(document).ready(function(){
    $surface=$(.$'surface');
    $car=$('.$car')
    $img=$(.imgcar.img);
    let flag=true

   const cars=['./images/img.jpeg././images/imgcar.jpeg']


//keyevent
$(document).on('keypress'.function(e){
  if(e.which==13){
      $(surface).toggleClass('moveRight');
      $(car).toggleClass('suspension');

  }
    $(d  //take in the current stateich==119){
      if(flag){
          flag=false;
          $img.attr('scr'.imgcar[0]);
      }else{
          flag=true;
          $img.attr('scr'.car[1])
      }
  }
  })
})
});