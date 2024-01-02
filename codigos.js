const CodigoOne = document.querySelector('.codigo')
const CodigoCssOne = document.querySelector('.codigoCss')

CodigoOne.innerText = `
        <div class="loading">
            <span style = "--i:1" ></span >
            <span style="--i:2"></span>
            <span style="--i:3"></span>
            <span style="--i:4"></span>
            <span style="--i:5"></span>
            <span style="--i:6"></span>
            <span style="--i:7"></span>
            <span style="--i:8"></span>
            <span style="--i:9"></span>
            <span style="--i:10"></span>
            <span style="--i:11"></span>
            <span style="--i:12"></span>
            <span style="--i:13"></span>
            <span style="--i:14"></span>
            <span style="--i:15"></span>
            <span style="--i:16"></span>
            <span style="--i:17"></span>
            <span style="--i:18"></span>
            <span style="--i:19"></span>
            <span style="--i:20"></span>
        </div> 
`
CodigoCssOne.innerText = `
    .loading {
    position: relative;
    display: flex;
}

.loading span {
    position: absolute;
    top: 70px;
    left: 180px;
    width: 5px;
    height: 41px;
    transform: rotate(calc(var(--i) * 18deg));
    transform-origin: 0 150px;
    z-index: 99;
}

.loading span::before {
    content: "";
    position: absolute;
    inset: 0;
    animation: animate 8s linear infinite;
    animation-delay: calc(var(--i) * 0.1s);
}

@keyframes animate {
    0% {
        background: #0f0;
        box-shadow: 0 0 5px #0f0,
            0 0 15px #0f0,
            0 0 30px #0f0,
            0 0 50px #0f0;
        rotate: 0deg;
    }

    20% {
        background: #0f0;
        box-shadow: 0 0 5px #0f0,
            0 0 15px #0f0,
            0 0 30px #0f0,
            0 0 50px #0f0;
        rotate: 0deg;
    }

    40% {
        background: #0f0;
        box-shadow: 0 0 5px #0f0,
            0 0 15px #0f0,
            0 0 30px #0f0,
            0 0 50px #0f0;
        rotate: 90deg;
        filter: hue-rotate(0deg);
    }

    80% {
        background: #0f0;
        box-shadow: 0 0 5px #0f0,
            0 0 15px #0f0,
            0 0 30px #0f0,
            0 0 50px #0f0;
        rotate: 90deg;
        filter: hue-rotate(360deg);
    }

    90% {
        box-shadow: none;
        rotate: 90deg;
    }

    90.1%,
    100% {
        box-shadow: none;
        background: transparent;
    }
}
`