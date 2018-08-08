// $("#guide-email-form").submit(function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//
//     var email = this.elements.email.value;
//     var name = this.elements.name.value;
//
//     $.ajax({
//         type: "POST",
//         url: "https://dashboard.signalayer.com/api/sm-list/",
//         crossDomain: true,
//         data: {email: email, name: name, list: "guide"},
//         success: function () {
//             $("#guide-email-form").hide();
//             $(".w-form-done").show();
//         },
//         error: function () {
//             $(".w-form-fail").show();
//         }
//     });
// });

$("#service-email-form").submit(function (e) {
    e.preventDefault();
    e.stopPropagation();

    var email = this.elements.email.value;
    var name = this.elements.name.value;

    $.ajax({
        type: "POST",
        url: "https://dashboard.signalayer.com/api/sm-list/",
        crossDomain: true,
        data: {email: email, name: name, list: "service"},
        success: function () {
            $("#service-email-form").hide();
            $(".w-form-done").show();
        },
        error: function () {
            $(".w-form-fail").show();
        }
    });
});