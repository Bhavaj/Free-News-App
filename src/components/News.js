import React from "react";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

import RotatorCircle from "./RotatorCircle";

const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${this.capitalizeFirstLetter(props.category)} - Free News`
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const updateNews= async () => {
    
    props.setProgress(10)
    let apik = props.apiKey;
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&apiKey=${apik}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30)

    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100)
    
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    
    updateNews();
    // eslint-disable-next-line
    
    
  },  []);


 
  const fetchMoreData = async () => {
    let apik = props.apiKey;
    // this.setState({page: this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page+1}&category=${props.category}&apiKey=${apik}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);

    let parsedData = await data.json();
    


    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
  }

  
    return (
      <>
        
        <div className="container">

        <h1 className="text-center titleStyle">Free News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <RotatorCircle />}
        <InfiniteScroll
          style={{overflow:'hidden'}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults }
          loader={loading?<RotatorCircle/>:<span></span>}
          >
       

        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                  <NewsItem
                    source={element.source.name}
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                      ? element.description.slice(0, 88)
                      : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    />
                </div>
              
            })}
            
        </div>
            
        </InfiniteScroll>

       
            
            </div>
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
