function getPage(arquivo){
    $.ajax({
        "url": "files/" + arquivo + ".html",

        "success": function (data) {
            $("section").html(data);
        }
    });
}