'use strict';

var nend_params = {"media":59156,"site":315435,"spot":932277,"type":1,"oriented":3};

window.addEventListener('load', function() {
  var nend_links = document.querySelectorAll('.nend_wrapper a');
  for(var i = 0; i < nend_links.length; i+=1) {
    (function() {
      var href = nend_links[i].href;
      nend_links[i].href = "#";
      nend_links[i].onclick = function(){window.open(href);
      console.log("HREF:" + href);
      return false;}
    })();
  }
});
