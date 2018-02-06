//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
  return;
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
  return;
}

function pressIt() {
  $('input').on('keydown', function() {
    if (key.which == 69) {
      alert('g was pressed');
    }
  });
  return;
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

});
