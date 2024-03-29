/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link } from 'react-router-dom'

const navBoxStyle = css`
    width: 100%;
    max-width: 480px;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9999;
`

const navStyle = css`
    display: flex;
    justify-content: space-around;
`

const navContentStyle = css`
    padding: 20px;
    flex: 1;
    background-color: red;
    a {
        color: white;
        text-decoration: none!important;
    }
`

const Navbar = () => {
    return (
        <nav css={navBoxStyle}>
            <ul css={navStyle}>
                <li css={navContentStyle}>
                    <Link to='/my-pokemon'>My Pokemon</Link>
                </li>
                <li css={navContentStyle}>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;