import styled from 'styled-components'

const StyledCleanSvg = styled.svg.attrs({
    viewBox: "0 0 512 512",
})`
    background: #FFF;
`;

const StyledResponsiveSvg = styled.svg.attrs({
    viewBox: "0 0 480 480",
})`
    background: #FFF;
`;

const StyledFastSvg = styled.svg.attrs({
    viewBox: "0 0 487.8 487.8",
})`
    background: #FFF;
`;

export const Clean = () => {
    return (
        <StyledCleanSvg>
            <path d="m220.2 301.7-6.3 12.6a132.7 132.7 0 0 0-13.9 59v90.7a32 32 0 0 0 32 32h120a32 32 0 0 0 32-32v-100a259.9 259.9 0 0 0-10.4-72.8l-31.6-108.3v-30.9a18.2 18.2 0 0 1 16.7-18 8 8 0 0 0 7.3-8 54.1 54.1 0 0 0-54-54h-128a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h23.7a131.3 131.3 0 0 1-19.7 61.7l-18.8 30.1a8 8 0 0 0 6.8 12.2h32a8 8 0 0 0 6.5-3.3l16.3-22.8a135.5 135.5 0 0 0 17.2-32.7v18.9a264.4 264.4 0 0 1-27.8 117.7zm147.8 62.3v100a16 16 0 0 1-16 16h-120a16 16 0 0 1-16-16v-90.7a116.6 116.6 0 0 1 12.2-51.9l6.3-12.6a280.7 280.7 0 0 0 29.4-116.8h64.1l30.2 103.7a243.9 243.9 0 0 1 9.8 68.3zm-42-188h-62v-16h62zm23.5-56.4a34.5 34.5 0 0 0-22.5 24.4h-71v-32a8 8 0 0 0-8-8h-24v-16h88a38.1 38.1 0 0 1 37.5 31.6zm-157.5-31.6h16v16h-16zm25.8 100.6-13.9 19.4h-13.4l11.2-17.8a147.3 147.3 0 0 0 22.2-70.2h16.2a118.7 118.7 0 0 1-22.2 68.6z"/><path d="m328 336h-72a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h72a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm0 112h-72v-96h72l0 96z"/><path d="m79.6 20.3h16v19.5h-16z"/><path d="m140.5 69.1h16v19.5h-16z"/><path d="m110.1 44.7h16v19.5h-16z"/><path d="m116.5 88h19.5v16h-19.5z"/><path d="m77.5 88h19.5v16h-19.5z"/><path d="m38.5 88h19.5v16h-19.5z"/><path d="m77.9 153.9h19.5v16h-19.5z"/><path d="m138.8 105.2h19.5v16h-19.5z"/><path d="m108.3 129.6h19.5v16h-19.5z"/><path d="m331.3 280.3a8 8 0 0 0-5.4 10l2.4 8a8 8 0 1 0 15.3-4.6l-2.4-8a8 8 0 0 0-10-5.4z"/><path d="m314.5 224.3a8 8 0 0 0-5.4 10l9.6 32a8 8 0 1 0 15.3-4.6l-9.6-32a8 8 0 0 0-10-5.4z"/>
        </StyledCleanSvg>
    )
};

