const box = document.querySelector('.box');
const btn = document.querySelector('.btn');
const disk = document.querySelector('.disk');

let road = 0;
function move() {
  road += 1;
  box.style.left = road + 'px';
  disk.style.left = road + 'px';
  console.log(road);
  if (road > 1500) {
    return true;
  }
  setTimeout(move, 10);
}

btn.addEventListener('click', () => {
  move();
})