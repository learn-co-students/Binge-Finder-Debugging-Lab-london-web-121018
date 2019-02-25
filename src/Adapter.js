class Adapter {
  static getShows = () => {
    return fetch("http://api.tvmaze.com/shows").then(res => {
      return res.json();
    });
  };

  static getShowEpisodes(showID) {
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`).then(res => {
      return res.json();
    });
  }
}

export default Adapter;
