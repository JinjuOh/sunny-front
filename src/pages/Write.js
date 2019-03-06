import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
            , isLoaded: false
        };
        this.idx = this.props.match.params.idx;
    }

    save = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8090/board/write/', {
            idx: this.idx
            , title: event.target.title.value
            , writer : event.target.writer.value
            , content : event.target.content.value
        })
        .then( response => {
            window.location.href = response.data;
        } )
        .catch( response => { console.log(response) } );
    }

    render() {
        // const {error, isLoaded, list} = this.state;
        return (
            <div className="container">
                <h3>
                    글쓰기
                </h3>
                <form onSubmit={this.save}>
                    <div className="form-group">
                        <label htmlFor="title">제목</label>
                        <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="writer">작성자</label>
                        <input type="text" className="form-control" id="writer" placeholder="작성자"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">내용</label>
                        <textarea className="form-control" id="content" placeholder="내용"/>
                    </div>
                    <button type="submit" className="btn btn-primary">제출</button>
                    <Link to="/list">
                        <button className="btn btn-default">목록</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Write;