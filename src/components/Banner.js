import React from "react";

const Banner = data => {
  const banner = data.data.dados;
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      index="-1"
      uk-slideshow="min-height: 280; max-height: 700"
    >
      <ul className="uk-slideshow-items">
        {banner.map(item => (
          <li key={item.id}>
            <img src={item.img.link.url} alt={item.title} uk-cover="" />
          </li>
        ))}
      </ul>

      <button
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous=""
        uk-slideshow-item="previous"
      >
        {" "}
      </button>
      <button
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next=""
        uk-slideshow-item="next"
      >
        {""}
      </button>
    </div>
  );
};

export default Banner;
