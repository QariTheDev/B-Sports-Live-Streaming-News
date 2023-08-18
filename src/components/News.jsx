import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

function News() {

  const RemoveDashAndAfterContent = (str) => {
    return str.split(' - ').shift();
  }

  // const colorList = ['purple', 'rose', 'yellow', 'green', 'sky', 'indigo', 'pink'];

  const apikey = API_KEY;
  const category = "sports";
  const [articles, setArticles] = useState([]);
  
  const apilink = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${apikey}`;
  
  useEffect(() => {
    fetch(apilink)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
  }, []);
  
  return (
    <div className='my-14 flex flex-wrap justify-center items-center gap-x-10 gap-y-10'>
      {articles.map((article, index) => {
        // let color = colorList[Math.random() * colorList.length | 0];
        // console.log(color);
  
        return (
          <NewsItem
            key={index}
            apikey={apikey}
            title={RemoveDashAndAfterContent(article.title)}
            content={article.description}
            img={article.urlToImage ? article.urlToImage : 'https://i1.wp.com/mysportstourist.com/wp-content/uploads/2020/01/MCG.jpg?strip=all'}
            url={article.url}
            author={article.author}
            // color={color}
          />
        );
      })}
    </div>
  );
  
  
}

export default News
