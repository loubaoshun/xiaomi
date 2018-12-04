window.onload = function () {
    var endTime = 60 * 60 * 5;
    if (endTime >= 0) {
        hou = Math.floor(endTime / 60 % 5);
        min = Math.floor(endTime / 60);
        sec = Math.floor(endTime % 60);
        document.getElementById('hou').innerHTML = hou;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
        endTime--;
        if (endTime == 0) {
            clearInterval(window.onload)
        }
    }
};