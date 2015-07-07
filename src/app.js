/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 credits : https://thenounproject.com/term/sprinkler/166720/
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main_screen = new UI.Card({
  title: 'OpenSprinkler',
  icon: 'images/noun_166720_cc.png',
  subtitle: 'subtitle here',
  body: 'Press something'
});

main_screen.show();

main_screen.on('click', function(e){
  var menu = new UI.Menu({
    sections:[{
      items: [{
        title: 'Manual',
        icon: 'noun_166720_cc.png',
        subtitle: 'subtitle'
      },{
        title: 'logs',
        subtitle: 'subtitle about logs'
      }]
    }]
  });
  
  menu.on('select', function(e){
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  
  menu.show();
  
});

// var main = new UI.Card({
//   title: 'OpenSprinkler',
//   icon: 'images/.png',
//   subtitle: 'Hello World!',
//   body: 'Press any button.'
// });


// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
// });

// main.on('click', 'select', function(e) {
//   var wind = new UI.Window({
//     fullscreen: true,
//   });
//   var textfield = new UI.Text({
//     position: new Vector2(0, 65),
//     size: new Vector2(144, 30),
//     font: 'gothic-24-bold',
//     text: 'Text Anywhere!',
//     textAlign: 'center'
//   });
//   wind.add(textfield);
//   wind.show();
// });

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });
