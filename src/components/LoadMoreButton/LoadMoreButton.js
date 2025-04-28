import { useDispatch } from 'react-redux';

import { handleLoadMoreBtn } from '../../store/actions/loadMoreBtnActions';

import styles from './LoadMoreButton.module.scss';

function LoadMoreButton() {
  const dispatch = useDispatch();
  const handleShowMore = () => {
    dispatch(handleLoadMoreBtn());
  };

  return (
    <button className={styles.LoadMoreButton} onClick={handleShowMore}>
      Показать еще 5 билетов!
    </button>
  );
}

export default LoadMoreButton;
