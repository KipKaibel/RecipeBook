import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
              <body className="d-flex flex-column h-100">
                <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="home">RecipeBook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="home">My Recipes <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      {/* need to make list.js  */}
                      <Link className="nav-link" to="list">My List</Link>
                    </li>
                  </ul>
                  <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
                </header>
              </body>
              <main role="main">
              <section className="jumbotron text-center">
                <div className="container">
                  <h1 className="jumbotron-heading">Your Recipes</h1>
                  <p className="lead text-muted">A catalog of all of the recipes you have collected so far!</p>
                  <p>
                    <Link href="#" className="btn btn-primary my-2">Confirm Selections</Link>
                    <Link href="#" className="btn btn-secondary my-2">Clear Selections</Link>
                  </p>
                </div>
              </section>

              <div className="album py-5 bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-outline-secondary">Select</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="jumbotron text-center">
                <div className="container">
                  <p>
                    <a href="#" className="btn btn-primary my-2">Confirm Selections</a>
                    <a href="#" className="btn btn-secondary my-2">Clear Selections</a>
                  </p>
                </div>
              </section>

              </main>
            </div>
        );
    }
}

export default Home;