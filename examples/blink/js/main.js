var s = Snap(800, 600);

// Circle with 80px radius
var circle = s.circle(90,120,80);
// Square with 160px side width
var square = s.rect(210,40,160,160);
// Ellipse with 80px vertical radius and 50px horizontal radius
var ellipse1 = s.ellipse(460,120,50,80);


circle.attr({
  fill: 'coral',
  stroke: 'coral',
  strokeOpacity: .3,
  strokeWidth: 10
});
 
square.attr({
  fill: 'lightblue',
  stroke: 'lightblue',
  strokeOpacity: .3,
  strokeWidth: 10
});
 
ellipse1.attr({
  fill: 'mediumturquoise',
  stroke: 'mediumturquoise',
  strokeOpacity: .2,
  strokeWidth: 10
});


var circle_1 = s.circle(300, 400, 140);
var circle_2 = s.circle(250, 400, 140);
 
// Group circles together
// Grouping makes groups (duh) out of vectors
 
var circles = s.group(circle_1, circle_2);

var ellipse = s.ellipse(275, 420, 170, 90);
 
// Masking

circles.attr({
  fill: 'coral',
  fillOpacity: .6,
  // Enter Jim Carrey
  mask: ellipse
});

ellipse.attr({
  fill: '#fff',
  opacity: .8
});

// Create a blink effect by modifying the rx value
// for ellipse from 90px to 1px and backwards
 
function blink(){
  ellipse.animate({ry:1}, 220, function(){
    ellipse.animate({ry: 90}, 300);
  });
};
 
// Recall blink method once every 3 seconds
 
setInterval(blink, 3000);

