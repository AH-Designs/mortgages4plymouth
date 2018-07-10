var fixers = {
  init : function() {
    fixers.externalLinks();
    fixers.videoIframes();
    if (mobile) {
      fixers.mobiles();
    }
  },
  mobiles : function() {
    FastClick.attach(document.body);
  },
  externalLinks : function() {
    // Make all external links open a new tab automatically.
    $('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if (!a.test(this.href)) {
          if ((this.href.indexOf('callto') == -1) || (this.href.indexOf('mailto') == -1)) {
            $(this).attr("target","_blank");
          }
       }
    });
  },
  videoIframes : function() {
    // Wrap all embedded iframe videos with a div element
    $('iframe[src*="youtube"], iframe[src*="vimeo"]').each(function() {
      if(!$(this).parant('.video-container')) {
        $(this).wrap("<div class='video-container'></div>");
      }
    });
  }
}
