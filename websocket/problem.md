
# Problem statement <br><br>

So we have 2 grids as shown in screenshot(ss). Now these grids are on different
html pages, and both html pages would have their own browser tabs, but these tabs could be of different browsers, for instance the coloured grid could be on google chrome and uncoloured could be on Brave/Microsoft Edge.<br><br>

Now when user clicks on any of the coloured cell then corresponding cell in uncoloured grid would be filled with that colour. For instance user clicks on white cell, then its position (2,0), the cell in uncoloured grid at that position would be filled with white colour; same applies for other coloured cells too.<br><br>

Now we are trying to acheive this functionality by establishing connection websocket socket connections between grids and server, although this could be acheived via http connection between grid 1 (the coloured grid) and server; and via server-side events (SSE) between server and grid 2 (uncoloured).<br><br>

So show how to achieve this architecture using web sockets.