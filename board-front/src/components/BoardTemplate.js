import axios from 'axios';
import React, { useEffect } from 'react';
import { api, boardList } from '../api/boardApi';




function BoardTemplate({children}){

  
    return (
    <>
    <div className="title" style={{textAlign:'center'}}>
        <h1>스프링 부트 리액트 게시판</h1>
    </div>
    <div className="content">
        {children}
    </div>
    </>
  );
};

export default BoardTemplate;