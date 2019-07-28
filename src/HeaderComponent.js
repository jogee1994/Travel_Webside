import React from 'react';

export default function headerComponent(){
    return (
        <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active" style={{backgroundImage: 'url("images/sliderbg.jpeg")'}}>
            </div>
            <div className="carousel-item" style={{backgroundImage: 'url("images/sliderbg.jpeg")'}}>
            </div>
            <div className="carousel-item" style={{backgroundImage: 'url("images/sliderbg.jpeg")'}}>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="searchbox">
          <h5>Book your perfect holidya rental today</h5>
          <form>
            <div className="card-group">
              <div className="card">
                <div className="card-block">
                  <h4 className="card-title">Whre do you want to go?</h4>
                  <input className="form-control" placeholder="country, ZIP, Postal code" />
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <h4 className="card-title">Check in</h4>
                  <input className="form-control" placeholder="chose a date" />
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <h4 className="card-title">Check out</h4>
                  <input className="form-control" placeholder="chose a date" />
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <h4 className="card-title">Guest</h4>
                  <select className="custom-select">
                    <option value = 'selected'>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <button type="button" className="btn btn-danger checkavailablebtn"><i className="fa fa-long-arrow-right" /> Check Availiability</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </header>
    );
}