import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Tippy from "@tippyjs/react/headless";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PopperWrapper from '../Popper/Wrapper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    )
    return (

        <div>
            <Tippy
                offset={[-20, 0]}
                // visible
                interactive
                delay={[800, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/321997564_930003961318908_2131497625882893567_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3xC2xDlQ2rkAX8nXP46&tn=CMuWHBDP7ne5JmF6&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBIJZHCsCOBDNIbuLC98tCqE25yyBxxGItaX46xDYvj3w&oe=63C7E2FA"
                        alt=""
                        className={cx('avatar')}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hoahanasi</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Đào Lê Phương Hoa</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;
