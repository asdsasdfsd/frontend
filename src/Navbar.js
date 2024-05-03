import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import { Nav, Avatar, Dropdown, Select, Button } from '@douyinfe/semi-ui';
import {IconSemiLogo, IconLanguage} from '@douyinfe/semi-icons';
import { IconCalendar, IconAvatar,IconList ,IconBadge } from '@douyinfe/semi-icons-lab';

function NavbarVertical(){
    return(
        <Nav className = 'sidebar'
            limitIndent = { false }
            renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
                const routerMap = {
                    Home: "/",
                    Calendar: "/calendar",
                    Create: "/create",
                    Undo: "/undo",
                    Finished: "/finished",
                    Cancelled: "/cancelled",
                    Notification: "/notification"
                };
                return (
                    <Link
                        style={{ textDecoration: "none" }}
                        to={routerMap[props.itemKey]}
                    >
                        {itemElement}
                    </Link>
                );
            }}
        >
            <Nav.Item itemKey={'Home'} level={0} text={'HomePage'} icon={<IconAvatar />} />
            <Nav.Item itemKey={'Calendar'} level={0} text={'Calendar'} icon={<IconCalendar />} />
            <Nav.Sub itemKey={'Tasks'} level={0} text="Tasks" icon={<IconList />}>
                <Nav.Item itemKey={'Create'} level={1} text={'Create'} icon={<IconAvatar />}/>
                <Nav.Item itemKey={'Undo'} level={1} text={'Undo'} />
                <Nav.Item itemKey={'Finished'} level={1} text={'Finished'} />
                <Nav.Item itemKey={'Cancelled'} level={1} text={'Cancelled'} />
            </Nav.Sub>
            <Nav.Item itemKey={'Notification'} level={0} text={'Notification'} icon={<IconBadge />} />

            <Nav.Footer collapseButton={true} />
        </Nav>
    );
}

function NavbarHorizontal(){
    return(
        <Nav className='topbar'
             mode= {'horizontal'}
        >
             <Nav.Header logo={<IconSemiLogo style={{height: '36px', fontSize: 36 }} />} text={'Personal Tasks Management System'} />
             <Nav.Footer>
                <Select defaultValue='Chinese' style={{ width: 120, marginRight: 10 }} insetLabel={<IconLanguage />}>
                    <Select.Option value='Chinese'>中文</Select.Option>
                    <Select.Option value='English'>English</Select.Option>
                    <Select.Option value='Korean'>한국어</Select.Option>
                    <Select.Option value='Japanese'>日本語</Select.Option>
                </Select>
                <Button style={{ marginRight: 10 }}>切换至全球版</Button>
                <Dropdown
                    position="bottomRight"
                    render={
                        <Dropdown.Menu>
                            <Dropdown.Item>详情</Dropdown.Item>
                            <Dropdown.Item>退出</Dropdown.Item>
                        </Dropdown.Menu>
                    }
                >
…                   <Avatar size="small" color='light-blue' style={{ margin: 4 }}>BD</Avatar>
                    <span>Bytedancer</span>
                </Dropdown>
             </Nav.Footer>
        </Nav>
    );
}

function Navbar(){
    return(
        <>
            <NavbarHorizontal />
            <NavbarVertical />
        </>
    );
}

export default Navbar;