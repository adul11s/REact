import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import LatestNews from "../components/latesnews";
import NewsFeed from "../components/newsfeed";

const apiKey = "4ee3718da51b497a868ae709733953fa";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;
class Home extends Component {
  state = {
    data: [],
    newsFeed: [],
  };
  getData = async () => {
    const response = await axios.get(urlHeadline);
    console.log("response", response.data);
    this.setState({ data: response.data.articles });
  };
  getNews = async (category) => {
    let url;
    if (category) {
      url = urlHeadline + "&category=" + category;
    } else {
      url = urlHeadline;
    }
    await this.setState({ isLoading: true });
    axios
      .get(url)
      .then((response) => {
        this.setState({ newsFeed: response.data.articles, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount = async () => {
    this.getData();

    const paramCategory = await this.props.match.params.category;
    this.getNews(paramCategory);
  };
  getNews = async (category) => {
    let url;
    if (category) {
      url = urlHeadline + "&category=" + category;
    } else {
      url = urlHeadline;
    }
    await this.setState({ isLoading: true });
    axios
      .get(url)
      .then((response) => {
        this.setState({ newsFeed: response.data.articles, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  handleInputChange = async (event) => {
    let value = event.target.value;
    await this.setState({ search: value });
    this.searchNews(value);
  };

  searchNews = async (keyword) => {
    if (keyword.length > 2) {
      await this.setState({ isLoading: true });
      try {
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
        );
        this.setState({ newsFeed: response.data.articles, isLoading: false });
      } catch (error) {
        console.error(error);
      }
    }
  };

  handleRequestCategoryNews = async (categoryName) => {
    await this.props.history.replace("/news-category/" + categoryName);
    await this.setState({ isLoading: true });

    const paramCategory = await this.props.match.params.category;
    axios
      .get(urlHeadline + "&category=" + paramCategory)
      .then((response) => {
        this.setState({ newsFeed: response.data.articles, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div>
        <Navbar
          doSearch={(event) => this.handleInputChange(event)}
          handleRouter={(e) => this.handleRequestCategoryNews(e)}
          getNews={() => this.getNews()}
          keyword={this.state.search}
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
                {this.state.data.slice(0, 5).map((el, index) => (
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
              {this.state.newsFeed.slice(0, 5).map((el, index) => (
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
      </div>
    );
  }
}

export default Home;
