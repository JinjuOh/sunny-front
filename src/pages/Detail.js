import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        };
        this.idx = this.props.match.params.idx;
    }

    componentDidMount() {
        axios.post('http://localhost:8090/board/detail/'+this.idx, {
            idx: this.idx,
            message: 'hi'
        })
        .then( response => {
            // console.log(response)
            this.setState({
                isLoaded : true
                , data : response.data
            });
        } )
        .catch( response => { console.log(response) } );
    }

    render() {
        const {isLoaded, data} = this.state;
        return (
            <div className="container">
                <h3>
                    상세
                </h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>{data.writer}</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>내용</th>
                        </tr>
                        <tr>
                            <td colSpan={2}>{data.content}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/list">
                    <button className="btn btn-default">목록</button>
                </Link>
                <Link to={"/write/"+this.idx}>
                    <button className="btn btn-default">수정</button>
                </Link>
            </div>
        );
    }
}

export default Detail;