import React, { Component, PropTypes } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default class Widget extends Component {
  render() {
    const { children, title, ...otherProps } = this.props;

    return (
      <Card {...otherProps}>
        {title ? <CardTitle title={title} /> : null}
        {children}
      </Card>
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
};
