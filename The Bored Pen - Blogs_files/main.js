$(document).ready(function() {
    var currentPage = $('#pageId').val();

    if (currentPage == 'adminDashboard') {
        tinymce.init({
          selector: '#description'
        });

        $(".blogDeleteLink").click(function(e) {
            $("#blogDeleteButton").attr("href",
            "/admin/blogs/" + $(event.target).siblings(".blogId").val() + "/delete");
        });
    }
});
