import classNames from 'classnames/bind';
import Menu from './Menu';
import { MenuItem } from './Menu';
import config from '../../../config';
import styles from './Sidebar.module.scss';
import { HomeIcon, UserGroupIcon, LiveIcon } from '../../../components/Icons';
import { HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '../../../components/Icons';
import SuggestedAccounts from '../../../components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label='Suggested accounts'/>
            <SuggestedAccounts label='Following accounts'/>
        </aside>
    )
}

export default Sidebar;