import React, {Component} from 'react';
import {Row, Col, Form, Input, Button,message} from 'antd';
import './profile.css';
import {addPost} from "../../Service";
import {connect} from 'react-redux';
const FormItem = Form.Item;
const { TextArea } = Input;

class Profile extends Component{

    state = {
        formLayout: 'vertical',
        post: {}
    };
    

    componentWillMount(){

        if(!this.props.user) return this.props.history.push('/login');

    }

    handleChange = (e) => {
        const {post} = this.state;
        const field = e.target.name;
        post[field] = e.target.value;
        this.setState({post});
    };

    loadFile = (e) => {
        const {post} = this.state;
        post["picture"] = e.target.files[0];
        this.setState({post})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        addPost(this.state.post)
            .then(post=>{
                message.success('Post Creado');
            })
    };

    render(){
        const { formLayout } = this.state;
        const { user } = this.props;
        return(

            <div>
                
                <Row type="flex">
                    <Col span={6}>
                        <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="" className="profile-pic"/>
                    </Col>
                    <Col span={8}>
                        <h2>{user.email}</h2>

                        <p>Nuevo post</p>

                        <Form layout={formLayout} onSubmit={this.handleSubmit}>

                            <FormItem
                                label="Sube tu foto"
                            >
                                <input type="file" onChange={this.loadFile}/>
                            </FormItem>
                            <FormItem
                            label="Description"
                            >
                                <TextArea rows={6} onChange={this.handleChange} name="description"/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </FormItem>
                        </Form>

                    </Col>
                </Row>

            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return{
        user: state.user
    }
}



export default connect(mapStateToProps)(Profile);