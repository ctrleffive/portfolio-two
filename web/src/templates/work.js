/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import Wrap from "../layouts/wrap";
import { Colors } from "../styles/main";
import { graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import rehypeRaw from "rehype-raw";

import PageBg from "../assets/images/bgs/work.svg";
import { nameSplitter } from "../utils/common";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    sanityWork(slug: { current: { eq: $slug } }) {
      title
      url
      subTitle
      publishedAt
      details
      endedAt
      startedAt
      tags {
        value
      }
      category {
        id
        title
      }
      mainImage {
        caption
        asset {
          url
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
              resize(width: 1000) {
                src
              }
            }
          }
        }
      }
      relatedWork {
        title
        subTitle
      }
    }
  }
`;

const WorkSinglePage = ({ data: { sanityWork: data, site } }) => {
  const splittedTitle = nameSplitter(data.title);
  const coverImage = {
    localFile: data.mainImage?.asset?.localFile,
    url: data.mainImage?.asset?.url,
  };

  return (
    <Wrap
      lightsOn
      isWorkPage
      pageBg={<PageBg />}
      cover={
        coverImage.localFile
          ? site.siteMetadata.siteUrl + coverImage.localFile.childImageSharp.resize.src
          : coverImage.url
      }
      title={`${data.title} - Work - Chandu J S`}
      description={data.details}
    >
      <div className="content-wrap">
        <div className="mb-5">
          <div className="h1 font-weight-bold text-body">
            <span>
              {splittedTitle.first} <span className="high">{splittedTitle.last}</span>
            </span>
          </div>
          <div
            className="h5 mb-4"
            css={css`
              line-height: 1.3;
            `}
          >
            {data.subTitle}
          </div>
          <div className="tags">
            {data.tags.map(({ value }, index) => (
              <span
                key={index}
                className="badge badge-pill badge-brand mb-2 mr-2 ng-star-inserted py-1"
              >
                #{value}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden pad-wrap p-0">
          {coverImage.localFile ? (
            <GatsbyImage
              className="w-100"
              objectFit="cover"
              alt={data.title}
              image={coverImage.localFile.childImageSharp.gatsbyImageData}
            />
          ) : (
            <img className="w-100" src={coverImage.url} />
          )}
          <div
            className="px-5 py-4"
            css={css`
              .markdown-image {
                margin: 1rem -3rem;
                width: calc(100% + 6rem);

                @media screen and (max-width: 766px) {
                  width: calc(100% + 5rem) !important;
                  margin-left: -2rem !important;
                  margin-right: -2rem !important;
                }
              }
              > p:last-child .markdown-image {
                margin-bottom: -2.5rem;
              }

              ul {
                padding-left: 1.25rem;
              }

              a {
                font-weight: bold;
                color: ${Colors.brand};
              }

              iframe {
                border: none;
                background-color: #eee;
                width: 100%;
                margin-top: 1rem;
                border-radius: 3px;
              }
            `}
          >
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ node, src, ...props }) => {
                  return (
                    <img className="markdown-image" src={src.replace("?w=", "?")} {...props} />
                  );
                },
              }}
            >
              {data.details}
            </ReactMarkdown>
          </div>
        </div>
        {data.url && (
          <OutboundLink
            eventLabel={`Project Visit (${data.title})`}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            alt={data.title}
            css={css`
              padding: 1rem 2rem;
              border-radius: 5px;
              background-color: ${Colors.accent};
              color: #212529;
              font-weight: bold;
              text-transform: uppercase;
              margin-top: 3rem;
              display: inline-block;
              transition-duration: 0.2s;
              box-shadow: transparent 0 0 0px;
              &:hover {
                box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 2px inset;
              }
            `}
          >
            GoTo Project
          </OutboundLink>
        )}
      </div>
    </Wrap>
  );
};

export default WorkSinglePage;
