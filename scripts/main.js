function initMap() {
  var hotelposition = {lat: 12.972006, lng: 77.594871};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    zoomControl: true,
    scrollwheel: false,
    clickableIcons: false,
    draggable:false,
    center: hotelposition,
    disableDoubleClickZoom: true
  });

  var marker = new google.maps.Marker({
    position: hotelposition,
    map: map,
    title: 'JSChannel Conference'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<div onclick="redirectMap()" class="flex-row map-infoWindow"><div class="jwm-image-small"></div><div class="flex-column margin-lr10"><h4>JSChannel Conference</h4><p>JW Marriott Hotel Bengaluru</p></div></div>',
    maxWidth: 300
  });

  infoWindow.open(map, marker);

  google.maps.event.addListener(marker, 'click', function () {
    redirectMap();
  });
}

var redirectMap = function () {
  window.open('https://www.google.co.in/maps/place/JW+Marriott+Hotel+Bengaluru/@12.972006,77.5926823,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae1679c4616049:0x21e7060fdb88a82b!8m2!3d12.972006!4d77.594871', '_blank');
}

var toggleSchedule = function (day) {
  if(day === 1) {
    document.getElementById('schedule-day2').classList.add('hidden');
    document.getElementById('schedule-day1').classList.remove('hidden');
  } else {
    document.getElementById('schedule-day1').classList.add('hidden');
    document.getElementById('schedule-day2').classList.remove('hidden');
  }
}
