console.log("cjs script works");
defaultBranch();
window.onclick = function() {
    setTimeout(
        function(){
            defaultBranch();
            
        }, 1000);
}
function defaultBranch() {
    var path = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    if (path === 'branches' && !findGetParameter('sort')) {
        window.location.href = window.location.href + "?sort=recently_updated"
    }
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}
