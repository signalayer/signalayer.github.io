$(".modal-wrapper").on('click', function (e) {
    if (parseInt(e.currentTarget.style.opacity) == 1) {
        var video = $(".embedly-embed");
        var parent = video.parent();

        video.detach();
        $(parent).append(video);
    }
});