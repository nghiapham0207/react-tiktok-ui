import Tippy from '@tippyjs/react/headless'; // different import path!
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PopperWrapper from '../Wrapper';
import MenuItem from "./MenuItem";
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {
    alert('defaultFn');
}

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.child;
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory([...history, item.child]); // note
                } else {
                    onChange(item);
                }
            }} />;
        });
    }
    return (
        <Tippy
            // visible
            interactive
            hideOnClick={false}
            delay={[0, 700]}
            offset={[12, 8]}
            placement='bottom-end'
            onHide={() => { setHistory(history.slice(0, 1)) }}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title={current.title}
                            onBack={() => {
                                setHistory(history.splice(0, history.length - 1));
                            }}
                        />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
}

export default Menu;
