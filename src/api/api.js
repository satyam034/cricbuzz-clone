const API_key = "gWhoJRAh0NMu1mOdgVVafYhaEYF3";


export const getMatchInfo = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url).then((res) => 
    res.json()).catch((err) =>
    console.log(err));
}


export const getMatchScore = () => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url).then((res) => 
    res.json()).catch((res) => 
    console.log(err));
}