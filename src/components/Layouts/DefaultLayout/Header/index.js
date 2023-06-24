import { useEffect, useState } from 'react';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import ResultItem from '~/components/ResultItem';

const cx = classNames.bind(styles);

console.log(images);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="youtube" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <ResultItem />
                                <ResultItem />
                                <ResultItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" />
                        <button className={cx('clear')}>
                            <CloseIcon />
                        </button>

                        <button className={cx('search-btn')}>
                            <YoutubeSearchedForIcon />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('action')}></div>
            </div>
        </div>
    );
}

export default Header;
