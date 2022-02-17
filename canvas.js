let canvas = document.getElementById("my-canvas")

console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')
c.fillRect(75, 75, 100, 100)
c.fillStyle = 'red';


c.fillRect(225, 125, 200, 40)
c.fillStyle = 'black';

c.fillStyle = 'pink';
c.fillRect(75, 195, 100, 100)

c.strokeStyle="pink"
c.beginPath();
c.beginPath();
c.moveTo(20, 100)
c.lineTo(1000, 500)
c.stroke()


// .arc(x, y, radius, startAngle, endAngle [, anticlockwise] )
// This is the formula for circles

c.beginPath();
c.strokeStyle = "yellow";
c.arc(600, 150, 50, 0, 2 * Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle = "blue";
c.arc(620, 130, 10, 0, 2 * Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle = "blue";
c.arc(580, 130, 10, 0, 2 * Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle = "red";
c.arc(600, 160, 7, 0, 2 * Math.PI);
c.stroke();

for(let i=0; i < 50; i++ ) {
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * (window.innerHeight - 100)
    // the first value will be null to accommodate for no 0 number being drawn
    const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
    const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;

    // Draw Circle
    c.beginPath();
    // replace "black" with the random color selected from the list
    c.strokeStyle = colors[randomIndex];
    c.arc(x, y, 50, 0, 2 * Math.PI);
    c.stroke();
  }



// window.onclick = () => {
//   for() {

//   }
// }
