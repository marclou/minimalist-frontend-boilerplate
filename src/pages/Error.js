import React from 'react';
import config from '../config';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="flex items-center justify-center w-full pt-24">
          <div className="card shadow-2xl  bg-primary text-primary-content">
            <div className="card-body">
              <h6 className="mb-2 text-2xl font-bold text-center md:text-3xl">Oops! Something went wrong...</h6>
              <p className="text-center text-gray-200 md:text-lg">{this.state.error.message}</p>
              <div className="justify-center card-actions">
                <a href={`mailto:${config.emailSupport}`} target="_blank" className="btn">
                  Get help
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default Error;
