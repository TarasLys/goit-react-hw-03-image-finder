import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchPosts } from './services/api';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    per: [],
    isLoading: false,
    error: null,
    searchPost: null,
    page: 1,
    modal: {
      isOpen: false,
      data: null,
    },
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchPost !== this.state.searchPost) {
      this.fetchAllPosts();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchPost: query,
      per: [],
      page: 1,
      error: null,
    });
  };

  fetchAllPosts = async () => {
    const { searchPost, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const post = await fetchPosts(searchPost, page);

      this.setState(prevState => ({
        per: [...prevState.per, ...post],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error: error.message });
      Notiflix.Notify.failure(
        'Double warning!!! There is no base... Work on the line :)',
        { position: 'center-center' }
      );
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        data: modalData,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        data: null,
      },
    });
  };

  render() {
    const { per, isLoading, error } = this.state;
    const { data, isOpen } = this.state.modal;
    const shouldRenderLoadMoreButton = per.length > 0 && !isLoading;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        {<Searchbar onSubmit={this.onChangeQuery} />}
        {this.state.isLoading && <Loader />}
        {this.state.error && <p className="error">{error}</p>}
        {<ImageGallery images={per} onOpenModal={this.onOpenModal} />}
        {isOpen && (
          <Modal onCloseModal={this.onCloseModal} data={data} />
        )}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchAllPosts} />}
      </div>
    );
  }
}
