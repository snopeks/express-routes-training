console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

  $('#guess-number-form').submit(function( event ){
    event.preventDefault();
    let formIn = $('#guess-number-form').serialize();
    console.log(`http://localhost:3000/api/pickanumber?${formIn}`)
    $.ajax({
        method: 'GET',
        url: `http://localhost:3000/api/pickanumber?${formIn}`,
        success: handleSuccess,
        error: handleError
    });
    console.log('submitted guess number form')
  });

  $('#target-number-form').submit(function( event ){
    event.preventDefault();
    let formIn = $('#target-number-form').serialize();
    console.log(`http://localhost:3000/api/set-a-number?${formIn}`)
    $.ajax({
      method:'GET',
      url: `http://localhost:3000/api/set-a-number?${formIn}`,
      success: handleTargetSuccess,
      error: handleTargetError
    });
    console.log('submitted target number form')
  });
});

function handleSuccess(responseData){
  console.log(responseData);
}

function handleError(xhr, status, errorThrown){
  console.log('uh oh, error');
}

function handleTargetSuccess(target){
  console.log(target)
}

function handleTargetError(xhr, status, errorThrown){
  console.log('target not set! error!')
}