export const Responsive = () => {
    return (
        <StyledResponsiveSvg>
            <path d="M456 240h-8V72c0-22.1-17.9-40-40-40H72c-22.1 0-40 17.9-40 40v120h-8c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24h304c4.4 0 8-3.6 8-8 0-22.1-17.9-40-40-40h-24v-48h96v72c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24V264C480 250.7 469.3 240 456 240zM176 424c0 4.4-3.6 8-8 8H24c-4.4 0-8-3.6-8-8v-8h160V424zM176 400H16V216c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8V400zM296 416c10.2 0 19.2 6.4 22.6 16H190.5c0.9-2.6 1.4-5.3 1.5-8v-8H296zM192 400v-48h16v48H192zM224 400v-48h32v48H224zM368 336H192v-48h176V336zM368 264v8H192v-56c0-3.8-1-7.5-2.7-10.9 0.1-0.1 0.3-0.1 0.4-0.3l79.2-79.2c3.1-3.2 3-8.2-0.2-11.3 -3.1-3-8-3-11.1 0l-79.2 79.2c-0.2 0.2-0.3 0.5-0.4 0.7 -3.1-1.4-6.5-2.2-9.9-2.2H48V72c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24v168h-40C378.7 240 368 250.7 368 264zM464 424c0 4.4-3.6 8-8 8h-64c-4.4 0-8-3.6-8-8v-8h80V424zM464 400h-80V264c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8V400z"/><path d="M95.6 289.4c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.2 3.1-3.3 8.1-0.2 11.3 3.1 3.2 8.1 3.3 11.3 0.2 0.1-0.1 0.1-0.1 0.2-0.2l33.9-33.9C97 298.2 94.2 293.5 95.6 289.4z"/><path d="M143.4 289.4c-3.1-3-8-3-11.1 0l-33.9 33.9c-3.2 3.1-3.3 8.1-0.2 11.3 3.1 3.2 8.1 3.3 11.3 0.2 0.1-0.1 0.1-0.1 0.2-0.2l33.9-33.9C146.7 297.5 146.6 292.4 143.4 289.4z"/><path d="M317.5 114.3c-3.1-3-8-3-11.1 0l-79.2 79.2c-3.2 3.1-3.3 8.1-0.2 11.3 3.1 3.2 8.1 3.3 11.3 0.2 0.1-0.1 0.1-0.1 0.2-0.2l79.2-79.2C320.7 122.5 320.6 117.4 317.5 114.3z"/><path d="M440.8 311c-3.1-3-8-3-11.1 0l-22.6 22.6c-3.2 3.1-3.3 8.1-0.2 11.3 3.1 3.2 8.1 3.3 11.3 0.2 0.1-0.1 0.1-0.1 0.2-0.2l22.6-22.6C444 319.2 444 314.1 440.8 311z"/><path d="M240.2 304h-0.1c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8S244.6 304 240.2 304z"/><path d="M256 64h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h32c4.4 0 8-3.6 8-8S260.4 64 256 64z"/>
        </StyledResponsiveSvg>
    )
}

export const Fast = () => {
    return (
        <StyledFastSvg>
            <path d="M150.5 109.5h150.5c4 0 7.2-3.2 7.2-7.2 0-4-3.2-7.2-7.2-7.2H150.5c-4 0-7.2 3.2-7.2 7.2C143.3 106.3 146.5 109.5 150.5 109.5z"/><path d="M15.9 179.5h150.5c4 0 7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2H15.9c-4 0-7.2 3.2-7.2 7.2S11.9 179.5 15.9 179.5z"/><path d="M56.3 253.2c0 4 3.2 7.2 7.2 7.2H213.9c4 0 7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2H63.4C59.5 246.1 56.3 249.3 56.3 253.2z"/><path d="M142.4 336.4H7.2C3.2 336.4 0 339.6 0 343.6s3.2 7.2 7.2 7.2h135.2c4 0 7.2-3.2 7.2-7.2S146.4 336.4 142.4 336.4z"/><path d="M385.7 154.4c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1c-21.6 0-39.1 17.5-39.1 39.1C346.6 136.9 364.1 154.4 385.7 154.4z"/><path d="M450.1 143.2c-22.5 31.5-52.5 35.1-84.9 15.9 -2.2-1.3-12-6.7-14.1-8 -52.1-30.9-104.1-18.8-138.9 30.1 -14.8 20.8 19.5 40.5 34.1 19.9 18-25.2 40.9-32.5 66-24.5 -12.8 22.3-24 44.4-39.9 75.9 -15.8 31.4-50.8 56.6-84.4 36.9 -24.2-14.2-46.1 20.7-21.9 34.8 45.9 26.8 99.6 10.3 127.1-24.5 1 0.5 2 1 3.1 1.4 22.4 7.8 51.8 28.6 60.8 36 9 7.4 24.3 44.9 33.5 63.8 11.1 22.9 46.9 6.2 35.7-16.8 -10.4-21.4-27.7-64.1-41.3-74.9 -10.9-8.7-32-24.8-49.9-34 12.1-23.5 24.7-46.7 38-69.5 42.3 13 82.6-2.3 111.2-42.4C499 142.3 464.7 122.6 450.1 143.2z"/>
        </StyledFastSvg>
    )
}
