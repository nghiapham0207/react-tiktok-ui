import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
// không thích thì sài styles['post-item'];

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            logo
        </div>
    </header>
}

export default Header;
