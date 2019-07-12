import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../redux/home/actions';
import { Link } from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getHomeList()
        }
    }

    getList() {
        let {list} = this.props
        return list.map((item, index) => <div key={index}>{item.name} : {item.title}</div>)
    }

    render() {
        return (
            <div>
                <p>这是home页1</p>
                <button onClick={() => this.props.getHomeList()}>click</button>
                <div>
                    {this.getList()}
                </div>
                <Link to="/login">点击跳转到登录</Link>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    list: state.home.newsList,
});
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
});

const exportHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default exportHome