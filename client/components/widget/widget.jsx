import React, { Component, PropTypes } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import styles from './widget.scss';

export default class Widget extends Component {
  render() {
    const { children, title, ...otherProps } = this.props;

    return (
      <div className={styles.container}>
        <Card {...otherProps}>
          {title ? <CardTitle title={title} /> : null}
          {children}
        </Card>
      </div>
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
};
