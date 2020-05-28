import React from 'react';
import classes from './Layout.module.css';
import Logo from "../../components/UI/Logo/Logo";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Menu from "../../components/Navigation/Menu/Menu";
import SocialBlock from "../../components/SocialBlock/SocialBlock";
import Icon from "../../components/SocialBlock/Icon/Icon";
import Phone from "../../components/Phone/Phone";
import Copyright from "../../components/UI/Copyright/Copyright";

const buildMenu = () => {
    return [
        {to: '/', label: 'Главная', exact: true},
        {to: '/about', label: 'Обо мне', exact: false},
        {to: '/services', label: 'Услуги', exact: false},
        {to: '/contacts', label: 'Контакты', exact: false},
    ]
}

export default class Layout extends React.Component {

    state = {
        menu: false
    }

    onMenuClick = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onMenuClose = () => {
        this.setState({
            menu: false
        })
    }

    render() {

        return (
            <div className={classes.Layout}>

                <MenuToggle
                    isOpen={this.state.menu}
                    onClick={this.onMenuClick}
                />

                <Drawer
                    isOpen={this.state.menu}
                    onClick={this.onMenuClose}
                >
                    <Logo
                        label={'N_Gordeyuk'}
                        slogan={'Послеродовое пеленание'}
                        styleLogo={'drawer-logo'}
                        onClick={this.onMenuClose}
                    >
                    </Logo>

                    <Menu
                        arrayNav={buildMenu()}
                        onClick={this.onMenuClose}
                    />

                    <SocialBlock>
                        <Icon
                            href={'https://facebook.com'}
                            code={'fa-facebook'}
                        />
                        <Icon
                            href={'https://facebook.com'}
                            code={'fa-instagram'}
                        />
                        <Icon
                            href={'https://facebook.com'}
                            code={'fa-vk'}
                        />
                    </SocialBlock>

                    <Phone
                        number={['+375 (29) 829-33-87']}
                    />

                    <Copyright/>
                </Drawer>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}