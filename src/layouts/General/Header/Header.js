import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/'; // different import path!
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import {
    faEllipsisVertical, faEarthAsia, faGear, faCoins, faUser,
    faKeyboard, faCircleQuestion, faSignOut
} from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss';
import images from '../../../assets/images';
import config from '../../../config';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu/index';
import { UploadIcon, MessageIcon, InboxIcon } from '../../../components/Icons';
import Image from '../../../components/Image';
import Search from '../Search';
// import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
// không thích thì sài styles['post-item'];
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        child: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
];

function Header() {
    const currentUser = true;

    // console.log('[Render] Header');

    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            seperate: true
        },
    ];

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <a href={config.routes.home} className={cx('logo')}>
                <img src={images.logo} height="42" width="118" alt="TikTok" />
            </a>

            {/* Search */}
            <Search />

            <div className={cx('actions')}>
                {currentUser ? (<>
                    <Tippy delay={[0, 200]} content='Upload Video' placement='bottom'>
                        <button className={cx('action-btn')}>
                            <UploadIcon />
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 200]} content='Messages' placement='bottom'>
                        <button className={cx('action-btn')}>
                            <MessageIcon />
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 200]} content='Inbox' placement='bottom'>
                        <button className={cx('action-btn')}>
                            <InboxIcon />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>
                </>) : (<>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </>)}

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/321997564_930003961318908_2131497625882893567_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3xC2xDlQ2rkAX8nXP46&tn=CMuWHBDP7ne5JmF6&_nc_ht=scontent.fdad1-1.fna&oh=00_AfBIJZHCsCOBDNIbuLC98tCqE25yyBxxGItaX46xDYvj3w&oe=63C7E2FA"
                            alt="Hoa" className={cx('user-avatar')}
                            fallback='https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/324246330_573783264655352_3998884825336887194_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=pSJ9wfYrQIoAX__FkW5&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAz8EF0NeHAL9mDdtAP5CoB_llSJQQeHwhK9NQ9LFOwIQ&oe=63CBDCAC'
                        />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div >
    </header >
}

export default Header;
