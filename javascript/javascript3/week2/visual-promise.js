const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

async function translateOneByOne() {
  try {
    await moveElement(redBox, { x: 20, y: 300 });
    console.log('red box is moved');
    await moveElement(blueBox, { x: 400, y: 300 });
    console.log('blue box is moved');
    await moveElement(greenBox, { x: 400, y: 20 });
    console.log('green box is moved');
  } catch (error) {
    console.error('there is an error');
  }
}
translateOneByOne();

function translateAllAtOnce() {
  const promise1 = moveElement(redBox, { x: 20, y: 300 });
  const promise2 = moveElement(blueBox, { x: 400, y: 300 });
  const promise3 = moveElement(greenBox, { x: 400, y: 20 });
  Promise.all([promise1, promise2, promise3])
    .then(() => {
      console.log("all in one");
    })
}
translateAllAtOnce();