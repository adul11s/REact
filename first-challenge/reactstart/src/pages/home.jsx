import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import LatestNews from "../components/latesnews";
import NewsFeed from "../components/newsfeed";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  getNews,
  getData,
  getCategory,
  getSearch,
  handleSearch,
} from "../store/actions/newsFeedAction";

const apiKey = "4ee3718da51b497a868ae709733953fa";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;
class Home extends Component {
  // state = {
  //   data: [],
  //   newsFeed: [],
  //   isLoading: true,
  // };

  // handleInputChange = async (event) => {
  //   let value = event.target.value;
  //   await this.setState({ search: value });
  //   this.props.getSearch(value);
  // };

  // searchNews = async (keyword) => {
  //   if (keyword.length > 2) {
  //     await this.setState({ isLoading: true });
  //     try {
  //       const response = await axios.get(
  //         baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
  //       );
  //       this.setState({ newsFeed: response.data.articles, isLoading: false });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  handleRequestCategoryNews = async (categoryName) => {
    await this.props.history.replace("/news-category/" + categoryName);
    const paramCategory = await this.props.match.params.category;
    this.props.getCategory(paramCategory);
  };

  componentDidMount = async () => {
    const paramCategory = await this.props.match.params.category;
    this.props.getData();
    this.props.getNews(paramCategory);
  };

  render() {
    return (
      <div>
        {this.props.dataUser.isLogin ? (
          <React.Fragment>
            <Navbar
              doSearch={(event) => this.props.handleSearch(event)}
              handleRouter={(e) => this.handleRequestCategoryNews(e)}
              getNews={() => this.getNews()}
              keyword={this.props.search}
              placeholder="search"
              {...this.props}
            />
            <div class="container">
              <div class="row my-5">
                <div class="col-4">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      {" "}
                      <strong class="float-left">BERITA TERKINI</strong>
                      <span class="float-right">lihat semua</span>
                    </li>
                    {this.props.latestNews.slice(0, 5).map((el, index) => (
                      <div key={index}>
                        <LatestNews
                          title={el.title}
                          index={index + 1}
                          url={el.url}
                        />
                      </div>
                    ))}
                  </ul>
                </div>
                <div class="col-8">
                  {this.props.newsFeed.slice(0, 5).map((el, index) => (
                    <div key={index}>
                      <NewsFeed
                        url={el.url}
                        title={el.title}
                        urlToImage={el.urlToImage}
                        description={el.description}
                        publishedAt={el.publishedAt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>{" "}
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { message: "login ulang" },
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    newsFeed: state.newsFeed.newsFeed,
    latestNews: state.newsFeed.latestNews,
    category: state.newsFeed.category,
    search: state.newsFeed.search,
  };
};
const mapDispatchToProps = {
  getNews: getNews,
  getData: getData,
  getCategory: getCategory,
  getSearch: getSearch,
  handleSearch: (el) => handleSearch(el),
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
