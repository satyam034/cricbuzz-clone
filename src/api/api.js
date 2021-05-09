const API_KEY = "gWhoJRAh0NMu1mOdgVVafYhaEYF3";


export const getMatchInfo = () => {
    const url = `https://cricapi.com/api/matches/${API_KEY}`;

    return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getMatchScore = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
  
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log("Error: ", err));
  };

  export const getPlayerStat = (name) => {
    const url = `https://cricapi.com/api/playerFinder?apikey=${API_KEY}&name=${name}`;
  
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  export const getPlayerDesc = (id) => {
    const url = `https://cricapi.com/api/playerStats?apikey=${API_KEY}&pid=${id}`;
  
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };