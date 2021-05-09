import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMatchInfo } from '../api/api';
import Cricbuzz from './Cricbuzz';
import ListCard from './ListCard';
import SearchIcon from "@material-ui/icons/Search";



function GetMatches() {
    const [matches, setMatches] = useState([]);
    const [search, setSearch] = useState("");
    const matchType = matches.filter((match) => {
        return (
          match.type.toLowerCase().includes(search.toLowerCase()) ||
          match["team-1"].toLowerCase().includes(search.toLowerCase()) ||
          match["team-2"].toLowerCase().includes(search.toLowerCase())
        );
    });

    const limit = matches.slice(0,5);

    useEffect(() => {
        getMatchInfo()
        .then((data) => {setMatches(data.matches)
            //console.log(data);
        })
        .catch((err) => {console.log(err)})
    }, []);
    //console.log(matches);
    return(
        <>
            <Cricbuzz limit={limit} key= {limit.unique_id}/>
            <div className="cricbuzz__headerSearch">
                <div className="cricbuzz__headerSearchIcon">
                    <SearchIcon
                    style={{
                        color: "white",
                    }}
                    />
                    <input onChange = {(e) => setSearch(e.target.value)} placeholder="Search" />
                </div>
            </div>
            {
            matchType.length !== 0
                ? matchType.map((match) => (
                    <ListCard key={match.unique_id} matchData={match} />
                ))
                : matches.map((match) => (
                    <ListCard key={match.unique_id} matchData={match} />
                ))
            //alert('No matches found')
            }
        </>
    )
}


export default GetMatches;