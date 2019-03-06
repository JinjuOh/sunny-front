import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        };
    }

    componentDidMount() {
        axios.post('http://localhost:8090/board/list', {
            user: 'velopert',
            message: 'hi'
        })
        .then( response => {
            this.setState({
                isLoaded : true
                , list : response.data
            });
        } )
        .catch( response => { console.log(response) } );
    }

    render() {
        const {error, isLoaded, list} = this.state;
        return (
            <div className="container">
                <h3>
                    리스트
                </h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map(item=>(
                        <tr key={item.idx}>
                            <td>{item.idx}</td>
                            <td><Link to={"detail/"+item.idx}>{item.title}</Link></td>
                            <td>{item.writer}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Link to="/write">
                    <button className="btn btn-default">글쓰기</button>
                </Link>
            </div>
        );
    }
}

export default List;