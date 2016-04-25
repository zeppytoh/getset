var feed = new Instafeed({
        get: 'user',
        userId: '3145213841',
        accessToken: '3145213841.1654d0c.118a1c0830a94524bb890e721e69db2e',
        template: '<div class="column"><a href="{{link}}"><img src="{{image}}" /></a><p class="likes">&#10084; {{likes}} &nbsp; &#128172; {{comments}}</p><p class="caption">{{caption}}</p></div>',
        resolution: 'standard_resolution',       
        after: function() {
			var el = document.getElementById('instafeed');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});
var getsetfeed= new Instafeed ({
        get: 'user',
        target: 'getsetfeed',
        userId: '3145213841',
        accessToken: '3145213841.1654d0c.118a1c0830a94524bb890e721e69db2e',
        template: '<div class="column"><a href="{{link}}"><img src="{{image}}" /></a><p class="likes">&#10084; {{likes}} &nbsp; &#128172; {{comments}}</p><p class="caption">{{caption}}</p></div>',
        resolution: 'standard_resolution',
        filter: function(image) {
          return image.tags.indexOf('Repost') >= 0;
        }
})
$(document).foundation();
feed.run();
//getsetfeed.run();
