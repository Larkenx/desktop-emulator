var apps = {
    terminal: function() {
      $('#desktop').append(
      `<div id="terminal_window">
        <div id="terminal_window_bar" class="w3-grey"><canvas id="terminal_canvas" width="400" height="15"></canvas></div>
        <form action="" id="terminal_form" class="w3-container w3-card-12 w3-dark-grey">
            <ul id="history"></ul>
            <div style="white-space:nowrap">
                <label id="bash_profile" for="console">[guest@larkenx.net ~] $ </label>
                <input id="console" class="w3-rest" autofocus autocomplete="off" type="text"></input>
            </div>
        </form>
      </div>`);
      makeWindow('terminal');
    }
}

function createWindowBar(app) {
    var target = document.getElementById(app + '_canvas');
    target.addEventListener('click', function(e) {
    var mousePos = getMousePos(target, e);
    var buttonHeight = target.height / 2;
    var redButton = { x: 20, y: buttonHeight };
    var yellowButton = { x: 40, y: buttonHeight };
    var greenButton = { x: 60, y: buttonHeight };
    if (getDistance(mousePos, redButton) <= buttonRadius) {
      // Red Button Logic
      $('#history').append('<li>Red Button!</li>');

    } else if (getDistance(mousePos, yellowButton) <= buttonRadius) {
      // Yellow Button Logic
      $('#history').append('<li>Yellow Button!</li>');

    } else if (getDistance(mousePos, greenButton) <= buttonRadius) {
      // Green Button Logic
      $('#history').append('<li>Green Button!</li>');
    }
  });
}

function makeDraggableResizable(app) {
    $('terminal_window').draggable()
                         .draggable("option", "containment", "#desktop")
                         .draggable("option", "cancel", "terminal_form");
    $('terminal_window').resizable({
        minWidth: 400,
        minHeight: 430
    });
};

function makeWindow(app) {
  createWindowBar(app);
  makeDraggableResizable(app);
  drawOSXButtons(app);
}
