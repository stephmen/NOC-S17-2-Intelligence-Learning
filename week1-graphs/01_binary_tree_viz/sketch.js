var canvasWidth = 720;
var canvasHeight = 480;

var tree;

function setup() {
  createCanvas(canvasWidth+40, canvasHeight);
  background(51);
  tree = new Tree();
  for (var i = 0; i < 20; i++) {
    tree.addValue(floor(random(0, 100)));
  }
  console.log(tree);
  tree.traverse();

  var result = tree.search(10);
  if (result == null) {
    console.log('not found');
  } else {
    console.log(result);
  }
}
