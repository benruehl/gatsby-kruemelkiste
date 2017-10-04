import React from 'react'

class MenuButton extends React.Component {

    render() {
        return (
            <div style={{ fontSize: '2rem', userSelect: 'none', }}>
                {'\u2261'}
            </div>
        );
    }
}

export default MenuButton