function fungsi(num) {
    var tod = document.getElementById('value').value;

    document.getElementById('value').innerHTML = tod + num;
}

function result() {
    var tod = document.getElementById('value').value; 
    document.getElementById('value').innerHTML = eval(tod);
}

function res() {
    document.getElementById('value').innerHTML="";
}

function del() {
    var tod = document.getElementById('value').value;
    document.getElementById('value').innerHTML = tod.slice(0,-1);
}

var bgColor = document.getElementsByClassName('theme-1-2');

var i = 0;
function toggle1() {
    var elem = document.getElementById('toggle');
    var elem1 =document.getElementsByClassName('theme-1-3');
    var elem2 =document.getElementsByClassName('theme-1-4');
    var elem3 = document.getElementsByClassName('theme-1-5');
    var elem4 = document.getElementsByClassName('theme-1-6');
    var elem5 = document.getElementsByClassName('theme-1-1');
    var elem6 = document.getElementsByClassName('theme-1-7');
    var elem7 = document.getElementsByClassName('theme-1-8');

    switch (i) {
        case 0:
        elem.style.left = '32px';
        bgColor[0].style.backgroundColor = 'hsl(0, 0%, 90%)';
        
        for (let u = 0; u < elem1.length; u++) {
            elem1[u].style.backgroundColor = "white";
          }
     
        elem1[1].style.border = "white";

        for (let u = 0; u < elem2.length; u++) {
            elem2[u].style.color = "hsl(60, 10%, 19%)";
          }

        for (let u = 0; u < elem3.length; u++) {
            elem3[u].style.backgroundColor = "hsl(0, 5%, 81%)";
        }

        for (let u = 0; u < elem4.length; u++) {
            elem4[u].style.backgroundColor = "hsl(185, 42%, 37%)";
        }


        i = 1;
        break;
    case 1:
        elem.style.left = '62px';

        bgColor[0].style.backgroundColor = 'hsl(268, 75%, 9%)';
        
        for (let u = 0; u < elem1.length; u++) {
            elem1[u].style.backgroundColor = "hsl(268, 71%, 12%)";
          }
     
        elem1[1].style.border = "hsl(268, 71%, 12%)";
        

        for (let u = 0; u < elem2.length; u++) {
            elem2[u].style.color = "hsl(52, 100%, 62%)";
          }

        for (let u = 0; u < elem3.length; u++) {
            elem3[u].style.backgroundColor = "hsl(268, 71%, 12%)";
        }

        for (let u = 0; u < elem4.length; u++) {
            elem4[u].style.backgroundColor = "hsl(281, 89%, 26%)";
        }

        for (let u = 0; u < elem4.length; u++) {
            elem4[u].style.boxShadow = "0 2px 0 0 hsl(285, 91%, 52%)";
        }

        for (let u = 0; u < elem6.length; u++) {
            elem6[u].style.backgroundColor = "hsl(268, 47%, 21%)";
        }

        for (let u = 0; u < elem6.length; u++) {
            elem6[u].style.boxShadow = "0 2px 0 0 hsl(290, 70%, 36%)";
        }

        for (let u = 0; u < elem6.length; u++) {
            elem6[u].style.color = "hsl(52, 100%, 62%)";
        }

        for (let u = 0; u < elem7.length; u++) {
            elem7[u].style.backgroundColor = "hsl(176, 100%, 44%)";
        }


        i=2;
        break;
    case 2:
        elem.style.left = '2px';

        
        bgColor[0].style.backgroundColor = 'hsl(222, 26%, 31%)';
        
        for (let u = 0; u < elem1.length; u++) {
            elem1[u].style.backgroundColor = "hsl(224, 36%, 15%)";
          }
     
        elem1[1].style.border = "hsl(224, 36%, 15%)";
        

        for (let u = 0; u < elem2.length; u++) {
            elem2[u].style.color = "white";
          }

        for (let u = 0; u < elem3.length; u++) {
            elem3[u].style.backgroundColor = "hsl(223, 31%, 20%)";
        }

        for (let u = 0; u < elem4.length; u++) {
            elem4[u].style.backgroundColor = "hsl(225, 21%, 49%)";
        }

        for (let u = 0; u < elem4.length; u++) {
            elem4[u].style.boxShadow = "0 2px 0 0 hsl(224, 36%, 15%)";
        }

        for (let u = 0; u < elem6.length; u++) {
            elem6[u].style.backgroundColor = "white";
        }

        for (let u = 0; u < elem6.length; u++) {
            elem6[u].style.boxShadow = "0 2px 0 0  grey";
        }

        for (let u = 0; u < elem6.length; u++) {
            elem6[u].style.color = "hsl(221, 14%, 31%)";
        }

        for (let u = 0; u < elem7.length; u++) {
            elem7[u].style.backgroundColor = " hsl(6, 63%, 50%)";
        }
        i=0;
    }

}
