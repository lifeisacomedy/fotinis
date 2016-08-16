$(document).ready(function()
{
  var s = 1;
  var h = 1;
  var m = 1;
  var b = 1;
  var s_prev = 5;
  var h_prev = 15;
  var m_prev = 9;
  var b_prev = 4;
  var fade_speed = 1100;

  var cycle_slides_home = function()
  {
    s_prev = s;
    s += 1;
    if(s > 5) s = 1;

    $(".s" + s).fadeIn(fade_speed, function()
    {
      $(".s" + s_prev).fadeOut(fade_speed);
    });
  }

  var cycle_slides_history = function()
  {
    h_prev = h;
    h += 1;
    if(h > 15) h = 1;

    $(".h" + h).fadeIn(fade_speed, function()
    {
      $(".h" + h_prev).fadeOut(fade_speed);
    });
  }

  var cycle_slides_menu = function()
  {
    m_prev = m;
    m += 1;
    if(m > 9) m = 1;

    $(".m" + m).fadeIn(fade_speed, function()
    {
      $(".m" + m_prev).fadeOut(fade_speed);
    });
  }

  var cycle_slides_bar = function()
  {
    b_prev = b;
    b += 1;
    if(b > 4) b = 1;

    $(".b" + b).fadeIn(fade_speed, function()
    {
      $(".b" + b_prev).fadeOut(fade_speed);
    });
  }

  setInterval(cycle_slides_home, 4000);
  setInterval(cycle_slides_history, 4000);
  setInterval(cycle_slides_menu, 4000);
  setInterval(cycle_slides_bar, 4000);

  $("#clear").click(function(e)
  {
    $("#name, #email, #phone, #message").val("");
    e.preventDefault();
  });

  google.maps.event.addDomListener(window, 'load', init);

  var map;

  function init()
  {
      var mapOptions = {
          center: new google.maps.LatLng(42.422094,-71.654448),
          zoom: 12,
          zoomControl: true,
          zoomControlOptions: {
              style: google.maps.ZoomControlStyle.SMALL,
          },
          disableDoubleClickZoom: true,
          mapTypeControl: false,
          scaleControl: false,
          scrollwheel: false,
          streetViewControl: false,
          draggable : true,
          overviewMapControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles:  [ 
      { 
        featureType: 'water', 
        elementType: 'geometry', 
        stylers: [ 
          { "visibility": "on" }, 
          { "color": "#aee2e0" } ] 
        },
      { 
        featureType: 'landscape', 
        elementType: 'geometry.fill', 
        stylers: [ 
          { color: '#abce83' } ] 
      },{ 
        featureType: 'poi', 
        elementType: 'geometry.fill', 
        stylers: [ 
          { color: '#769E72' } ] 
      },{ 
        featureType: 'poi', 
        elementType: 'labels.text.fill', 
        stylers: [ 
          { color: '#7B8758' }, 
        ] 
      },{ 
        featureType: 'poi', 
        elementType: 'labels.text.stroke', 
        stylers: [ 
          { color: '#EBF4A4' }, 
        ] 	
      },{ 
        featureType: 'poi.park', 
        elementType: 'geometry', 
        stylers: [ 
          { visibility: 'simplified' }, 
          { color: '#8dab68' } 
        ] 
      },{
        featureType: 'road', 
        elementType: 'geometry.fill', 
        stylers: [ 
          { visibility: 'simplified' }, 
        ]
      },{
        featureType: 'road', 
        elementType: 'labels.text.fill', 
        stylers: [ 
          { color: '#5B5B3F' } 
        ]
      },{
        featureType: 'road', 
        elementType: 'labels.text.stroke', 
        stylers: [ 
          { color: '#ABCE83' } 
        ]
      },{
        featureType: 'road', 
        elementType: 'labels.icon', 
        stylers: [ 
          { visibility: 'off' } 
        ]	
      },{  
        featureType: 'road.local', 
        elementType: 'geometry', 
        stylers: [ 
          { color: '#A4C67D' }, 
        ]
      },{ 
        featureType: 'road.arterial', 
        elementType: 'geometry', 
        stylers: [  
          { color: '#9BBF72' } 
        ] 
      },{ 
        featureType: 'road.highway', 
        elementType: 'geometry', 
        stylers: [ 
          { color: '#EBF4A4' } 
        ] 
      },{  
        featureType: 'transit', 
        stylers: [  
          { visibility: 'off' } 
        ] 	 
      },{ 
        featureType: 'administrative', 
        elementType: 'geometry.stroke', 
        stylers: [ 
          { visibility: 'on' }, 
          { color: '#87ae79' } 
        ] 
      },{ 
        featureType: 'administrative', 
        elementType: 'geometry.fill', 
        stylers: [ 
          { color: '#7f2200' }, 
          { visibility: 'off' } 
        ] 
      },{ 
        featureType: 'administrative', 
        elementType: 'labels.text.stroke', 
        stylers: [ 
          { color: '#ffffff' }, 
          { visibility: 'on' }, 
          { weight: 4.1 } 
        ] 
      },{ 
        featureType: 'administrative', 
        elementType: 'labels.text.fill', 
        stylers: [ 
          { color: '#495421' }, 
        ] 			
      },{ 
        featureType: 'administrative.neighborhood', 
        elementType: 'labels', 
        stylers: [ { visibility: 'off' } ] 
      } 
    ],
      
      }

      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var locations = [
          ['544', 42.4177032, -71.653896]
      ];

      for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
              icon: '',
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map
          });
      }
  }
});
