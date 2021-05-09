import React, { useEffect, useState } from "react";
import { getMatchInfo, getNews } from "../api/api";
import "./css/Cricbuzz.css";
import Cricbuzz from "./Cricbuzz";
import "./css/News.css";
import spinner from '../img/spinner.gif'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  heading: {
    fontSize: "1.1rem",
    fontWeight: "500",
  },
}));

function SimpleAccordion({news}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className = "accordSummary">
                  <h4 className={classes.heading}>{news.title}</h4>
                  <small>{new Date(news.publishedAt).toLocaleString()}</small>
            </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className = "accordDetails">
              <p>{news.description}</p>
              <img 
                src = {news.urlToImage}
                alt = ""
              />
              <div className = "accordDetailsDesc">
                  <p>{news.content}</p>
              </div>
              <div className = "accordFullStory">
                  <a className = "link" href = {news.url}target = "_blank" rel = "noreferrer noopener">Read Full Story Here</a>
              </div>
              <div className = "accordSource">
                  <p>News Courtsey: <span className = "source">{news.source.name}</span></p>
              </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function News() {
    const [matches, setMatches] = useState([]);
    const [news, setNews] = useState([]);

    const limit = matches.slice(0,5);

    useEffect(() => {
        getMatchInfo().then((data) => {
            setMatches(data.matches.slice(0,5));
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        getNews().then((res) => {
            setNews(res.articles);
            setLoading(false);
            //console.log(res.articles);
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    const [loading, setLoading] = useState(true)
    return(
        <>
      <Cricbuzz key={limit.unique_id} limit={limit} />
        {
            !loading ? (<div className="news">
        <h3>Latest Sports News</h3>
        {news.map((_news) => (
          <SimpleAccordion news={_news} />
        ))}
      </div>) : (<>
        <img 
        style = {{
            position: "absolute",
            width : 260,
            height : 300,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}
            src = {spinner}
            alt = "Loading"
        />
      </>)
        }
      
    </>
    )
}

export default News;