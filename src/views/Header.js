import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

export default function Header({ filters, setFilters }) {
  const handleRemove = (name) => {
    setFilters(filters.filter((filter) => filter !== name));
  };
  const handleClear = () => {
    setFilters([]);
  };
  return (
    <Container>
      {filters && Array.isArray(filters) && filters.length > 0 && (
        <div className="filtersApplied">
          <div className="filtersApplied_filters">
            <div className="filtersApplied_filters__container">
              {React.Children.toArray(
                filters.map((data) => (
                  <div className="filtersApplied_filters__container_filter">
                    <div className="filtersApplied_filters__container_filter__text">
                      {data}
                    </div>
                    <div
                      className="filtersApplied_filters__container_filter__close"
                      role="button"
                      tabIndex="0"
                      onClick={() => handleRemove(data)}
                    >
                      <MdClose />
                    </div>
                  </div>
                ))
              )}
            </div>
            <button
              className="filtersApplied_filters__clear"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.header`
  height: 156px;
  background-color: var(--dark-cyan);
  background-image: url("/images/bg-header-desktop.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  .filtersApplied {
    margin: auto;
    max-width: 1158px;
    padding: 0 24px;
    transform: translateY(165%);
    &_filters {
      background-color: var(--white);
      padding: 20px 27px 20px 40px;
      box-shadow: var(--shadow-1);
      border-radius: 6px;
      display: flex;
      gap: 24px;
      justify-content: space-between;
      &__container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        &_filter {
          background-color: var(--light-2);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          &__text {
            padding: 9px 8px 7px;
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            color: var(--dark-cyan);
          }
          &__close {
            color: var(--light-2);
            background-color: var(--dark-cyan);
            font-size: 14px;
            height: 100%;
            padding: 9px;
            display: grid;
            place-items: center;
            cursor: pointer;
            &:hover {
              background-color: var(--dark-2);
            }
          }
        }
      }
      &__clear {
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--dark-cyan);
        font-size: 16px;
        line-height: 100%;
        &:hover {
          color: var(--dark-2);
        }
      }
    }
  }
`;
