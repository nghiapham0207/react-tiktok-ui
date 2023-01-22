import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "../../Button";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')}
                    src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/321997564_930003961318908_2131497625882893567_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3xC2xDlQ2rkAX8nXP46&tn=CMuWHBDP7ne5JmF6&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBIJZHCsCOBDNIbuLC98tCqE25yyBxxGItaX46xDYvj3w&oe=63C7E2FA"
                    alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hoahanasi</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Đào Lê Phương Hoa</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.8M</strong>
                    <span className={cx('label')}>Followers</span>                    
                    <strong className={cx('value')}>8.8M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
