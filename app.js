// First Cat Object
var catOne = {
  catDiv: $('.cat-one'),
  name: 'Kitty',
  img: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
  clicks: 0
};

// Second Cat Object
var catTwo = {
  catDiv: $('.cat-two'),
  name: 'Catty',
  img: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
  clicks: 0
};


// Function that adds cat objects properties to HTML
(function catsToHtml(){
  catOne.catDiv.html(`<h3>` + catOne.name + `</h3>` + `<img src ="` + catOne.img + `" alt "cat">` + `<p class = "one">Clicks: 0</p>`);
  catTwo.catDiv.html(`<h3>` + catTwo.name + `</h3>` + `<img src ="` + catTwo.img + `" alt "cat">` + `<p class = "two">Clicks: 0</p>`);
})();

// Event listeners for the first and the second cat
catOne.catDiv.click(function(e) {
  var catPar = $('.one')
  catOne.clicks++;
  catPar.text("Clicks: " + catOne.clicks);
});

catTwo.catDiv.click(function(e) {
  var catPar = $('.two')
  catTwo.clicks++;
  catPar.text("Clicks: " + catTwo.clicks);
})
