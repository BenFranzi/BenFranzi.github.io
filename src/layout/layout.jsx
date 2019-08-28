import React, {useEffect, useState} from 'react';
import Markdown from '../components/markdown'

import AboutMe from '../markdown/about-me.md'

const Layout = () => {
    const [md, setMd] = useState("");

    useEffect(() => {
        fetch(AboutMe).then(res => res.text()).then(text => setMd(text));
    }, []);

    return (
        <div>
            <Markdown source={md}/>
        </div>
    );
}

export default Layout;