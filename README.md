# keyCmd
keyCmd
```
//keycode

<head>
  <title>keycode</title>  
</head>
<body>
  <script>
var data=`
0,48
1,49
2,50
3,51
4,52
5,53
6,54
7,55
8,56
9,57
A,65
B,66
C,67
D,68
E,69
F,70
G,71
H,72
I,73
J,74
K,75
L,76
M,77
N,78
O,79
P,80
Q,81
R,82
S,83
T,84
U,85
V,86
W,87
X,88
Y,89
Z,90
F1 ,112
F2 ,113
F3 ,114
F4 ,115
F5 ,116
F6 ,117
F7 ,118
F8 ,119
F9 ,120
F10,121
F11,122
F12,123
F13,124
F14,125
F15,126
BackSpace,8
Tab,9
Clear,12
Enter,13
Command,15
Shift,16
Ctrl,17
Alt,18
CapsLock,20
Esc,27
Space,32
PageUp,33
PageDown,34
End,35
Home,36
Up,38
Left,37
Right,39
Down,40
Insert,45
Delete,46
NumLock,144
,,188
.,190
/,191
[,219
\\,220
],221
<,188
>,190
?,191
{,219
|,220
},221

`.trim().split('\n').map(d=>d.split(','));

//[97,98,99,100,101,102,103,104,105] //Numpad1 ~
let fn={}
fn.ce=(d=>document.createElement(d))
fn.css=(d=>{let el=fn.ce('link');el.setAttribute('rel','stylesheet');el.href=d;return el})
fn.q=(d=>document.querySelector(d))
;
document.body.classList.add('monocc');
let $t=fn.ce('p')
,$css=fn.css('https://gnjo.github.io/monocc.css')
,$pre=fn.ce('pre')
;
$t.innerHTML='keycode';
$pre.innerHTML= data.map(d=>`<li>${d}</li>`).join('');
[$css,$t,$pre].forEach((d)=>document.body.appendChild(d))
    
  </script>
</body>  
```
