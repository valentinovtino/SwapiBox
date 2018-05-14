import React, { Component } from 'react';
import { fetchApi } from '../../api/api.js';
import './FilmCrawl.css';

class FilmCrawl extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filmData: {}
    };
  }

cleaner = (filmData) => {
  const { title, opening_crawl, release_date } = filmData;
  return { title, release_date, opening_crawl };
}

async componentDidMount() {
  const randomNum = Math.floor((Math.random() * 6) + 1);
  const category = `films/${randomNum}`;
  const filmData = await fetchApi(category);
  const cleanData = this.cleaner(filmData);
  this.setState({filmData});
}

render() {
  return(
    // <div className='crawl-container'>
  <div className='body'>
    <div className='fade'></div>


      <section className='star-wars'>

        <div className='crawl'>

          <div className='title'>
            <h1 className='font'>{this.state.filmData.title}</h1>
            <p className='font'>{this.state.filmData.release_date}</p>
          </div>
            
            <h3 className='font'>{this.state.filmData.opening_crawl}</h3>
        </div>
      </section>

    </div>
  );
}
}

export default FilmCrawl;