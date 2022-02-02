import React from "react";
import "../../styles/SuggestionsAndnews.css";
type Props = {};

const SuggestionsAndnews = (props: Props) => {
  return (
    <div className="rightSiderbarContainer">
      <div className="newsList">
        <h1>What's Happening</h1>
        <div className="newsCard">
          <p>IPL 2022: Full auction list of 590 players announced</p>
          <img
            src="https://pbs.twimg.com/semantic_core_img/1488453389323177985/ZTJQ9Hl8?format=png&name=120x120"
            alt="img"
          />
        </div>
        <div className="newsCard">
          <p>
            Budget 2022: Nirmala Sitharaman presents Union budget aimed at
            boosting growth
          </p>
          <img
            src="data:image/jpeg;base64,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"
            alt="img"
          />
        </div>
        <div className="newsCard">
          <p>No tax deduction, only praise this time for the tax payers</p>
          <img
            src="https://pbs.twimg.com/media/FKfkoolUYAIYpzq?format=jpg&name=240x240"
            alt="img"
          />
        </div>

        <p className="moreBtn">more...</p>
      </div>
      <div className="suggestions">
        <h1>Who to follow</h1>
        <div className="suggestionCard">
          <div className="profileImg">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-movies-in-order-index-1631199371.jpeg?crop=0.565xw:1.00xh;0.435xw,0&resize=640:*"
              alt="img"
            />
          </div>
          <div className="nameAndUserName">
            <p>
              <b>Spider-Man</b>
            </p>
            <span>@spiderman</span>
          </div>
          <button>Follow</button>
        </div>
        <div className="suggestionCard">
          <div className="profileImg">
            <img
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_hlf_02_0.jpg"
              alt="img"
            />
          </div>
          <div className="nameAndUserName">
            <p>
              <b>Ironman</b>
            </p>
            <span>@ironman</span>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsAndnews;
