/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ReactNode } from 'react';

const containerStyle = css`
    width: 400px;
    height: 100vh;
    background-color: blue;
    margin: auto;
    text-align: center;
`

const MobileLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div css={containerStyle}>
                {children}
            </div>
        </>
    )
}

export default MobileLayout;