import styles from './ResultItem.module.scss';
import classNames from 'classnames/bind';

import SearchIcon from '@mui/icons-material/Search';

const cx = classNames.bind(styles);

function ResultItem() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('search-item')}>
                <SearchIcon />
            </button>
            <h4 className={cx('info')}>long thai</h4>
        </div>
    );
}

export default ResultItem;
