// $(function() {
  var features = {
    names: ['Catty', 'Catsy', 'Kitty', 'Cattat', 'Kitten', 'Cattini'],
    pictures: ['http://img2.timeinc.net/health/img/web/2013/03/slides/cat-allergies-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_kitten_purring-1-400x400.jpg?x10150',
              'http://redalertpolitics.com/files/2013/06/Hamilton-the-hipster-cat1-400x400.jpg',
              'https://d20suvt5sog3wj.cloudfront.net/wp-content/uploads/2017/01/ourfriends4ever_cat_snow_outdoor-1-400x400.jpg?x10150',
              'https://www.snowflakerescue.org/media/cat-tear-400x400.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sW-1MqO86nzMrQ1fsf_e1ecU2FyxnEGjj4gwIawMvi08ZoiA'
            ]
  }
  var catsArr = [];

  var Cat = function(name, img, id){
    this.name = name
    this.img = img
    this.id = id
    this.imgTag = '<img>'
    this.clicks = 0;
  };

  Cat.prototype.moveToDom = function() {
    var catList = $('.cat-list');
    catList.append(
      $('<li>').attr('id', this.id).append(
          $(this.imgTag).attr('src', this.img)
        ));
      $('#' + this.id).append(
        $('<h3>').text(this.name),
        $('<p>').text('Clicks: ' + this.clicks)
        );
  };

  // var eListeners = {
  //   catClickTracker: (function() {
  //     var list = $('.cat-list');
  //     list.click(function(event) {
  //       $(event.target).addClass('selected');
  //     });
  //   })()
  // };

  (function init(){
    for (var i = 0; i < features.names.length; i++) {
      var currentName = features.names[i];
      var currentPic = features.pictures[i];
      var currentId = i.toString();
      catsArr.push(new Cat(currentName, currentPic, currentId));
      catsArr[i].moveToDom();
      // catsArr[i].$(imgTag).click(function(){
      //   console.log('clicked');
      // })
    }
  })();



// });
