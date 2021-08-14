/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { graphql } from "gatsby";
import Wrap from "../layouts/wrap";

import { OutboundLink } from "gatsby-plugin-google-analytics";
import { StaticImage } from "gatsby-plugin-image";

import { customStyles, codeTheme } from "../styles/code.js";

export const query = graphql`
  query ($slug: String!) {
    devArticles(article: { slug: { eq: $slug } }) {
      article {
        title
        slug
        description
        tags
        readable_publish_date
        body_html
        url
        cover_image
      }
    }
  }
`;

const BlogSinglePage = ({
  data: {
    devArticles: { article: data },
  },
}) => {
  return (
    <Wrap
      lightsOn
      isBlogPage
      title={`${data.title} - Blog - Chandu J S`}
      cover={data.cover_image}
      description={data.description}
    >
      <div className="content-wrap">
        <div className="mb-5">
          <div className="h1 font-weight-bold text-body">{data.title}</div>
          <div className="mb-3">Published On: {data.readable_publish_date}</div>
          <div className="tags">
            {data.tags.map((tag, index) => (
              <span key={index} className="badge badge-pill badge-brand mb-2 mr-2 py-1">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white pad-wrap rounded-lg overflow-hidden">
          {data.cover_image ? (
            <img
              css={css`
                margin: -3rem -3rem 3rem;
                max-width: calc(100% - -6rem);
              `}
              src={data.cover_image}
            />
          ) : (
            ""
          )}
          <div
            css={css`
              ${codeTheme} ${customStyles}
            `}
            dangerouslySetInnerHTML={{ __html: data.body_html }}
          />
        </div>
        <OutboundLink
          eventLabel="DEV Blog Visit"
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            src="../../static/images/dev.png"
            alt="Dev.to"
            css={css`
              filter: invert(1);
              margin-left: -5px;
              margin-top: 1rem;
            `}
          />
        </OutboundLink>
      </div>
    </Wrap>
  );
};

export default BlogSinglePage;
