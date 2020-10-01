import React, { PureComponent, createContext } from 'react'

export const ThemeContexts = createContext();

export class ThemeContext extends PureComponent {
    constructor(props){
        super(props);
        this.state = { isDarkMode: true };
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
        this.setState({ isDarkMode: !this.state.isDarkMode });
    }

    render() {
        return (
            <ThemeContexts.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContexts.Provider>            
        )
    }
}
