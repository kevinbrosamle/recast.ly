var searchYouTube = ({query, max = 5, key}, callback) => {
  // TODO
  // ajax
  // url
  // in success push the results to an array
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: query,
      key: key,
      maxResults: max,
      type: 'video',
      videoEmbeddable: true
    },
    dataType: 'json',
  })
  .done(function({items}) {
    // console.log(callback, 'callback');
    return items.map(function(item) {
      callback(items);
    });
  });
};

window.searchYouTube = searchYouTube;
