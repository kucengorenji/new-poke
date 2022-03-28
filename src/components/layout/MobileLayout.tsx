/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ReactNode } from 'react';
import Navbar from "../Navbar";

const containerStyle = css`
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    background-color: blue;
    margin: auto;
    text-align: center;
    position: relative;
`

const MobileLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div css={containerStyle}>
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default MobileLayout;