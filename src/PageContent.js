import React, { PureComponent } from 'react';
import { ThemeContexts } from './contexts/ThemeContext';


class PageContent extends PureComponent {   
static contextType = ThemeContexts;
    render() {
        const { isDarkMode } = this.context;
        const styles = {
            backgroundColor: isDarkMode ? "black" : "white",
            height: "100vh",
            width: "100vw"
        }
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContent