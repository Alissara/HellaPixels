import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { selectUserPhotos } from '../../reducers/selectors';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = (state, myProps) => ({
  photos: selectUserPhotos(state),
  userId: parseInt(myProps.match.params.userId)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (userid) => dispatch(fetchPhotos(userid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
