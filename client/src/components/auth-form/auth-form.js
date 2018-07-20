import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Row, Col } from 'antd';
import {login, signUp} from "../../Service";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ironActions from '../../redux/actions';

const FormItem = Form.Item;


class AuthForm extends Component{

    state= {
        user: {}
    };

    handleSubmit = (e) => {
        // quitamos el refresh de la página
        e.preventDefault();

        // chacamos si estamos en login para loguear al usuario
        if(this.props.match.path === "/login"){
            this.props.actions.login(this.state.user)
                .then(()=>{
                    this.props.history.push("/profile");
                })
        }

        // si no entonces creamos el usuario
        this.props.actions.signUp(this.state.user)
            .then(user=>{
                this.props.history.push('/login');
            })

    };

    handleChange = (e) => {
        const {user} = this.state;
        const field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    };

    componentDidMount(){
        console.log(this.props);
    }

    render() {

        return (
            <Row>
                <Col span={6} offset={9}>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Input name="email"
                                   prefix={<Icon type="user"
                                 style={{ color: 'rgba(0,0,0,.25)' }} />}
                                   placeholder="Username"
                                   onChange={this.handleChange}/>
                        </FormItem>
                        <FormItem>
                            <Input name="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={this.handleChange}/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>

                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>

                </Col>
            </Row>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return{
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(ironActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);