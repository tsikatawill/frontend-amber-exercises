//********** picture   *****/
$("#profileImage").click(function(e) {
  $("#imageUpload").click();
});

function fasterPreview( uploader ) {
  if ( uploader.files && uploader.files[0] ){
        $('#profileImage').attr('src', 
           window.URL.createObjectURL(uploader.files[0]) );
  }
}

$("#imageUpload").change(function(){
  fasterPreview( this );
});






// ******  PDF  *********//

var element = document.querySelector('.register');
 html2pdf(element, {
     margin:       1,
     filename:     'myfile.pdf',
     image:        { type: 'jpeg', quality: 0.98 },
     html2canvas:  { dpi: 192, letterRendering: true },
     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'}
});