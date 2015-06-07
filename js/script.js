function runningMain() {
  $(document).ready(function() {
    $('.gridTile').hover(function() {
      $(this).fadeTo('fast', 1);
    });
  });
};

function runningTrails() {
  $(document).ready(function() {
    $('.gridTile').hover(function() {
      $(this).fadeTo(100, 1);
    }, function() {
      $(this).fadeTo(100, 0.5);
    });
  });
};

function runningRainbow() {
  $(document).ready(function() {
    $('.gridTile').hover(function() {
      var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      $(this).css('background-color', randomColor);
    });
  });
};

function init() {
  for(i = 0; i < 100; i++) {
    $('.gridWrapper').append('<div class="gridTile"> </div>');
  };
  runningMain();
}

function createGrid() {
  x = prompt("Please enter an integer between 1 and 128, it will be squared to form the dimensions.");

  if (x > 128) {
    return false;
  }

  squarePxDim = 500 / x;
  squares = x * x;
  $('.gridTile').remove();
  for(i = 0; i < x * x; i++) {
    $('.gridWrapper').append('<div class="gridTile"> </div>');
  };
  $('.gridTile').width(squarePxDim);
  $('.gridTile').height(squarePxDim);
  runningMain();
}

function resetGrid() {
  $('.gridTile').remove();
  init();
  runningMain();
};

function startTrails() {
  runningTrails();
};

function startRainbow() {
  runningRainbow();
};

init();