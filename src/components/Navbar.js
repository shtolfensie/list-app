import React from "react";
import PropTypes from "prop-types";

import "../css/Navbar.css";

const Navbar = props => {
  return (
    <nav>
      <div className="left-side">
        <a href="#/" className="nav-item">
          HOME
        </a>
        <a href="#/" className="nav-item">
          TEST
        </a>
        <a href="#/" className="nav-item">
          CONTACT
        </a>
      </div>
      <div className="logo">
        {/* <p>Lst</p> */}
        <svg
          width="61"
          height="36"
          viewBox="0 0 61 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 29V33.264H20.016V29.232H4.656V29H0ZM34.4426 29.328C33.5786 29.808 32.2346 30.048 30.4106 30.048C28.5546 30.048 27.0666 29.856 25.9466 29.472C24.8266 29.088 24.0106 28.8 23.4986 28.608L22.6826 32.448C23.1306 32.64 23.9786 32.912 25.2266 33.264C26.4746 33.648 28.2026 33.84 30.4106 33.84C33.5786 33.84 36.0106 33.248 37.7066 32.064C39.4346 30.88 40.2986 29.136 40.2986 26.832C40.2986 25.648 40.1226 24.656 39.7706 23.856C39.4186 23.024 38.9066 22.32 38.2346 21.744C37.5946 21.168 36.8106 20.672 35.8826 20.256C34.9546 19.808 33.8986 19.36 32.7146 18.912C31.8186 18.592 31.0506 18.288 30.4106 18C29.7706 17.712 29.2266 17.408 28.7786 17.088C28.3626 16.736 28.0426 16.352 27.8186 15.936C27.6266 15.52 27.5306 15.04 27.5306 14.496C27.5306 13.44 27.9946 12.672 28.9226 12.192C29.8506 11.68 30.9386 11.424 32.1866 11.424C33.6266 11.424 34.8586 11.568 35.8826 11.856C36.9066 12.112 37.6586 12.368 38.1386 12.624L38.9546 8.784C38.6986 8.68799 38.3306 8.57599 37.8506 8.448C37.4026 8.32001 36.8746 8.20801 36.2666 8.112C35.6586 7.98401 35.0026 7.888 34.2986 7.82401C33.5946 7.728 32.8906 7.67999 32.1866 7.67999C29.3706 7.67999 27.1466 8.336 25.5146 9.64801C23.8826 10.928 23.0666 12.672 23.0666 14.88C23.0666 16 23.2586 16.944 23.6426 17.712C24.0266 18.48 24.5386 19.136 25.1786 19.68C25.8186 20.224 26.5706 20.704 27.4346 21.12C28.3306 21.504 29.2586 21.888 30.2186 22.272C32.2026 23.072 33.6266 23.792 34.4906 24.432C35.3546 25.072 35.7866 25.936 35.7866 27.024C35.7866 28.08 35.3386 28.848 34.4426 29.328ZM59.6565 8.30402H50.2005V0.575989L45.7365 1.34399V23.616C45.7365 25.28 45.8645 26.752 46.1205 28.032C46.4085 29.28 46.8885 30.336 47.5605 31.2C48.2325 32.064 49.1125 32.72 50.2005 33.168C51.3205 33.584 52.7285 33.792 54.4245 33.792C55.8645 33.792 57.1445 33.616 58.2645 33.264C59.3845 32.944 60.1685 32.672 60.6165 32.448L59.7525 28.752C59.4325 28.88 58.8565 29.104 58.0245 29.424C57.2245 29.712 56.1525 29.856 54.8085 29.856C54.0405 29.856 53.3685 29.76 52.7925 29.568C52.2165 29.376 51.7365 29.056 51.3525 28.608C50.9685 28.128 50.6805 27.488 50.4885 26.688C50.2965 25.856 50.2005 24.816 50.2005 23.568V12.048H59.6565V8.30402Z"
              fill="#F9FFF9"
            />
          </g>
          <g filter="url(#filter1_d)">
            <circle cx="2.5" cy="23.5" r="2.5" fill="#F9FFF9" />
          </g>
          <g filter="url(#filter2_d)">
            <circle cx="2.5" cy="15.5" r="2.5" fill="#F9FFF9" />
          </g>
          <g filter="url(#filter3_d)">
            <circle cx="2.5" cy="7.5" r="2.5" fill="#F9FFF9" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0.575989"
              width="60.6165"
              height="34.764"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x="0"
              y="21"
              width="5"
              height="6.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d"
              x="0"
              y="13"
              width="5"
              height="6.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d"
              x="0"
              y="5"
              width="5"
              height="6.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="right-side">
        <div className="avatar-container">
          {props.avatarUrl ? (
            <img src={props.avatarUrl} alt="" className="avatar" />
          ) : (
            <div />
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
