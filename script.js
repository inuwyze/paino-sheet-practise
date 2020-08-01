console.log(document.documentElement.scrollHeight);
const dot=document.getElementById('dot');
let x=8;

keys=['C','D','E','F','G','A','B']

function dtt(){
    var sp=30;
    dot.style.top=`${340-sp*x}px`;
    dot.setAttribute('data-content', keys[x%7]);
    // dot.style.top=`${sp*x+50}px`
    console.log('ola')
    x++;
}
dtt()
// setInterval(dtt,1000)

