import React from 'react';
import { connect } from 'react-redux';
import agent from '../agent';
import { LOGIN } from '../constants/actionTypes';

import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import LoginForm from './../forms/LoginForm';

import './styles/Login.css';

const carouselItems = [
  {
    src: 'https://static.pexels.com/photos/33972/pexels-photo.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
];


const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) })
});


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };

    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) {
      return;
    }

    const nextIndex = this.state.activeIndex === carouselItems.length - 1 ?
      0 : this.state.activeIndex + 1;

    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) {
      return;
    }

    const nextIndex = this.state.activeIndex === 0 ? carouselItems.length -1 : this.state.activeIndex - 1;

    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) {
      return;
    }

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const carouselSlides = carouselItems.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}>
          <img src={item.src} alt={item.altText} className="d-block img-fluid" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="login-box container">
        <div className="row">
          <div className="col-md-4 login-sec">
            <h2 className="text-center">AppName</h2>

            <LoginForm
              onSubmit={values => this.props.onSubmit(values.username, values.password)}>
            </LoginForm>
          </div>
          <div className="col-md-8 banner-sec d-none d-md-block">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}>

              <CarouselIndicators
                items={carouselItems}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex} />

              {carouselSlides}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
