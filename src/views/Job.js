import React from "react";
import styled from "styled-components";

export default function Job({ data, filters, setFilters }) {
  const tags = [
    data.role && data.role,
    data.level && data.level,
    ...data.languages,
    ...data.tools,
  ];

  const metaData = [
    data.postedAt && data.postedAt,
    data.contract && data.contract,
    data.location && data.location,
  ];

  //   •

  const handleSettingFilters = (name) => {
    !filters.includes(name) && setFilters([...filters, name]);
  };
  return (
    <Container className={data.featured ? "featured" : ""}>
      <div className="jobCardDetails">
        <div className="jobCardDetails_image">
          <img
            src={data.logo && data.logo}
            alt={data.company && data.company}
          />
        </div>
        <div className="jobCardDetails_data">
          <div className="jobCardDetails_data__basics">
            <h2>{data.company && data.company}</h2>
            {data.new && (
              <div className="jobCardDetails_data__basics_chip">New!</div>
            )}
            {data.featured && (
              <div className="jobCardDetails_data__basics_chip featured">
                Featured
              </div>
            )}
          </div>
          <h1 className="jobCardDetails_data__title">{data.position}</h1>
          <div className="jobCardDetails_data__metaData">
            {metaData &&
              Array.isArray(metaData) &&
              metaData.length > 0 &&
              React.Children.toArray(
                metaData.map((item) => (
                  <div className="jobCardDetails_data__metaData_item">
                    {item}
                  </div>
                ))
              )}
          </div>
        </div>
      </div>
      <div className="jobCardTags">
        {tags &&
          Array.isArray(tags) &&
          tags.length > 0 &&
          React.Children.toArray(
            tags.map((tag) => (
              <button
                onClick={() => handleSettingFilters(tag)}
                className="jobCardTags_tag"
              >
                {tag}
              </button>
            ))
          )}
      </div>
    </Container>
  );
}

const Container = styled.section`
  &.featured {
    border-color: var(--dark-cyan);
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
  padding: 32px 40px;
  background-color: var(--white);
  border-left: 5px solid transparent;
  border-radius: 6px;
  box-shadow: var(--shadow-1);
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
  @media (max-width: 548px) {
    padding: 32px 19px;
    margin: 40px 0;
  }
  .jobCard {
    &Details {
      display: flex;
      gap: 24px;
      @media (max-width: 548px) {
        flex-direction: column;
        gap: 2px;
        width: 100%;
      }
      &_image {
        width: 88px;
        aspect-ratio: 1/1;
        @media (max-width: 548px) {
          width: 48px;
          margin-top: -50px;
        }
        & > img {
          width: 100%;
          height: auto;
          object-position: center;
        }
      }
      &_data {
        display: flex;
        flex-direction: column;
        gap: 11px;
        @media (max-width: 548px) {
          gap: 16px;
          border-bottom: 1px solid var(--dark-1);
          padding-bottom: 19px;
        }
        &__basics {
          display: flex;
          align-items: center;
          gap: 16px;
          & > h2 {
            font-size: 17px;
            line-height: 100%;
            letter-spacing: 0.04em;
            color: var(--dark-cyan);
            @media (max-width: 548px) {
              font-size: 15px;
              letter-spacing: 0em;
            }
          }
          &_chip {
            padding: 7px 8px 3px;
            color: var(--white);
            font-size: 14px;
            line-height: 100%;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            border-radius: 12px;
            background-color: var(--dark-cyan);
            &.featured {
              background-color: var(--dark-2);
            }
          }
        }
        &__title {
          color: var(--dark-2);
          font-weight: 700;
          font-size: 22px;
          line-height: 100%;
          cursor: pointer;
          &:hover {
            color: var(--dark-cyan);
          }
          @media (max-width: 548px) {
            font-size: 15px;
          }
        }
        &__metaData {
          display: flex;
          gap: 16px;
          &_item {
            font-size: 18px;
            line-height: 100%;
            color: var(--dark-1);
            &:not(:last-child)::after {
              content: "           •";
            }
            @media (max-width: 548px) {
              font-size: 16px;
            }
          }
        }
      }
    }
    &Tags {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      &_tag {
        background-color: var(--light-2);
        padding: 9px 8px 7px;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: var(--dark-cyan);
        border-radius: 4px;
        border: none;
        outline: none;
        &:hover {
          background-color: var(--dark-cyan);
          color: var(--light-1);
        }
      }
    }
  }
`;
