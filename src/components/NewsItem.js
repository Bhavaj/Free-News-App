import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    let updatedTimeFunction = () => {
      let a = date;
      a = new Date(a);

      let d = new Date();

      let milli = d.getTime() - a.getTime();
      let Days = Math.floor(milli / (24 * 60 * 60 * 1000));
      let hours = Math.floor(milli / (60 * 60 * 1000)) - 24 * Days;
      let minutes =
        Math.floor(milli / (60 * 1000)) - 24 * 60 * Days - 60 * hours;
      let final = Days + " day " + hours + " hour " + minutes + " minutes ";
      return final;
    };

    let updatedTime = updatedTimeFunction();

    return (
      <div className="my-3">
        <Card >
          <div style={{display:'flex', justifyContent:'end', position:'absolute', right:'0'}}> 
          <Badge bg="success">{source}</Badge>{" "}
          </div>

          
            <Card.Img
              
              variant="top"
              src={
                imageUrl
                  ? imageUrl
                  : "https://imgeng.jagran.com/images/2022/jul/breaking-news-21657000654545.jpg"
              }
            />
          
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>{description}...</Card.Text>
            <Button
              href={newsUrl}
              target="_blank"
              className="btn-sm stretched-link"
              variant="dark"
            >
              Read more
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              By {author ? author : "anonymous"} -last updated {updatedTime}
            </small>
          </Card.Footer>
        </Card>
      </div>
    );
  
}

export default NewsItem;
