/** @jsx jsx */

import { Component } from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Global, css, jsx } from "@emotion/react";
import { GatsbyImage } from "gatsby-plugin-image";

import { ColorsAdvanced, Fonts } from "../styles/main";
import { nameSplitter } from "../utils/common";

import CoverImg from "../../static/images/cover.png";

const InfoSection = ({ title, children }) => (
  <div
    css={css`
      padding: 3rem;
    `}
  >
    {title && (
      <div
        css={css`
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          font-size: 1.2rem;
          opacity: 0.6;
          margin-bottom: 2.5rem;
        `}
      >
        {title}
      </div>
    )}
    {children}
  </div>
);

const ListItem = ({ icon, title, skill, children }) =>
  skill ? (
    <div
      css={css`
        background-color: ${ColorsAdvanced.main};
        color: #fff;
        display: inline-block;
        padding: 0.2rem 0.5rem;
        margin: 0.1rem;
        font-size: 1rem;
        border-radius: 0.2rem;
      `}
    >
      <span>{children}</span>
    </div>
  ) : (
    <div
      className={icon ? "align-item-center d-flex" : ""}
      css={css`
        margin-bottom: 1.5rem;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      {title ? (
        <div
          css={css`
            text-transform: uppercase;
            margin-bottom: 0.2rem;
            font-weight: bold;
            color: ${ColorsAdvanced.main};
          `}
        >
          {title}
        </div>
      ) : (
        ""
      )}
      {icon ? (
        <GatsbyImage
          css={css`
            display: inline-block;
            margin-right: 1rem;
            width: 1.7rem;
            position: relative;
            top: -0.1rem;
            margin-left: -0.1rem;
            filter: invert(1);
            opacity: 0.7;
          `}
          image={icon}
          alt="Social Icon"
        />
      ) : (
        ""
      )}
      <span>{children}</span>
    </div>
  );

export default class ResumePage extends Component {
  render = () => {
    const isFromDownload = false;
    // const isFromDownload = location.search === "?5713b02f1a08470383db";
    return (
      <div>
        <Global
          styles={css`
            body,
            html {
              font-family: ${Fonts.body}, sans-serif;
              font-size: 16px;
              background-color: #dcdcdc;
            }
            p {
              line-height: 1.7;
              text-align: justify;
              &:first-of-type {
                margin-top: -0.1rem;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          `}
        />
        <Helmet
          defaultTitle={"Resume - Chandu J S"}
          meta={[
            {
              name: "robots",
              content: "noindex",
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <StaticQuery
          query={graphql`
            {
              sanityResume {
                skills {
                  value
                }
                aboutMe
                education {
                  course
                  duration
                  instituteName
                }
                email
                phone
                jobTitle
                languages {
                  level
                  name
                }
                location
                name
                job {
                  ended
                  details
                  location
                  companyName
                  designation
                  responsibilities
                  started
                  technologies
                }
                socialLinks {
                  name
                  url
                  icon {
                    asset {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(layout: CONSTRAINED)
                        }
                      }
                    }
                  }
                }
                website
              }
            }
          `}
          render={({
            sanityResume,
            sanityResume: { skills, education, languages, socialLinks, job },
          }) => {
            const personName = nameSplitter(sanityResume.name);
            return (
              <div
                css={css`
                  @media (max-width: 1200px) {
                    width: 100%;
                    max-width: 100%;
                    padding: 0;
                  }
                `}
                className="container"
              >
                <div
                  css={css`
                    background-color: #fff;
                  `}
                >
                  <header
                    css={css`
                      background-image: url(${CoverImg});
                      background-attachment: fixed;
                      background-size: cover;
                      background-position: center;
                      background-color: ${ColorsAdvanced.main};
                      padding: 5rem 3rem 3rem;
                      color: #fff;
                    `}
                  >
                    <div
                      css={css`
                        text-transform: uppercase;
                        font-size: 3rem;
                      `}
                    >
                      <strong>{personName.first}</strong> {personName.last}
                    </div>
                    <div
                      css={css`
                        text-transform: uppercase;
                        letter-spacing: 0.1rem;
                        margin-left: 0.2rem;
                      `}
                    >
                      {sanityResume.jobTitle}
                    </div>
                  </header>
                  <div className="row no-gutters">
                    <div
                      className="col-md-4"
                      css={css`
                        background-color: #ececec;
                      `}
                    >
                      <InfoSection title="Contact">
                        <ListItem title="Location">{sanityResume.location}</ListItem>
                        <ListItem title="Email">{sanityResume.email}</ListItem>
                        <ListItem title="Website">{sanityResume.website}</ListItem>
                        {isFromDownload && <ListItem title="Phone">{sanityResume.phone}</ListItem>}
                      </InfoSection>
                      <InfoSection title="Social">
                        {socialLinks.map((item, index) => {
                          const usernameSplits = item.url.split("/");
                          const username = usernameSplits[usernameSplits.length - 1];
                          return (
                            <ListItem
                              key={index}
                              icon={item.icon.asset.localFile.childImageSharp.gatsbyImageData}
                            >
                              {`${item.name} @${username}`}
                            </ListItem>
                          );
                        })}
                      </InfoSection>
                      <InfoSection title="Skills">
                        <div
                          css={css`
                            margin: -0.1rem;
                            display: inline-block;
                          `}
                        >
                          {skills.map(({ value }, index) => (
                            <ListItem key={index} skill>
                              {value}
                            </ListItem>
                          ))}
                        </div>
                      </InfoSection>
                      <InfoSection title="Education">
                        {education.map((item, index) => (
                          <ListItem key={index} title={item.course}>
                            <div>{item.duration}</div>
                            <div>{item.instituteName}</div>
                          </ListItem>
                        ))}
                      </InfoSection>
                      <InfoSection title="Languages">
                        {languages.map((item, index) => (
                          <ListItem key={index} title={item.name}>
                            {item.level}
                          </ListItem>
                        ))}
                      </InfoSection>
                    </div>
                    <div className="col-md-8">
                      <InfoSection title="Professional Profile">
                        {(sanityResume.aboutMe || "").split("\n\n").map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </InfoSection>
                      <InfoSection title="Employment History">
                        {job.map((item, index) => (
                          <div
                            key={index}
                            css={css`
                              margin-bottom: 3rem;
                              &:last-child {
                                margin-bottom: 0;
                              }
                            `}
                          >
                            <div
                              css={css`
                                margin-bottom: 0.3rem;
                              `}
                            >
                              <span
                                css={css`
                                  font-weight: bold;
                                  font-size: 1.1rem;
                                  color: ${ColorsAdvanced.main};
                                `}
                              >
                                {item.companyName !== "-" ? `${item.companyName} - ` : ""}
                                {item.designation}
                              </span>
                              <span className="float-right text-muted">
                                {item.started} - {item.ended || "Present"}
                              </span>
                            </div>
                            <div
                              css={css`
                                margin-bottom: 1.5rem;
                              `}
                              className="text-muted"
                            >
                              {item.location}
                            </div>
                            <div>
                              {(item.details || "").split("\n\n").map((desc, index) => (
                                <p key={index}>{desc}</p>
                              ))}
                            </div>
                            {item.technologies.length ? (
                              <div
                                css={css`
                                  margin-top: 1.5rem;
                                `}
                              >
                                <div
                                  className="text-muted"
                                  css={css`
                                    margin-bottom: 1rem;
                                  `}
                                >
                                  Technologies Worked With
                                </div>
                                <ul
                                  css={css`
                                    margin-bottom: 0;
                                    padding-left: 1.2rem;
                                    li {
                                      margin-bottom: 0.5rem;
                                    }
                                  `}
                                >
                                  {item.technologies.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              ""
                            )}
                            {item.responsibilities.length ? (
                              <div
                                css={css`
                                  margin-top: 1.5rem;
                                `}
                              >
                                <div
                                  className="text-muted"
                                  css={css`
                                    margin-bottom: 1rem;
                                  `}
                                >
                                  My Responsibilities
                                </div>
                                <ul
                                  css={css`
                                    margin-bottom: 0;
                                    padding-left: 1.2rem;
                                    li {
                                      margin-bottom: 0.5rem;
                                    }
                                  `}
                                >
                                  {item.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        ))}
                      </InfoSection>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  };
}
