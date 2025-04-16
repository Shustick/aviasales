import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { toggleCheckbox } from '../../store/actions/checkboxActions';

import styles from './TransfersFilter.module.scss';

function TransfersFilter() {
  const checkboxData = useSelector((state) => state.checkbox);
  const dispatch = useDispatch();

  const handleCheckbox = (id) => {
    dispatch(toggleCheckbox(id));
  };

  useEffect(() => {
    console.log(checkboxData);
  }, [checkboxData]);

  return (
    <div className={styles.transfersFilter}>
      <h2 className={styles.transfersFilter__title}>Количество пересадок</h2>
      <ul>
        {checkboxData.map((item) => (
          <li key={item.id} className={styles.transferOption}>
            <input
              type="checkbox"
              id={item.id}
              checked={item.checked}
              className={styles.transferOption__checkbox}
              onChange={() => {
                handleCheckbox(item.id);
              }}
            />
            <label htmlFor={item.id} className={styles.transferOption__label}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransfersFilter;
