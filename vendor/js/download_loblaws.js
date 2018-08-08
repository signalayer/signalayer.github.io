var REDIRECT_URL = 'demo.html';
var GUIDE_URL = 'vendor/files/Signalayer_Case study_Loblaws.pdf';
var FILE_NAME = "Signalayer_Case study_Loblaws";


/* Helper function */
function download_file(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1);
        save.download = fileName || filename;
        if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
            document.location = save.href;
// window event not working here
        } else {
            var evt = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        }
    }

    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}


function proceedDownloading() {
    download_file(GUIDE_URL, FILE_NAME);

    setTimeout(function () {
        var a = document.createElement('a');
        a.href = REDIRECT_URL;
        document.body.appendChild(a);
        a.click();
    }, 1000);
}

function waitForElement(cb) {
    var doneForm = $('.w-form-done')[0];
    var failForm = $('.w-form-fail')[0];
    
    if ((doneForm.style.display == 'block') || (failForm.style.display == 'block')) {
        cb((doneForm.style.display == 'block'));
    } else {
        setTimeout(function () {
            waitForElement(cb);
        }, 500);

    }
}

$("[name='email-form']").submit(function (e) {
    waitForElement(function (done) {
        if (done) {
            proceedDownloading();
        }
    });
});
