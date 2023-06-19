import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

console.log(images);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="youtube" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search" />

                    <button className={cx('search-btn')}>
                        <YoutubeSearchedForIcon />
                    </button>
                </div>

                <div className={cx('action')}></div>
            </div>
        </div>
    );
}

export default Header;
