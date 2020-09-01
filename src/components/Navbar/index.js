import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

const NavBar = () => {
    return (
        <div className="App">
            <div style={{ height: '300px', position: 'relative' }}>
                <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>
                    <Header transparent title="Title" style={{ color: 'white' }}>
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