import React from 'react'

class MenuButton extends React.Component {

    render() {
        return (
            <div css={{
                fontSize: '2rem',
                lineHeight: '0',
                userSelect: 'none',
            }}>
                {'\u2261'}
            </div>
        );
    }
}

export default MenuButton