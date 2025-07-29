import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { normalizeAlign } from '../../services/normalizer';

import Element from '../element';

const getFirstPage = (current, last, delta) => {
  if (current === 1) {
    return 1;
  }

  const minPage = last - delta * 2;
  const page = Math.min(current - delta, minPage);

  return page <= 0 ? 1 : page;
};

const getLastPage = (current, total, delta) => {
  if (current === total) {
    return total;
  }

  const maxPage = delta * 2 + 1;
  const page = Math.max(current + delta, maxPage);
  return page > total ? total : page;
};

const Pagination = ({
  current = 1,
  disabled,
  total = 1,
  next = 'Next',
  previous = 'Previous',
  showPrevNext = true,
  showFirstLast,
  delta = 1,
  autoHide = true,
  className,
  size,
  align,
  rounded,
  onChange,
  renderAs = 'nav',
  ...props
}) => {
  if ((total <= 1 && autoHide) || current > total) {
    return null;
  }

  const lastPage = getLastPage(current, total, delta);
  const firstPage = getFirstPage(current, lastPage, delta);
  const prevDisabled = current === 1 || disabled;
  const nextDisabled = current === total || disabled;

  return (
    <Element
      {...props}
      renderAs={renderAs}
      className={classnames('pagination', className, {
        [`is-${size}`]: size,
        [`is-${normalizeAlign(align)}`]: align,
        'is-rounded': rounded,
      })}
      aria-label="pagination"
    >
      {showPrevNext && (
        <>
          <a
            role="button"
            tabIndex={0}
            onClick={
              prevDisabled
                ? undefined
                : () => {
                    return onChange(current - 1);
                  }
            }
            className="pagination-previous"
            disabled={prevDisabled}
          >
            {previous}
          </a>
          <a
            role="button"
            tabIndex={0}
            onClick={
              nextDisabled
                ? undefined
                : () => {
                    return onChange(current + 1);
                  }
            }
            className="pagination-next"
            disabled={nextDisabled}
          >
            {next}
          </a>
        </>
      )}
      {delta > 0 && (
        <>
          <ul className="pagination-list">
            {showFirstLast && current !== 1 && firstPage !== 1 && (
              <>
                <li key={1}>
                  <a
                    role="button"
                    tabIndex={0}
                    className="pagination-link"
                    onClick={() => {
                      return onChange(1);
                    }}
                    aria-label="Page 1"
                    aria-current="page"
                    disabled={disabled}
                  >
                    1
                  </a>
                </li>
                <li>
                  <span className="pagination-ellipsis">&hellip;</span>
                </li>
              </>
            )}
            {Array(lastPage - firstPage + 1)
              .fill(0)
              .map((_, i) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={i + firstPage}>
                    <a
                      role="button"
                      tabIndex={0}
                      className={classnames('pagination-link', {
                        'is-current': current === i + firstPage,
                      })}
                      onClick={
                        current === firstPage + i
                          ? undefined
                          : () => {
                              return onChange(firstPage + i);
                            }
                      }
                      aria-label={`Page ${i + firstPage}`}
                      aria-current="page"
                      disabled={disabled}
                    >
                      {i + firstPage}
                    </a>
                  </li>
                );
              })}
            {showFirstLast && current !== lastPage && total !== lastPage && (
              <>
                <li key={total}>
                  <span className="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a
                    role="button"
                    tabIndex={0}
                    className="pagination-link"
                    onClick={() => {
                      return onChange(total);
                    }}
                    aria-label={`Page ${total}`}
                    aria-current="page"
                    disabled={disabled}
                  >
                    {total}
                  </a>
                </li>
              </>
            )}
          </ul>
        </>
      )}
    </Element>
  );
};

export default Pagination;
