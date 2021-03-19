const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const redTarget = { x: 20 - parseInt(redBox.style.left), y: 300 - parseInt(redBox.style.top) };
const blueTarget = { x: 400 - parseInt(blueBox.style.left), y: 300 - parseInt(blueBox.style.top) };
const greenTarget = { x: 400 - parseInt(greenBox.style.left), y: 20 - parseInt(greenBox.style.top) };

async function translateOneByOne() {
  try {
    await moveElement(redBox, redTarget);
    console.log('red box is moved');
    await moveElement(blueBox, blueTarget);
    console.log('blue box is moved');
    await moveElement(greenBox, greenTarget);
    console.log('green box is moved');
  } catch (error) {
    console.error('there is an error');
  }
}
translateOneByOne();

function translateAllAtOnce() {
  const promise1 = moveElement(redBox, redTarget);
  const promise2 = moveElement(blueBox, blueTarget);
  const promise3 = moveElement(greenBox, greenTarget);
  Promise.all([promise1, promise2, promise3])
    .then(() => {
      console.log("all in one");
    })
}
//translateAllAtOnce();