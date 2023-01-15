import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to, href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children, 
    leftIcon,
    rightIcon,
    onClick, ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if(disabled){
        delete props.onClick;
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large
    });
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button;
