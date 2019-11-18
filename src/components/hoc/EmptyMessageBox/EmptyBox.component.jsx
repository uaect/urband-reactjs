import React from "react";
import { Link } from "react-router-dom";
import {
  LazyLoadImage,
  LazyLoadComponent
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const EmptyBox = props => {
  return (
    <LazyLoadComponent>
      <div>
        <div className="EmptyBoxTp1 text-center p-4">
          <LazyLoadImage
            effect="blur"
            src={require(`../../../assets/img/${props.ThumbImage}`)}
          />
          <div className="EmptyHeaderTextTp1">{props.HeaderText}</div>
          <div className="EmptySubHeaderTextTp1">{props.SubText}</div>
          <div>{props.children}</div>
          <div className="EmptyBtnBoxTp1 mt-4">
            <Link to={props.LinkUrl} className="EmptyLink1">
              {props.LinkText}
            </Link>
          </div>
        </div>
      </div>
    </LazyLoadComponent>
  );
};
export default EmptyBox;
