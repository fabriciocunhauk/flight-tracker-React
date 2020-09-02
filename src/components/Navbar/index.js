import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

const NavBar = () => {
    return (
        <div className="App">
            <div style={{ height: '300px', position: 'relative' }}>
                <Layout fixedHeader>
                    <Header style={{ backgroundColor: "transparent" }} title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                        <Navigation>
                            <a href="/">Link</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="/">Link</a>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
            </div>
        </div>
    )
}

export default NavBar;