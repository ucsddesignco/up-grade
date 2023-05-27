import { useEffect, useRef } from 'react';
import './styles.scss'

export default function ComputerSVG () {

  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const smileRef = useRef();
  const moveList = [leftEyeRef, rightEyeRef, smileRef];
  
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      moveList.forEach((moveElement) => {
        const eyePosX = moveElement.current.getBoundingClientRect().x;
        const eyePosY = moveElement.current.getBoundingClientRect().y;
        const diffX = e.clientX - eyePosX;
        const diffY = e.clientY - eyePosY;
        moveElement.current.style.transform = `translate(${((diffX/document.body.clientWidth) * 35)}px, ${((diffY/document.body.clientHeight) * 120)}px)`;
      })
    })

    //React strict mode will cause blinking issues so  it's okay for production
    setInterval(function () {
      leftEyeRef.current.setAttribute('ry', 0.5);
      rightEyeRef.current.setAttribute('ry', 0.5);
      setTimeout(() => {
        leftEyeRef.current.setAttribute('ry', 11.5);
        rightEyeRef.current.setAttribute('ry', 11.5);
      }, [200])
    }, [(Math.random() * 5000) + 2000])

  }, [])
    

    return <div className='upgrade-computer-container'>
      <svg className='upgrade-computer' width="898" height="462" viewBox="0 0 898 462" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M896.053 230.646C896.053 293.484 846.462 350.754 765.424 392.403C684.464 434.012 572.515 459.792 448.777 459.792C325.04 459.792 213.09 434.012 132.131 392.403C51.0924 350.754 1.50146 293.484 1.50146 230.646C1.50146 167.807 51.0924 110.538 132.131 68.8887C213.09 27.2799 325.04 1.5 448.777 1.5C572.515 1.5 684.464 27.2799 765.424 68.8887C846.462 110.538 896.053 167.807 896.053 230.646Z" stroke="#1EC6DE" strokeWidth="3"/>
          <mask id="mask0_726_173"  maskUnits="userSpaceOnUse" x="0" y="0" width="898" height="462">
          <path d="M896.052 230.646C896.052 293.484 846.461 350.754 765.423 392.403C684.463 434.012 572.514 459.792 448.776 459.792C325.038 459.792 213.089 434.012 132.129 392.403C51.091 350.754 1.5 293.484 1.5 230.646C1.5 167.807 51.091 110.538 132.129 68.8887C213.089 27.2799 325.038 1.5 448.776 1.5C572.514 1.5 684.463 27.2799 765.423 68.8887C846.461 110.538 896.052 167.807 896.052 230.646Z" fill="#46CCEB" stroke="#46CCEB" strokeWidth="3"/>
          </mask>
          <g mask="url(#mask0_726_173)">
          <path d="M197.976 291.797C189.947 303.55 172.752 331.623 168.209 349.887C162.531 372.718 165.747 408.209 162.187 416.018M197.976 291.797C218.879 294.299 267.231 301.467 293.414 310.121M197.976 291.797V283.586L210.93 290.238L221.836 283.586L229.789 291.797L239.863 286.262C241.889 288.892 246.152 294.164 246.991 294.215C247.83 294.266 252.652 291.585 254.958 290.238L256.793 291.797M162.187 416.018C174.584 422.727 211.823 435.337 261.602 432.102M162.187 416.018L158.21 425.443H172.043L178.093 435.72L190.023 433.396L199.462 441.349L208.675 435.72L215.036 441.349L225.812 437.373L231.049 442.52L239.823 437.373L246.842 442.52L253.648 438.791L261.602 442.52V432.102M261.602 432.102C263.161 423.677 266.459 404.186 267.17 393.63C267.881 383.074 284.963 333.559 293.414 310.121M261.602 432.102L279.43 373.747L293.414 310.121M261.602 432.102C283.419 404.159 291.871 371.655 294.182 345.911M293.414 310.121L295.593 302.168L289.438 304.133L285.461 298.192L277.508 300.149L273.531 291.797L262.925 297.004L256.793 291.797M293.414 310.121C294.797 318.297 295.524 330.965 294.182 345.911M269.555 237.136L268.362 258.426C263.973 264.845 256.47 280.507 256.793 291.797M314.21 237.136L315.378 258.426C321.251 267.642 333.106 297.004 329.204 337.958C324.414 341.849 310.703 348.887 294.182 345.911M267.261 211.655L265.578 227.345C262.877 228.896 257.784 232.51 259.027 234.566C260.581 237.136 269.859 238.145 273.531 236.356C275.066 238.945 279.285 243.968 283.883 243.346C288.482 242.725 292.946 239.885 294.603 238.543C297.192 240.576 303.458 244.219 307.807 242.519C312.157 240.82 315.212 236.509 316.196 234.566C318.527 235.627 323.809 237.111 326.294 234.566C328.78 232.021 322.98 227.345 319.769 225.326L316.196 211.655M267.261 211.655C268.814 209.221 269.555 202.648 290.06 202.648C315.378 202.648 315.378 209.035 316.196 211.655M267.261 211.655C268.711 214.14 275.682 217.869 292.117 217.869C312.592 217.869 314.21 213.378 316.196 211.655M172.99 393.63L170.14 410.723L192.769 416.018L195.22 399.871L172.99 393.63Z" stroke="#1EC6DE" strokeWidth="3" strokeLinecap="round"/>
          <path d="M290.773 446.436C292.27 444.299 339.116 416.384 362.352 402.693L553.229 462.342M290.773 446.436L480.585 513.124M290.773 446.436V466.319L294.75 467.735M553.229 462.342L480.585 513.124M553.229 462.342V484.046L549.252 486.776M480.585 513.124V533.921M480.585 533.921L294.75 467.735M480.585 533.921L549.252 486.776M480.585 533.921V539.744M294.75 467.735V473.602L480.585 539.744M480.585 539.744L549.252 492.479V486.776" stroke="#1EC6DE" strokeWidth="3" strokeLinecap="round"/>
          <g className='just-computer'>
            <path d="M447.845 8.30831L527.377 0.355109C533.307 -0.672481 549.562 -1.62406 567.143 2.79033C584.725 7.20472 656.652 22.7065 690.418 29.9056C696.977 31.6627 709.748 40.1423 708.358 60.0041C707.288 75.2768 706.719 134.656 706.469 181.624M635.827 260.872C641.012 258.551 648.477 255.246 656.401 251.765M696.576 234.106C704.058 229.447 706.228 222.402 706.324 219.068C706.329 216.853 706.335 214.517 706.342 212.073M696.576 234.106C695.428 234.82 694.156 235.478 692.747 236.059C685.969 238.849 670.463 245.586 656.401 251.765M696.576 234.106C700.49 233.595 705.658 233.578 711.049 234.587M739.238 264.464C738.487 257.525 736.321 252.063 733.289 247.795M692.747 243.948C695.851 242.734 699.905 241.678 704.229 241.342M731.416 262.811C730.835 259.326 729.9 256.36 728.689 253.847M706.387 199.185C706.369 203.726 706.354 208.045 706.342 212.073M706.387 199.185C708.562 205.024 714.173 217.061 721.138 224.523M706.387 199.185C706.401 195.688 706.417 192.058 706.435 188.327M733.289 247.795C731.261 244.941 728.846 242.621 726.207 240.75M733.289 247.795C733.991 244.113 733.447 235.514 726.207 229.045M706.342 212.073C706.799 214.932 709.567 221.962 716.939 229.675M726.207 240.75C723.71 238.981 721.013 237.614 718.254 236.578M726.207 240.75C726.141 238.59 723.554 235.78 721.669 234.106M725.337 248.701C722.807 250.202 717.848 254.33 718.254 258.834M725.337 248.701C726.601 250.154 727.731 251.859 728.689 253.847M725.337 248.701C721.742 244.567 717.07 242.466 712.227 241.649M728.689 253.847C726.903 254.991 723.618 257.998 724.769 260.872M704.229 241.342C701.716 243.843 697.278 250.046 699.624 254.858M704.229 241.342C706.846 241.139 709.563 241.2 712.227 241.649M712.227 241.649C708.864 244.307 702.781 250.94 705.352 256.216M711.049 234.587C712.963 233.555 716.822 231.128 716.939 229.675M711.049 234.587C713.437 235.034 715.868 235.682 718.254 236.578M716.939 229.675C718.085 230.873 719.341 232.088 720.718 233.306C720.998 233.527 721.321 233.797 721.669 234.106M718.254 236.578C719.337 236.02 721.536 234.745 721.669 234.106M721.138 224.523C722.313 225.783 723.527 226.911 724.769 227.858C725.276 228.245 725.755 228.641 726.207 229.045M721.138 224.523C726.237 217.069 730.434 199.393 706.435 188.327M706.435 188.327C706.445 186.126 706.457 183.89 706.469 181.624M706.469 181.624C706.467 182.039 746.09 197.219 726.207 229.045M656.401 251.765V283.746" stroke="#1EC6DE" strokeWidth="3"/>
          <path d="M385.167 10.7737C387.782 10.414 390.248 10.486 392.172 10.7737C455.736 24.8156 586.877 53.5251 602.932 56.0276C618.987 58.5301 621.181 72.9767 620.271 79.8872L618.839 258.834C616.455 268.691 610.915 273.955 605.463 276.55M385.167 10.7737C377.942 11.7672 369.572 16.0545 368.313 28.1914L366.168 211.115C365.733 216.791 368.734 229.019 384.219 232.524C387.66 233.303 396.83 235.329 409.712 238.162M385.167 10.7737L418.168 4.33188C420.982 3.97421 427.675 3.47347 431.938 4.33188C436.202 5.1903 562.665 32.1388 625.364 45.5057C629.254 47.2635 635.693 52.0952 638.743 60.0041M605.463 276.55C601.509 278.431 597.602 278.91 594.979 278.717C550.154 268.925 471.925 251.821 423.985 241.297M605.463 276.55C613.253 273.176 630.016 265.52 634.745 261.877C639.474 258.235 641.013 247.727 641.191 242.928L640.324 71.9339C640.742 67.3865 640.057 63.41 638.743 60.0041M605.463 276.55V310.53L423.985 266.787V250.881M423.985 241.297V250.881M423.985 241.297C420.999 240.642 418.13 240.012 415.394 239.41M606.909 310.53L692.372 264.817V252.892M692.372 236.453V252.892M423.985 250.881L408.536 257.747M352.406 282.694L596.836 346.319M352.406 282.694V370.179L596.836 442.519M352.406 282.694L402.467 260.445M596.836 346.319L742.113 264.817M596.836 346.319V442.519M742.113 264.817L692.372 252.892M742.113 264.817V352.489L596.836 442.519M638.743 60.0041L702.347 40.1211M409.712 238.162C407.061 242.827 401.9 253.816 402.467 260.445M409.712 238.162C411.534 238.562 413.429 238.979 415.394 239.41M402.467 260.445L408.536 257.747M415.394 239.41C413.078 243.181 408.464 252.126 408.536 257.747M662.581 322.298V371.368L731.962 330.251V282.532L667.795 319.31L662.581 322.298ZM662.581 384.682L672.435 378.132V385.28L662.581 391.791V384.682ZM680.426 373.397L690.28 366.847V373.994L680.426 380.506V373.397ZM697.016 362.774L703.789 358.26V363.575L697.016 368.05V362.774Z" stroke="#1EC6DE" strokeWidth="3"/>
          <path d="M589.333 230.998C588.684 248.707 576.922 249.939 571.121 248.342C523.2 237.796 424.298 215.839 412.057 212.377C406.816 210.895 403.184 207.606 400.728 203.839M589.333 230.998C589.982 213.289 589.603 136.134 589.333 99.7702C589.397 94.5882 586.641 83.3567 575.098 79.8872C563.856 76.5081 466.847 57.3002 416.034 47.3913M589.333 230.998C540.971 219.87 441.428 197.132 430.148 195.209C425.425 194.403 422.183 192.273 420.01 189.738M416.034 47.3913C414.674 47.1262 413.348 46.8678 412.057 46.6165C406.755 46.1303 396.151 47.332 396.151 56.0276V189.365C396.266 192.927 397.448 198.808 400.728 203.839M416.034 47.3913V179.302C416.037 181.918 416.994 186.218 420.01 189.738M400.728 203.839C401.788 203.185 414.025 194.166 420.01 189.738" stroke="#1EC6DE" strokeWidth="3"/>
          <path d="M477.812 394.038V364.043L487.611 366.986M477.812 394.038L569.64 421.721V413.921M477.812 394.038L487.611 388.708M487.611 388.708V366.986M487.611 388.708L569.64 413.921M487.611 366.986L569.64 391.623V413.921M614.862 417.898L621.689 407.531M614.862 417.898C614.796 413.694 614.717 407.562 614.683 401.992M614.862 417.898L624.848 411.487L629.85 401.992M621.689 407.531L614.683 401.992M621.689 407.531L629.85 401.992M614.683 401.992C614.64 395.13 614.665 389.121 614.862 388.621L622.815 383.934V396.379M614.683 401.992L622.815 396.379M622.815 396.379L629.85 401.992M637.733 405.453L644.559 395.086M637.733 405.453C637.666 401.249 637.587 395.117 637.553 389.546M637.733 405.453L647.343 399.499L652.37 389.546M644.559 395.086L637.553 389.546M644.559 395.086L652.37 389.546M637.553 389.546C637.511 382.685 637.535 376.676 637.733 376.176L645.686 371.489V383.934M637.553 389.546L645.686 383.934M645.686 383.934L652.37 389.546M372.29 351.929V362.226L451.822 386.085V376.182L372.29 351.929Z" stroke="#1EC6DE" strokeWidth="3"/>
          <ellipse className="move-elements" ref={leftEyeRef} cx="480.651" cy="119.778" rx="7" ry="11.5" transform="rotate(-1.61232 484.651 119.778)" fill="#1EC6DE"/>
          <ellipse className="move-elements" ref={rightEyeRef} cx="522.651" cy="127.778" rx="7" ry="11.5" transform="rotate(-1.61232 522.651 127.778)" fill="#1EC6DE"/>
          <path
                  d="M43.1006 36.3406L44.5434 33.7113C39.5507 30.8132 35.9022 28.6613 33.344 26.7299C30.7861 24.7988 29.5434 23.249 29.0753 21.6431C28.6071 20.0372 28.8223 18.0628 29.9421 15.0601C31.0621 12.0572 32.9833 8.28235 35.638 3.15606L33.0087 1.71334C30.1105 6.70694 27.9585 10.3559 26.0272 12.9142C24.096 15.4723 22.5463 16.7147 20.9405 17.1827C19.3347 17.6506 17.3604 17.4352 14.3576 16.315C11.3547 15.1948 7.57986 13.2733 2.45353 10.6186L1.011 13.248C6.00472 16.1453 9.65371 18.2966 12.212 20.2275C14.7702 22.1582 16.0126 23.7077 16.4805 25.3134C16.9484 26.9192 16.733 28.8938 15.6128 31.897C14.4925 34.9005 12.5708 38.6759 9.91604 43.8032L12.5454 45.2459C15.4434 40.2532 17.5954 36.6047 19.5267 34.0466C21.4579 31.4886 23.0076 30.246 24.6136 29.7778C26.2194 29.3096 28.1938 29.5248 31.1965 30.6447C34.1995 31.7646 37.9743 33.6859 43.1006 36.3406Z"
                  fill="#F2F4F1"
                  stroke="#19B000"
                  strokeWidth="3"
                />
          <circle className="move-elements" ref={smileRef} cx="500.651" cy="145.778" r="4" stroke="#1EC6DE" strokeWidth="3" fill="none" />
          {/* <path d="M525.48 121.073L515.647 127.524L525.48 135.811" stroke="#1EC6DE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/> */}
          {/* <path ref={smileRef} d="M482.605 144.465C483.694 148.945 488.211 158.174 497.565 159.244C509.258 160.581 515.081 159.244 520.56 148.399" stroke="#1EC6DE" strokeWidth="3" strokeLinecap="round"/> */}
          </g>
          </g>
        </svg>
        <svg className='good-summer-sticker' width="232" height="223" viewBox="0 0 232 223" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_534_7976" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M188.27 64.9894C195.358 67.9744 201.183 73.8647 203.845 81.7213C206.504 89.5695 205.463 97.7785 201.66 104.453C204.488 139.01 186.081 173.288 152.913 189.064C113.411 207.853 66.7637 193.841 43.7485 157.967C36.6623 154.982 30.8382 149.092 28.1769 141.236C25.5183 133.389 26.558 125.182 30.3604 118.508C27.5307 83.9495 45.9381 49.6708 79.1071 33.8941C118.608 15.1058 165.255 29.1164 188.27 64.9894Z"/>
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M188.27 64.9894C195.358 67.9744 201.183 73.8647 203.845 81.7213C206.504 89.5695 205.463 97.7785 201.66 104.453C204.488 139.01 186.081 173.288 152.913 189.064C113.411 207.853 66.7637 193.841 43.7485 157.967C36.6623 154.982 30.8382 149.092 28.1769 141.236C25.5183 133.389 26.558 125.182 30.3604 118.508C27.5307 83.9495 45.9381 49.6708 79.1071 33.8941C118.608 15.1058 165.255 29.1164 188.27 64.9894Z" fill="#F2F4F1"/>
          <path d="M188.27 64.9894L186.236 66.2944L186.641 66.9255L187.332 67.2166L188.27 64.9894ZM201.66 104.453L199.56 103.256L199.19 103.905L199.251 104.65L201.66 104.453ZM152.913 189.064L151.875 186.882L152.913 189.064ZM43.7485 157.967L45.7826 156.662L45.3777 156.031L44.6868 155.74L43.7485 157.967ZM30.3604 118.508L32.4602 119.704L32.83 119.055L32.769 118.31L30.3604 118.508ZM79.1071 33.8941L78.0691 31.7117L79.1071 33.8941ZM187.332 67.2166C193.809 69.9447 199.125 75.3224 201.556 82.4968L206.134 80.9458C203.241 72.4071 196.906 66.0042 189.208 62.7621L187.332 67.2166ZM201.556 82.4968C203.984 89.6636 203.036 97.1566 199.56 103.256L203.759 105.649C207.891 98.4004 209.023 89.4755 206.134 80.9458L201.556 82.4968ZM199.251 104.65C202.001 138.239 184.107 171.551 151.875 186.882L153.951 191.247C188.056 175.025 206.976 139.781 204.068 104.256L199.251 104.65ZM151.875 186.882C113.486 205.141 68.149 191.525 45.7826 156.662L41.7144 159.272C65.3783 196.158 113.337 210.564 153.951 191.247L151.875 186.882ZM44.6868 155.74C38.2107 153.012 32.8961 147.634 30.4658 140.461L25.8879 142.012C28.7804 150.549 35.1139 156.952 42.8102 160.194L44.6868 155.74ZM30.4658 140.461C28.038 133.295 28.9853 125.803 32.4602 119.704L28.2605 117.311C24.1308 124.56 22.9985 133.483 25.8879 142.012L30.4658 140.461ZM32.769 118.31C30.0186 84.7203 47.9126 51.4078 80.1452 36.0765L78.0691 31.7117C43.9635 47.9338 25.0428 83.1788 27.9517 118.705L32.769 118.31ZM80.1452 36.0765C118.533 17.8176 163.869 31.4326 186.236 66.2944L190.304 63.6843C166.64 26.8002 118.683 12.3941 78.0691 31.7117L80.1452 36.0765Z" fill="#19B000" mask="url(#path-1-inside-1_534_7976)"/>
          <circle cx="116.011" cy="111.479" r="77.8769" transform="rotate(-18.716 116.011 111.479)" fill="#19B000" stroke="#19B000"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M107.421 142.711C115.326 140.033 121.164 134.03 123.906 126.79C130.484 130.873 138.769 132.091 146.674 129.413C152.74 127.358 157.589 123.345 160.756 118.317C166.326 120.385 172.616 120.624 178.683 118.569C192.714 113.815 200.235 98.5867 195.481 84.5553C190.728 70.524 175.499 63.003 161.468 67.7567C155.402 69.8119 150.552 73.8248 147.386 78.8524C141.815 76.7848 135.525 76.5456 129.459 78.6008C121.554 81.2789 115.716 87.2814 112.974 94.5215C106.396 90.4383 98.1112 89.2204 90.206 91.8986C82.6097 94.4722 76.9215 100.116 74.0561 106.978C67.6102 103.271 59.6632 102.247 52.0671 104.82C38.0357 109.574 30.5147 124.802 35.2684 138.834C40.0221 152.865 55.2505 160.386 69.2818 155.632C76.8782 153.059 82.5664 147.415 85.4317 140.553C91.8777 144.26 99.8246 145.284 107.421 142.711Z" fill="#F2F4F1"/>
          <path d="M52.8354 134.683C51.7317 131.546 51.6666 128.853 52.6399 126.604C53.6132 124.355 55.1407 122.899 57.2223 122.235C59.0717 121.608 60.7713 121.594 62.3211 122.191C63.8646 122.771 65.1971 123.932 66.3184 125.675L63.7777 127.485C62.2376 125.108 60.4146 124.276 58.3088 124.99C56.7889 125.505 55.8064 126.491 55.3611 127.948C54.9096 129.387 55.084 131.288 55.8843 133.65C56.6784 135.994 57.6859 137.612 58.907 138.505C60.128 139.397 61.471 139.596 62.936 139.099C64.1079 138.702 64.9115 138.001 65.3468 136.997C65.8004 135.986 65.8462 134.735 65.4843 133.245L61.5015 134.594L60.6082 131.957L67.5574 129.603L70.8423 139.299L68.3428 140.146L67.3967 137.986C67.0333 139.926 65.7895 141.256 63.6654 141.975C61.6269 142.707 59.5622 142.457 57.4713 141.226C55.3925 139.971 53.8472 137.79 52.8354 134.683Z" fill="#19B000"/>
          <path d="M171.698 105.129L165.184 85.9024L170.32 84.1622C172.957 83.2689 175.378 83.3671 177.585 84.4567C179.791 85.5464 181.422 87.6478 182.476 90.7607C183.531 93.8736 183.513 96.5333 182.424 98.7397C181.334 100.946 179.471 102.496 176.834 103.389L171.698 105.129ZM173.742 101.313L175.61 100.681C177.405 100.073 178.684 99.0576 179.447 97.6354C180.216 96.1704 180.191 94.2294 179.372 91.8122C178.547 89.3768 177.39 87.8296 175.901 87.1704C174.425 86.4868 172.789 86.449 170.994 87.0569L169.127 87.6897L173.742 101.313Z" fill="#19B000"/>
          <path d="M98.0638 127.443C96.1073 126.187 94.6017 124.002 93.5471 120.889C92.4924 117.776 92.3602 115.127 93.1504 112.94C93.9589 110.747 95.471 109.276 97.6867 108.525C99.9024 107.774 101.988 108.027 103.945 109.283C105.92 110.533 107.435 112.714 108.489 115.827C109.544 118.94 109.667 121.593 108.858 123.786C108.068 125.972 106.565 127.441 104.35 128.191C102.134 128.942 100.039 128.693 98.0638 127.443ZM105.468 116.851C104.668 114.489 103.678 112.864 102.5 111.977C101.316 111.072 100.028 110.855 98.6359 111.327C97.2625 111.792 96.3807 112.744 95.9903 114.183C95.5938 115.603 95.7956 117.494 96.5959 119.856C97.3962 122.219 98.3886 123.852 99.573 124.757C100.751 125.644 102.027 125.855 103.4 125.39C104.774 124.925 105.656 123.973 106.046 122.534C106.455 121.089 106.262 119.195 105.468 116.851Z" fill="#19B000"/>
          <path d="M138.944 113.594C136.987 112.338 135.482 110.153 134.427 107.04C133.372 103.927 133.24 101.278 134.03 99.091C134.839 96.8983 136.351 95.4265 138.567 94.6759C140.782 93.9252 142.868 94.1779 144.825 95.4339C146.8 96.6837 148.314 98.865 149.369 101.978C150.424 105.091 150.547 107.744 149.738 109.937C148.948 112.123 147.445 113.592 145.229 114.342C143.014 115.093 140.919 114.843 138.944 113.594ZM146.348 103.002C145.547 100.639 144.558 99.0149 143.38 98.1281C142.195 97.2229 140.907 97.0061 139.516 97.4775C138.142 97.9428 137.261 98.8948 136.87 100.334C136.474 101.754 136.676 103.645 137.476 106.007C138.276 108.37 139.268 110.003 140.453 110.908C141.631 111.795 142.907 112.006 144.28 111.541C145.654 111.075 146.536 110.123 146.926 108.685C147.335 107.24 147.142 105.345 146.348 103.002Z" fill="#19B000"/>
          <path d="M78.3711 81.8247L66.2827 75.7394L67.2303 73.8571L72.0138 76.2651L74.3262 71.6715L69.5427 69.2635L70.4903 67.3811L82.5787 73.4664L81.6311 75.3488L76.0877 72.5582L73.7753 77.1518L79.3187 79.9424L78.3711 81.8247Z" fill="#F2F4F1"/>
          <path d="M83.0332 73.3625L76.5751 60.6308L78.1076 59.0738L90.9265 65.3431L89.4075 66.8863L86.2367 65.2846L82.9139 68.6604L84.5658 71.8054L83.0332 73.3625ZM81.9425 66.8361L84.3837 64.3559L79.3187 61.8121L81.9425 66.8361Z" fill="#F2F4F1"/>
          <path d="M94.7488 63.9502L84.4131 54.0847L86.3829 53.0536L94.3273 60.8102L92.4981 49.8528L94.4508 48.8307L96.6844 62.9371L94.7488 63.9502Z" fill="#F2F4F1"/>
          <path d="M101.651 61.2202L99.3466 47.8841L107.805 46.4225L108.141 48.3658L101.759 49.4686L102.332 52.7835L107.761 51.8453L108.097 53.7886L102.668 54.7268L103.392 58.9181L109.965 57.7824L110.3 59.7256L101.651 61.2202Z" fill="#F2F4F1"/>
          <path d="M121.238 61.8363L131.227 51.6374L133.193 52.5899L131.364 66.742L129.415 65.7979L129.916 62.281L125.653 60.2159L123.204 62.7888L121.238 61.8363ZM127.07 58.7108L130.202 60.2281L130.987 54.615L127.07 58.7108Z" fill="#F2F4F1"/>
          <path d="M94.7303 167.225L96.9317 167.512C96.1273 169.101 96.4834 170.266 98 171.008C98.6136 171.308 99.2357 171.419 99.8662 171.339C100.497 171.259 101.006 170.996 101.396 170.549C101.793 170.091 101.898 169.658 101.711 169.247C101.543 168.832 101.054 168.246 100.244 167.489C99.3985 166.715 98.9011 165.959 98.7514 165.22C98.6133 164.487 98.8826 163.731 99.5593 162.953C100.27 162.137 101.191 161.637 102.322 161.456C103.465 161.281 104.604 161.471 105.738 162.026C106.699 162.496 107.331 163.089 107.632 163.805C107.942 164.511 107.944 165.268 107.638 166.075L105.474 165.973C105.841 164.849 105.498 164.029 104.444 163.514C103.877 163.236 103.314 163.134 102.755 163.207C102.216 163.276 101.765 163.52 101.401 163.938C101.038 164.356 100.944 164.768 101.12 165.173C101.307 165.583 101.787 166.123 102.559 166.792C103.493 167.596 104.038 168.355 104.193 169.068C104.368 169.778 104.105 170.536 103.403 171.343C102.548 172.326 101.508 172.905 100.282 173.081C99.0671 173.263 97.8636 173.063 96.6711 172.479C95.4786 171.896 94.7056 171.143 94.3519 170.221C93.9983 169.3 94.1244 168.301 94.7303 167.225Z" fill="#F2F4F1"/>
          <path d="M107.29 172.221L110.252 164.143L112.346 164.375L109.358 172.525C109.025 173.433 108.999 174.16 109.278 174.707C109.557 175.254 110.132 175.576 111.004 175.672C112.81 175.871 114.061 175.021 114.758 173.121L117.746 164.971L119.841 165.202L116.879 173.28C116.329 174.78 115.45 175.905 114.243 176.653C113.053 177.39 111.747 177.68 110.325 177.523C108.903 177.366 107.903 176.822 107.325 175.889C106.747 174.956 106.735 173.734 107.29 172.221Z" fill="#F2F4F1"/>
          <path d="M122.331 178.641L121.145 165.159L123.197 164.772L126.594 171.336L128.745 163.725L130.816 163.335L132.001 176.816L130.044 177.185L129.243 168.076L127.46 173.933L126.206 174.17L123.468 169.165L124.269 178.275L122.331 178.641Z" fill="#F2F4F1"/>
          <path d="M139.834 174.135L132.581 162.709L134.445 161.769L140.779 166.506L139.487 159.228L141.369 158.28L148.622 169.706L146.843 170.602L141.942 162.882L142.81 168.52L141.67 169.094L136.694 165.527L141.595 173.248L139.834 174.135Z" fill="#F2F4F1"/>
          <path d="M154.691 163.903L143.268 156.645L149.471 150.711L151.136 151.768L146.456 156.246L149.295 158.05L153.276 154.241L154.941 155.298L150.959 159.107L154.549 161.389L159.369 156.778L161.034 157.835L154.691 163.903Z" fill="#F2F4F1"/>
          <path d="M163.774 151.604L150.515 148.893L152.671 144.567C153.24 143.425 154.005 142.603 154.965 142.1C155.931 141.586 156.982 141.445 158.119 141.677C159.028 141.863 159.676 142.224 160.063 142.761C160.449 143.297 160.557 143.974 160.387 144.791L168.285 142.554L167.207 144.717L159.531 146.885L158.729 148.494L164.714 149.717L163.774 151.604ZM156.796 148.099L158.03 145.625C158.588 144.506 158.298 143.83 157.162 143.598C156.025 143.366 155.178 143.809 154.62 144.928L153.387 147.402L156.796 148.099Z" fill="#F2F4F1"/>
        </svg>

        <svg className='happy-sticker' width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="54.6259" cy="55.3429" r="43.0902" transform="rotate(12.627 54.6259 55.3429)" fill="#19B000" stroke="#F2F4F1" strokeWidth="5"/>
          <ellipse cx="50.4511" cy="40.5742" rx="2.51532" ry="5.34506" transform="rotate(12.627 50.4511 40.5742)" fill="#F2F4F1"/>
          <ellipse cx="65.7914" cy="44.0122" rx="2.51532" ry="5.34506" transform="rotate(12.627 65.7914 44.0122)" fill="#F2F4F1"/>
          <path d="M29.4976 47.8027C22.8176 77.6212 74.773 90.2093 81.6554 59.4872" stroke="#F2F4F1" strokeWidth="5.11175"/>
        </svg>
    </div>
      
}