import React from 'react';
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {AppRoutes} from "../../../shared/config/routeConfig/routeConfig";

const Navbar = () => {
    return (
        <div className={styles['Navbar']}>
            <AppLink text={'About'} classname={'me-2 ms-auto'} to={AppRoutes.ABOUT} />
            <AppLink theme={AppLinkTheme.SECONDARY} text={'Contacts'} to={AppRoutes.CONTACTS} />
        </div>
    );
};

export default Navbar;