var songtext;
$(document).ready(function() {
  songtext = [ // [lyrics, Bohemian Rapsody, QUEEN
    ["Is this the real life?", 1500],
    ["</br> Is this just fantasy?", 1500],
    ["</br> Caught in a landslide, no escape from reality,", 1500],
    ["</br> Open your eyes, look up to the skies and see,", 1500],
    ["</br> Im just a poor boy, I need no sympathy,", 1500],
    ["</br> Because Im easy come, easy go, little high, little low,", 1500],
    ["</br> Any way the wind blows doesnt really matter to me,", 1500],
    ["</br> To me.", 1500],

    ["</br> </br> Mama, just killed a man", 1500],
    ["</br> Put a gun against his head", 1500],
    ["</br> Pulled my trigger, now he's dead", 3500],
    ["</br> Mama, life had just begun", 1500],
    ["</br> But now I've gone and thrown it all away.", 3500],

    ["</br> </br> Mama, ooh", 1500],
    ["</br> Didn't mean to make you cry", 900],
    ["</br> If I'm not back again this time tomorrow", 900],
    ["</br> Carry on, carry on", 900],
    ["</br> As if nothing really matters.", 900],

    ["</br> </br> Too late, my time has come", 900],
    ["</br> Sends shivers down my spine", 900],
    ["</br> Body's aching all the time", 900],
    ["</br> Goodbye, everybody, Ive got to go,", 900],
    ["</br> Gotta leave you all behind and face the truth,", 1000],
    ["</br> Mama, ooh (Any way the wind blows),", 800],
    ["</br> I dont want to die,", 800],
    ["</br> I sometimes wish Id never been born at all.", 1000],

    ["</br> </br> I see a little silhouetto of a man", 1000],
    ["</br> Scaramouche, Scaramouche, will you do the ", 1000],
    ["</br> Fandango? ", 1000],
    ["</br> Thunderbolt and lightning, very very frightning me, ", 1000],
    ["</br> (Galileo) Galileo, (Galileo) Galileo, Galileo Figaro Magnifico, ", 1000],
    ["</br> But Im just a poor boy, nobody loves me, ", 1000],
    ["</br> He's just a poor b oy from a poor family, ", 1000],
    ["</br> Spare him his life from this monstrosity, ", 1000],
    ["</br> East come, easy go, will you let me go? ", 1000],
    ["</br> Bismillah! No, we will not let you go, ", 1000],
    ["</br> (Let him go) Bismillah! We will not let you go, ", 1000],
    ["</br> (Let him go) Bismillah! We will not let you go, ", 1000],
    ["</br> (Let me go) We will not let you go, ", 1000],
    ["</br> (Let me go) We will not let you go, ", 1000],
    ["</br> (Never, never, never, never let me go) Ah, ", 1000],
    ["</br> No, no, no, no, no, no, ", 1000],
    ["</br> (Oh, mamma mia, mamma mia) Mamma mia, let me go, ", 1000],
    ["</br> Beelzebub has the devil put aside for me, for me, for me! ", 1000],

    ["</br> </br> So you think you can stone me and spit in my eye? ", 1000],
    ["</br> So you think you can love me and leave me to die? ", 1000],
    ["</br> Oh, baby, can't do this to me baby! ", 1000],
    ["</br> Just gotta get out, just gotta get right outta here. ", 1000],

    ["</br> </br> (Ooh) ", 1000],
    ["</br> (Ooh, yeah, ooh, yeah) ", 1000],
    ["</br> Nothing really matter, anyone can see, ", 1000],
    ["</br> Nothing really matter, ", 1000],
    ["</br> Nothing really matter to me. ", 1000],
    ["</br> Any way the wind blows. ", 1000],
  ];
  var text = "";
  // [To add text color]
  $.each(songtext, function(a, b) {
    text += "<span id='p" + a + "' style='color:black'>" + b[0] + "</span> ";
  });


  // [to make the 'play' button accessible]
  $('#lyrics').html(text);
  pCount = 0;
  $('#start').on('click', function(e) {
    console.log("buttonClicked");
    e.preventDefault();
    nextWord();
  });


// [to make the 'pause' button accessible]
$('#lyrics').html(text);
pStop = 0;
$('#pause').on('click', function(e) {
  console.log("buttonClicked");
  e.preventDefault();
  stopWord();
});

// // [to make the 'pause' button accessible]
// $('#lyrics').html(text);
// $('button').on('click',"#pause",function(a) { 
//   // When this is fired, function Start() should stop running 
//   clearInterval(intervalHolder);
// }); 

 

});

var pCount = 0;
// [To add text transform color]
function nextWord() {
  $('#p' + pCount).css("color", "blue");
  pCount++;
  if (pCount > songtext.length - 1) return;
  window.setTimeout(nextWord, songtext[pCount - 1][1]);
}


var pStop = 0;
// [To add text transform color]
function stopWord() {
  $('#p' + pStop).css("color", "black");
  pStop++;
  if (pStop == songtext.length == 0) return;
  window.setTimeout(stopWord, songtext[pStop == 0][0]);
}
