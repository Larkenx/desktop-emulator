var apps = {
    terminal: `
      <div id="terminal_window">
        <div id="terminal_window_bar" class="w3-grey"><canvas id="canvas" width="400" height="15"></canvas></div>
        <form action="" id="terminal_form" class="w3-container w3-card-12 w3-dark-grey">
            <ul id="history"></ul>
            <div style="white-space:nowrap">
                <label id="bash_profile" for="console">[guest@larkenx.net ~] $ </label>
                <input id="console" class="w3-rest" autofocus autocomplete="off" type="text"></input>
            </div>
        </form>
      </div>`,
}
