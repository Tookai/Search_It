import React from "react";
import { Link } from "react-router-dom";
import "../style/SearchPage.css";
import Search from "./Search";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

import logo from "../img/logo.png"

import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function SearchPage() {
  const [{ term }] = useStateValue();

  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="searchPage__top">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Search hideButtons />
        </div>
        <div className="searchPage__options">
          <div className="searchPage__optLeft searchPage__option">
            <div className="searchPage__option">
              <SearchIcon />
              <p>All</p>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <p>Images</p>
            </div>
            <div className="searchPage__option">
              <RoomIcon />
              <p>Maps</p>
            </div>
            <div className="searchPage__option">
              <OndemandVideoIcon />
              <p>Videos</p>
            </div>
            <div className="searchPage__option">
              <ArtTrackIcon />
              <p>News</p>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon />
              <p>More</p>
            </div>
          </div>

          <div className="searchPage__optRight searchPage__option">
            <div className="searchPage__option">
              <p>Settings</p>
            </div>
            <div className="searchPage__option">
              <p>Tools</p>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="result" key={item.title}>
              <a href={item.link} className="r__displayLink">
                {item.displayLink} <ArrowDropDownIcon />
              </a>
              <a href={item.link} className="r__title">
                {item.title}
              </a>
              <p className="Snippet r__snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
