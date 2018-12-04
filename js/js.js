var nna = document.querySelector('aside ul .last');
console.log(nna);
window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 8000) {
        nna.style.display = 'block';
    } else if (scrollTop < 8000) {
        nna.style.display = 'none';
    }
});
var videodiv = document.querySelector('body .fix-video');
var videolow = document.querySelectorAll('body .fix-video div');
var videoli = document.querySelectorAll('body .fix-video div ul .li');
var videofig = document.querySelectorAll('main .superbig .video .bottom figure');
var videolen = videofig.length;
for (var videoi = 0; videoi < videolen; videoi++) {
    videofig[videoi].index = videoi;
    videofig[videoi].onclick = function () {
        for (var videoj = 0; videoj < videolen; videoj++) {
            videodiv.style.display = 'none';
            videolow[videoj].style.display = 'none';
        }
        videodiv.style.display = 'block';
        videolow[this.index].style.display = 'block';
    };
    videoli[videoi].onclick = function () {
        videodiv.style.display = 'none';
    }
}
