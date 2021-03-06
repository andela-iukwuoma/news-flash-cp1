import React from 'react';
import AppStatusStore from '../stores/AppStatusStore';

export default class AppStatusContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state.isSuccessFetch is set to true so that this component is hidden by default.
    this.state = {
      isFetching: false,
      isErrorFetch: false,
      isSuccessFetch: true
    };
  }

  componentWillMount() {
    AppStatusStore.on('startFetchArticles', () => {
      this.setState({
    isFetching: true,
    isErrorFetch: false,
    isSuccessFetch: false,
    message: 'Loading... Please wait...'
  });
    });

    AppStatusStore.on('errorFetchArticles', () => {
      this.setState({
        isFetching: false,
        isErrorFetch: true,
        isSuccessFetch: false,
        message: 'Oops! Failed to fetch news articles. Please try again.'
      });
    });

    AppStatusStore.on('successFetchArticles', () => {
      this.setState({
        isFetching: false,
        isErrorFetch: false,
        isSuccessFetch: true
      });
    });
  }

  render() {
    const showAppStatus = this.state.isSuccessFetch ? 'hidden' : '';
    const showLoadingImg = this.state.isFetching ? '' : 'hidden';
    const showErrorImg = this.state.isErrorFetch ? '' : 'hidden';
    const statusMsg = this.state.message || '';

    return (
      <div id='app-status-container' className={showAppStatus}>
        <img src='/img/loading-img.png' id='loading-articles' className={'img-responsive center-block ' + showLoadingImg}/>
        <img src='/img/error-loading-img.png' id='error-loading-articles' className={'img-responsive center-block ' + showErrorImg}/>
        <h3 className='text-center'>{statusMsg}</h3>
      </div>
    );
  }
}
