import React from 'react';
import {Link, LinkProps} from "react-router-dom";
import {AppRoutes} from "../../config/routeConfig/routeConfig";
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    text: string;
    to: AppRoutes;
    theme?: AppLinkTheme;
    classname?: string;
    children?: React.ReactNode;
}

export const AppLink: React.ComponentType<AppLinkProps> = (props) => {
    const {to, text, children, classname, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
    return (
        <Link className={[styles['AppLink'], classname, styles[theme]].join(' ')} to={to} {...otherProps}>
            {text}
            {children}
        </Link>
    );
};
