# project related to DOM

## project 1

```javaScript
console.log("Kinza Iltaf")

console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2

### Background changind project

``` JS

//generate random colors

const RandomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let stop;

const changeColor = function(){
  document.body.style.backgroundColor = RandomColor();
}

const startChangingColor = function () {
  if (stop == null) {
    stop = setInterval(changeColor, 1000);
  }

}

  const stopChangingColor = function(){
    clearInterval(stop);
    stop = null;
  }


document.getElementById('start').addEventListener('click', startChangingColor);

document.getElementById('stop').addEventListener('click', stopChangingColor);






```

## project 3 

### KeyBoard key Tracking

``` JS

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key } </td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>

   </div> `;
});

```
