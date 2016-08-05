import React, { Component, PropTypes } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import styles from './widget.scss';
import ProgressBar from 'react-toolbox/lib/progress_bar';

export default class Widget extends Component {
  render() {
    const { children, title, ...otherProps } = this.props;

    return (
      <div className={styles.container}>
        <Card {...otherProps}>
          {title ? <CardTitle title={title} /> : null}
          {this.renderContent()}
        </Card>
      </div>
    );
  }
  renderContent() {
    if (this.props.status === 'loading') {
      return (
        <div className={styles.loader}>
          <ProgressBar type="circular" mode="indeterminate" multicolor={true} />
        </div>
      );
    } else if (this.props.status === 'error') {
      return 'Failed to load the widget';
    } else if (this.props.status === 'loaded' || this.props.status === undefined) {
      if (typeof this.props.children === 'function') {
        return this.props.children();
      } else {
        return this.props.children;
      }
    }
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
  status: PropTypes.oneOf(['loading', 'loaded', 'error'])
};
