import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { faXmarkCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './Search.module.scss';
import PopperWrapper from '../../../components/Popper/Wrapper';
import AccountItem from '../../../components/AccountItem';
import { SearchIcon } from '../../../components/Icons';
import { useDebounce } from '../../../hooks';
import * as searchServices from '../../../services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const inputRef = useRef(null);

    const [searchResult, setSearchResult] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchInput, 500);

    // console.log('[Render] Search');

    useEffect(() => {
        if (debounce.trim()) {
            const fetchApi = async () => {
                setLoading(true);

                const result = await searchServices.search(debounce);

                setSearchResult(result);
                setLoading(false);
            };

            fetchApi();
        } else {
            setSearchResult([]);
        }
    }, [debounce])

    const onHideResult = () => {
        setShowResult(false);
    }

    const onClear = () => {
        setSearchInput('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const onInputChange = (e) => {
        const searchInput = e.target.value;
        if (searchInput.startsWith(' ')) {
            return;
        }
        setSearchInput(searchInput)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        /**
         * Using a wrapper <div> or <span> tag around the reference element solves this 
         * by creating a new parentNode context.
         */
        <div>
            <HeadlessTippy
                interactive
                // appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                onClickOutside={onHideResult}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')} aria-expanded="true">
                    <input value={searchInput} ref={inputRef}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={onInputChange}
                        // onBlur={() => setShowResult(false)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchInput && !loading && (
                        <button type='button' className={cx('clear')} onClick={onClear}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>

                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button type='button' className={cx('search-btn')} onMouseDown={onSubmit}>
                        <SearchIcon />
                    </button>

                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search;