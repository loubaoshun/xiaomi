window.onload = function () {
    var householdli = document.querySelectorAll('main .superbig .middle .household .top ul li');
    var householdul = document.querySelectorAll('main .superbig .middle .household .right ul');
    var houselen = householdli.length;
    for (var i = 0; i < houselen; i++) {
        householdli[i].index = i;
        householdli[i].onmouseover = function () {
            for (var j = 0; j < houselen; j++) {
                householdli[j].style.color = '#333';
                householdli[j].style.borderBottom = '0';
                householdul[j].style.display = 'none';
            }
            householdli[this.index].style.color = '#ff6700';
            householdli[this.index].style.borderBottom = '2px solid #ff6700';
            householdul[this.index].style.display = 'block';
        }
    }
};