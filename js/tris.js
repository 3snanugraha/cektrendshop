function fungsibuka(){
    var x=document.getElementById("myNav");
    if(x.className==="navigasi"){
        x.className += " responsive";
    }else{
        x.className="navigasi";
    }
}

//Table
$(document).ready(function(){
  $('#tabelkeren').DataTable();
});

function trans(){
  window.alert('Transaksi Berlanjut')
}

// bxslider
$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    caption: true
  });

  $(document).ready(function(){
    $('.bxslider').bxSlider();
  });

//maps
function myMap() {
    //deklarasi variabel kota beserta koordinatnya
    var indonesia =new google.maps.LatLng(-1.8692561,77.7180656); 
    var tasikcektrendshop =new google.maps.LatLng(-7.3598063,108.1627119); 

    
    //membuat peta pada posisi kordinat indonesia
    var buatpeta= {
      center:tasikcektrendshop,
      zoom:11,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var petaindonesia = new google.maps.Map(document.getElementById("googleMap"),buatpeta);
    
    //Menambahkan marker tasik
    var marker1 = new google.maps.Marker({
      position:tasikcektrendshop,
      animation:google.maps.Animation.BOUNCE,
      icon:'<img src="img/marker1.png" width="25" height="25"/>',
      map:petaindonesia,
    
    });

    var infowindow = new google.maps.InfoWindow({
       // content:"Ini Tasikmalaya"
        
      });
      infowindow.open(petaindonesia,marker1);

}