/** @jsx jsx */

import { css, jsx } from "@emotion/react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Component } from "react"
import { Colors } from "../styles/main"

export default class WorkThumbnail extends Component {
  state = {
    width: 0,
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render = () => {
    const data = this.props.data;

    let widthClass = "col-xl-4";
    if (this.state.width > 1800) {
      widthClass = "col-xl-3";
      if (this.state.width > 2550) {
        widthClass = "col-xl-2";
        if (this.state.width > 4000) {
          widthClass = "col-xl-1";
        }
      }
    }

    return (
      <div
        className={widthClass + " col-md-6"}
        css={css`
          margin-bottom: 1.4rem;
          @media screen and (max-width: 766px) {
            margin-bottom: 0.8rem;
          }
        `}
      >
        <Link
          to={`/work/${data.slug.current}`}
          className="overflow-hidden"
          css={css`
            display: inline-block;
            position: relative;
            z-index: 0;
            height: 300px;
            width: 100%;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.05) 0 1px 2px;
            &:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: ${data.color?.hex ?? Colors.brand};
              z-index: 1;
              transition-duration: 0.2s;
              opacity: 0;

              @media screen and (max-width: 766px) {
                opacity: 0.9;
              }
            }
            &:hover {
              &:before {
                opacity: 0.95;
              }
              .item-details {
                opacity: 1;
                bottom: -0.6rem;
              }
            }
            .gatsby-image-wrapper {
              width: 100% !important;
            }
          `}
        >
          <GatsbyImage
            image={data.thumbnail.asset.localFile.childImageSharp.gatsbyImageData}
          />
          <div
            css={css`
              position: absolute;
              z-index: 1;
              mix-blend-mode: multiply;
              bottom: -3rem;
              right: 0;
              left: 0;
              opacity: 0;
              padding-top: 10rem;
              padding-left: 2rem;
              padding-bottom: 2.2rem;
              transition-duration: 0.2s;

              @media screen and (max-width: 766px) {
                opacity: 1;
                bottom: -0.6rem;
              }
            `}
            className="item-details"
          >
            <div
              css={css`
                font-weight: bold;
                font-size: 1.95rem;
                margin-bottom: 0rem;
              `}
            >
              {data.title}
            </div>
            <div>
              {data.category.map((category) => (
                <span
                  css={css`
                    margin-right: 1.5rem;
                  `}
                >
                  {category.title}
                </span>
              ))}
            </div>
            <div
              css={css`
                margin-top: 1rem;
              `}
              className="item-tagline"
            >
              {data.subTitle}
            </div>
          </div>
        </Link>
      </div>
    );
  };
}
