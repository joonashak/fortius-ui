/**
 * This component has twofold usage: It displays either a list of past workouts or a list of
 * future plans.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfiniteScroll from 'react-infinite-scroller';
import NavButton from '../utils/NavButton';
import ListHeader from './ListHeader';
import WorkoutListItem from './WorkoutListItem';
import sessionService from '../../services/sessionService';


class WorkoutList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessions: [],
      hasMore: true,
      loading: true,
      selectedItems: [],
      order: this.props.type === 'workouts' ? 'desc' : 'asc',
    };
  }

  componentDidMount = async () => {
    /**
     * Initial load in react-infinite-scroller doesn't appear to work. Load first page
     * of data here and set <InfiniteScroll initialLoad={false}>.
     */
    await this.loadMore(1);
  };

  loadMore = async (page) => {
    this.setState({ loading: true });
    const { order } = this.state;
    const newSessions = await sessionService.get('workouts', order, page);

    newSessions.length
      ? this.setState(prevState => ({ sessions: prevState.sessions.concat(newSessions) }))
      : this.setState({ hasMore: false });
    this.setState({ loading: false });
  };

  changeOrder = async () => this.setState(async (prevState) => {
    const { type } = this.props;
    const order = prevState.order === 'desc' ? 'asc' : 'desc';
    const sessions = await sessionService.get(type, order, 1);
    return { sessions, order };
  });

  render = () => {
    const { sessions, loading, hasMore } = this.state;

    return (
      <div className="content">
        <ListHeader />
        <Row className="after-fixed-list-header">
          <Col xs={12}>
            <NavButton to="/" text="Create New" accent />
            <InfiniteScroll
              pageStart={1}
              loadMore={this.loadMore}
              hasMore={hasMore}
              initialLoad={false}
              className="big-list"
            >
              {sessions.map((session) => <WorkoutListItem session={session} key={`list-item-${session.public_key}`} />)}
            </InfiniteScroll>
            {loading
              ? (
                <Row className="big-list-item">
                  <Col className="list-msg">Loading...</Col>
                </Row>
              ) : !hasMore
              ? (
                <Row className="big-list-item">
                  <Col className="list-msg">All data loaded.</Col>
                </Row>
              ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

WorkoutList.propTypes = {
  /** Switch between showing past workouts and future plans. */
  type: PropTypes.oneOf(['workouts', 'plans']).isRequired,
};

export default WorkoutList;
