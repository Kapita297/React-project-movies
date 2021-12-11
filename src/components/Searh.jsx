import React from 'react';

export class Searh extends React.Component {
  state = {
    searh: '',
    type: 'all',
  };

  hadleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.searh, this.state.type);
    }
  };

  hadleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.searh, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.searh}
            onChange={(e) => this.setState({ searh: e.target.value })}
            onKeyDown={this.hadleKey}
          />
          <button
            className="btn enter-btn  orange lighten-1"
            onClick={() =>
              this.props.searchMovies(this.state.searh, this.state.type)
            }>
            Enter
          </button>
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.hadleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.hadleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.hadleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
