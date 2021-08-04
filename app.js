var date = new Date();
var page_index = 0;
var pages = ["main", "profile", "project", "contact"];

$(document).ready(() => {
    $("#timestamp").text("Welcome to noah nevens version 3-2021-beta " + (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear());
})

$(".pageLink").on("click", function(event) {
    event.preventDefault();
    updateCurrentPage(event.target.id);
})

function updateCurrentPage(id) {
    var next_page_index = pages.indexOf(id);
    var current_page_index = page_index;
    page_index = next_page_index;
    $("#" + pages[current_page_index] + "Page").fadeOut(175, () => {
        $("#" + pages[next_page_index] + "Page").fadeIn(175);
    })
}
