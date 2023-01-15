import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/321997564_930003961318908_2131497625882893567_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3xC2xDlQ2rkAX8nXP46&tn=CMuWHBDP7ne5JmF6&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBIJZHCsCOBDNIbuLC98tCqE25yyBxxGItaX46xDYvj3w&oe=63C7E2FA" alt="Hoa" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Đào Lê Phương Hoa
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>
                    hoa
                </p>
            </div>
        </div>
    )
}

export default AccountItem;
