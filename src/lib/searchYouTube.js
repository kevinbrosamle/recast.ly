var searchYouTube = (options, callback) => {
  // TODO
  // ajax
  // url
  // in success push the results to an array
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    success: function(videos) {
      console.log('ajax working');
    }
  });
};

window.searchYouTube = searchYouTube;
// option = {query: 'string', max: 5, key:YOUTUBE_API_KEY}