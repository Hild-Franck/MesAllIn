global.$ = $;

// var abar = require('address_bar');
// var folder_view = require('folder_view');
var Facebook = require('facebook');
var gui = require('nw.gui');

var facebook = new Facebook('', '');

// alert(process.platform);
// Extend application menu for Mac OS
//if (process.platform == "darwin") {
//  var menu = new gui.Menu({type: "menubar"});
//  menu.createMacBuiltin && menu.createMacBuiltin(window.document.title);
//  gui.Window.get().menu = menu;
//}

// var App = {
//   change folder for sidebar links
//   cd: function (anchor) {
//     anchor = $(anchor);

//     $('#sidebar li').removeClass('active');
//     $('#sidebar i').removeClass('icon-white');

//     anchor.closest('li').addClass('active');
//     anchor.find('i').addClass('icon-white');

//     this.setPath(anchor.attr('nw-path'));
//   },

//   set path for file explorer
//   setPath: function (path) {
//     if (path.indexOf('~') == 0) {
//       path = path.replace('~', process.env['HOME']);
//     }
//     this.folder.open(path);
//     this.addressbar.set(path);
//   }
// };

$(document).ready(function() {
  // var folder = new folder_view.Folder($('#files'));
  // var addressbar = new abar.AddressBar($('#addressbar'));

  // folder.open(process.cwd());
  // addressbar.set(process.cwd());

  // App.folder = folder;
  // App.addressbar = addressbar;

  // folder.on('navigate', function(dir, mime) {
  //   if (mime.type == 'folder') {
  //     addressbar.enter(mime);
  //   } else {
  //     gui.Shell.openItem(mime.path);
  //   }
  // });

  // addressbar.on('navigate', function(dir) {
  //   folder.open(dir);
  // });

  // sidebar favorites
  $('[friend_id]').bind('click', function (event) {
    event.preventDefault();
  });
  
  facebook.then(function(api) {
    api.getFriendsList(function(err, data) {
      if(err) return console.error(err);
      data.forEach(function(element) {
        $('#sidebar').append('<li>\
                                <a href="#" friend_id="'+ element.userID +'"><img src="'+ element.profilePicture +'"> '+ element.fullName +'</a>\
                              </li>\
        ')
      }, this);
    }.bind(this));
  })
  
  gui.Window.get().show();
});
