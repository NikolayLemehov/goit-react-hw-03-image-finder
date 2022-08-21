import React, { Component, PureComponent } from 'react';
import s from './App.module.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryStatus from './ImageGalleryStatus/ImageGalleryStatus';
import Container from './Container';


class App extends PureComponent {
  state = {
    search: '',
  }

  getSearchValue = (value) => {
    this.setState({search: value})
  }

  render() {
    const {search} = this.state;

    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.getSearchValue}/>
        <Container>
          <ImageGalleryStatus search={search}/>
        </Container>
      </div>
    );
  }
}

export default App;
