console.log("gallery.js connected")

$(document).ready(function(){
  
  console.log("gallery page ready")

  $('#artwork-form').submit( function ( event ){
    event.preventDefault();
    console.log("what is happening?")
    let formIn = $('#artwork-form').serializeArray();
    console.log(formIn)
    console.log(`http://localhost:3000/api/newartwork`)
    $.ajax({
      method: "POST",
      url: 'http://localhost:3000/api/newartwork',
      data: formIn,
      success: handleGallerySuccess,
      error: handleGalleryError
    })
  })
})

function handleGallerySuccess(artGallery){
  console.log(artGallery);

};
function handleGalleryError(xhr, status, errorThrown){
  console.log('uh oh, gallery error!')
}