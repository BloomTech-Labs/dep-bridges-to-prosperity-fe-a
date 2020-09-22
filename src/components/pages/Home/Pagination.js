import React from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';

export default function Pagination(props) {
  let { page, limit, giveLimit, nextPage, prevPage } = props;

  return (
    <div className="pagination-wrapper">
      <Tooltip title="Previous">
        <LeftOutlined
          className="paginate-btn"
          onClick={prevPage}
          style={{ fontSize: '20px' }}
        >
          Previous Page
        </LeftOutlined>
      </Tooltip>
      <Tooltip title="change amount shown by hitting enter">
        <Input
          size="medium"
          className="pagination-counter"
          onPressEnter={giveLimit}
          placeholder={`Page ${page} showing ${limit} sites`}
          style={{
            width: '200px',
            marginTop: '15px',
            marginLeft: '20px',
            marginRight: '20px',
          }}
        ></Input>
      </Tooltip>
      <Tooltip title="Next">
        <RightOutlined
          className="paginate-btn"
          onClick={nextPage}
          style={{ fontSize: '20px' }}
        >
          {' '}
          Next Page
        </RightOutlined>
      </Tooltip>
    </div>
  );
}
