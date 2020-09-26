import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({
  title,
  imageUrl,
  isFullWidth,
  history,
  linkUrl,
  match,
}) => (
  <>
    {/* <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">BUY NOW</span>
      </div>
    </div> */}

    <div
      class={`${
        isFullWidth ? "md:w-full" : "flex1 max-w-xl"
      } h-64 rounded-md overflow-hidden bg-cover bg-center m-2`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div class="px-10 max-w-xl">
          <h2 class="text-2xl text-white font-semibold">
            {title.toUpperCase()}
          </h2>
          <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span onClick={() => history.push(`${match.url}${linkUrl}`)}>
              Shop Now
            </span>
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>
  </>
);

export default withRouter(MenuItem);
