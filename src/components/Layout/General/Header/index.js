import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import PopperWrapper from '../../../../components/Popper/Wrapper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';

const cx = classNames.bind(styles);
// không thích thì sài styles['post-item'];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, [])
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} height="42" width="118" alt="TikTok" />
            </div>
            <Tippy
                interactive={true}
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button type='button' className={cx('clear')}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button type='button' className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Upload</Button>
                <Button primary 
                // leftIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} />}
                >Log in</Button>
            </div>
        </div>
    </header>
}

export default Header;
