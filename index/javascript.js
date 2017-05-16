sidebar_size = "12.5%"

function toggle_nav() {
	sidebar = document.getElementById("sidebar");
	if (sidebar.style.width == sidebar_size)	/* if navbar is open, close it */
		close_nav();
	else									/* if navbar is closed, open it */		
		open_nav();
} /* toggle_nav() */
function open_nav() {
    document.getElementById("sidebar").style.width = sidebar_size;
    document.getElementById("main").style.marginLeft = sidebar_size;
}
function close_nav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
