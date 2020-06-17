import React, { Component } from 'react';
import axios from 'axios';

 class News extends Component{
    
    constructor(props) {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
          articles: []
        };
      }

    componentWillMount() {
        this.getNewsArticle();
    }
    
    getNewsArticle() {
        const apiKey = 'dab75b98c31e4187aec54955d390a0f9';
        // Make API reques with Axios
        axios
          .get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
          .then(res => {
            const articles = res.data.articles;
            console.log(articles);
            this.setState({ articles: articles });
          })
          .catch(error => {
            console.log(error);
          });
      }

    render(){

     // NewS API Response will be contain..
    // author: "By Emily Crane For Dailymail.com"
    // content: "Early coronavirus testing for George Floyd protesters in Minnesota is showing that one in 70 Black Lives Matter protesters have tested positive for COVID-19 - as a second wave of infections is feared… [+6480 chars]"
    // description: "Early coronavirus testing for George Floyd protesters in Minnesota is showing that one in 70 Black Lives Matter protesters have tested positive for COVID-19."
    // publishedAt: "2020-06-15T16:31:31Z"
    // source: {id: null, name: "Daily Mail"}
    // title: "Coronavirus: Minnesota cases fall despite George Floyd protests - Daily Mail"
    // url: "https://www.dailymail.co.uk/news/article-8422123/Minnesotas-COVID-19-cases-declining-despite-George-Floyd-protests.html"
    // urlToImage


        let itemList = this.state.articles.map(item=>{
            return(
                <div className="card" style={{width: '500px'}} key={item.publishedAt}>
                        <div className="card-content">
                            <p className="news-title">{item.title}</p> 
                        </div>
                        <div className="card-image">
                            <img src={item.urlToImage} alt={item.urlToImage}/>
                        </div>

                        <div className="card-content">
                            <p>{item.content}</p>
                            <p>{item.description}</p>
                            <p><a href={item.url} target="_blank">Read more: {item.url}</a></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Top Stories</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

export default (News)