var cmds = {
    help: "You may use any of the following commands:<br>-help<br>-ls<br>-cd<br>",
    ls: "Not implemented",
    cd: "Not implemented",
    ask: "Not implemented",
    date: function() {
        var d = new Date();
        return d.toString();
    },
}
