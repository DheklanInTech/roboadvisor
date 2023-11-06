"use client"

import React from 'react'

const MoneyBag = ({fill}) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.22752 40.3245C8.94908 40.3245 9.53402 39.9256 9.53402 39.4335C9.53402 38.9414 8.94908 38.5425 8.22752 38.5425C7.50596 38.5425 6.92102 38.9414 6.92102 39.4335C6.92102 39.9256 7.50596 40.3245 8.22752 40.3245Z" fill={fill}/>
<path d="M46.5 35.0017L46.0095 34.7137C45.972 34.692 42.2243 32.4683 41.2927 29.7698L41.085 29.172L40.701 29.6737C40.689 29.6895 40.1565 30.348 38.6663 31.1205C37.563 24.8407 33.81 17.3438 28.878 14.1473C30.288 14.2613 31.7025 14.1442 33.0675 13.6478C33.8895 13.3493 33.5347 12.0097 32.7052 12.3127C31.5862 12.72 30.465 12.831 29.346 12.774C32.0932 10.2562 34.2503 6.3975 34.2503 3.576C34.2503 2.898 34.2502 1.63575 33.2453 1.63575C32.8417 1.63575 32.5155 1.88775 32.0647 2.23575C31.3732 2.769 30.3293 3.576 28.7955 3.576C28.2113 3.576 27.1418 2.9595 26.2822 2.4645C25.2435 1.86675 24.5798 1.5 24.0217 1.5C23.0977 1.5 21.7395 2.247 20.541 2.90625C20.0535 3.174 19.3868 3.5415 19.2488 3.57675C17.5118 3.57675 16.503 2.77575 15.834 2.2455C15.444 1.935 15.1613 1.71 14.784 1.71C13.7955 1.71 13.7955 2.89575 13.7955 4.269C13.7955 6.9195 15.8145 10.4182 18.4583 12.7695C16.7925 12.8887 15.15 13.392 13.9957 14.5103C13.3582 15.1267 14.3242 16.1047 14.9595 15.4897C15.9187 14.5597 17.1765 14.1615 18.522 14.0842C18.5602 14.2215 18.6068 14.3565 18.6637 14.4893C13.0268 18.54 9.0225 28.1587 9.0225 34.6522C9.0225 35.2927 9.072 35.8725 9.1485 36.4185C7.695 35.7728 7.16475 35.2065 7.15425 35.1937L6.76725 34.7475L6.57675 35.31C5.7345 37.788 2.073 39.9375 2.03625 39.9593L1.5 40.2705L2.04525 40.5653C2.2365 40.6688 2.42625 40.7595 2.6175 40.8577L2.2725 41.097L2.45475 43.377L16.7445 46.5L22.1625 43.0343C22.7092 43.0373 23.2628 43.0387 23.826 43.0387L30.159 46.5L44.4757 42V39.5933L44.097 39.366C44.286 39.246 44.475 39.1238 44.6632 38.9977L45.165 38.6625L45.0548 38.6085L45.693 38.4338L45.801 35.9318L45.432 35.67C45.6285 35.5522 45.8242 35.4323 46.0208 35.3078L46.5 35.0017ZM15.1597 4.269C15.1597 3.936 15.1643 3.6765 15.171 3.47475C15.2858 3.56475 15.4193 3.663 15.5618 3.76425C15.999 4.81125 16.8263 6.31875 18.2288 7.26825C19.9328 8.42325 19.7062 7.09575 20.6152 5.88375C21.5243 4.6725 22.1392 4.038 23.6618 7.1535C24.3255 8.51175 25.4318 4.716 26.4832 4.16175C26.7615 4.31325 27.039 4.45425 27.3113 4.57425C29.1968 7.64025 30.0705 6.684 31.7453 4.1355C32.2057 3.8655 32.5837 3.576 32.8845 3.34425C32.886 3.414 32.8875 3.49125 32.8875 3.5775C32.8875 5.985 30.9202 9.438 28.5112 11.6903C28.3975 11.4012 28.2346 11.134 28.0298 10.9005C27.057 9.79875 25.5368 11.0205 24.816 11.8222C23.5373 11.4113 21.4538 10.2795 20.0963 10.9275C19.7582 11.0843 19.4477 11.2948 19.1768 11.5507C16.9567 9.52725 15.1597 6.606 15.1597 4.269ZM27.3127 12.4995C26.9765 12.4282 26.6421 12.3482 26.31 12.2595C26.7285 11.8988 27.1125 11.7728 27.2738 12.309C27.291 12.3675 27.3015 12.4342 27.3127 12.4995ZM21.6127 12.9653C21.3645 12.918 21.1095 12.8752 20.847 12.8415C20.648 12.7167 20.4531 12.5854 20.2628 12.4478C20.9482 11.988 22.1303 12.2325 23.2598 12.6157C22.7025 12.672 22.1528 12.7935 21.6127 12.9653ZM21.9533 14.9452C21.5333 15.0503 21.0758 15.0083 20.6805 14.8507C20.841 14.766 21.003 14.6925 21.165 14.6182C21.4275 14.745 21.69 14.8507 21.9533 14.9452ZM8.0805 42.2843C6.29166 41.7662 4.55591 41.0799 2.8965 40.2345C3.91425 39.5655 6.13125 37.9478 7.03275 36.0037C7.65075 36.489 9.07725 37.374 11.8553 38.0535C11.808 38.13 11.7502 38.2118 11.6947 38.292C9.32325 37.671 7.97475 36.8857 7.953 36.8722L7.626 36.6772L7.46925 37.0275C7.263 37.4865 6.77925 37.5555 6.51 37.5555C6.435 37.5555 6.38475 37.5503 6.378 37.5495L6.11025 37.5105L6.01275 37.767C5.81325 38.2905 4.99425 38.9745 4.69425 39.1942L4.19325 39.5618L4.76625 39.7965C4.97925 39.8835 5.037 39.9637 5.04 39.9847C5.0475 40.0365 4.95675 40.173 4.86 40.2517L4.4235 40.6035L4.93125 40.8382C5.9715 41.3182 7.14975 41.7157 8.328 42.0435C8.23425 42.1357 8.15325 42.2145 8.0805 42.2843ZM14.1285 39.4897C15.177 39.6367 16.3387 39.7298 17.6077 39.7298H17.6085C17.8725 39.7298 18.1403 39.7253 18.4132 39.717C18.4314 39.7736 18.4574 39.8274 18.4905 39.8767C18.5572 39.978 18.6472 40.062 18.7612 40.1273L16.8472 41.763C16.8108 41.7614 16.7743 41.7607 16.7377 41.7607C15.885 41.7607 15.249 42.0742 14.9437 42.6322C13.7872 42.4847 12.6361 42.2979 11.4923 42.072C12.4117 41.2538 13.2915 40.3921 14.1285 39.4897ZM5.61675 40.3875C5.69175 40.2458 5.7405 40.074 5.71425 39.8865C5.68932 39.7173 5.60822 39.5615 5.484 39.444C5.82075 39.1553 6.285 38.7098 6.54 38.2485C7.11975 38.2402 7.59825 38.0205 7.89975 37.632C8.4075 37.8975 9.55125 38.4338 11.241 38.8988C10.5503 39.765 9.6195 40.7475 8.89575 41.478C7.76775 41.1795 6.6315 40.8195 5.61675 40.3875ZM16.305 43.5443L16.1512 43.545C15.5055 43.545 13.3658 43.4925 10.539 42.9038C10.638 42.8198 10.7408 42.7335 10.836 42.651C13.1295 43.1302 14.979 43.3357 15.1178 43.3515L15.3923 43.3807L15.477 43.1145C15.6622 42.54 16.3455 42.4552 16.737 42.4552C16.8442 42.4552 16.9155 42.462 16.9237 42.4627L17.0693 42.4785L20.394 39.6375L19.5052 39.6082C19.2083 39.5978 19.083 39.531 19.0522 39.4852L19.2405 38.9925L18.72 39.0143C18.3405 39.0308 17.97 39.039 17.6077 39.039H17.607C16.56 39.039 15.5887 38.97 14.691 38.8612L14.8995 38.6152C16.7115 38.8575 18.8812 39.0068 21.501 38.988C20.8755 39.8655 19.3155 41.7307 16.305 43.5443ZM23.823 40.2855V41.6543C23.3962 41.6543 22.9808 41.6528 22.5743 41.6497L22.452 40.1092L21.4365 40.1917C22.1205 39.3833 22.4122 38.844 22.4385 38.7952L22.7137 38.2747L22.1325 38.2853C16.569 38.3872 12.9405 37.7243 10.65 36.9878C10.4827 36.3113 10.386 35.5462 10.386 34.653C10.386 28.5607 14.2792 19.3522 19.4482 15.6202C20.364 16.506 21.753 16.8937 23.073 16.032C23.3625 15.843 23.6145 15.5955 23.8507 15.3323C23.907 15.3338 23.9648 15.3465 24.0217 15.3465C24.2107 15.3465 24.4028 15.3308 24.594 15.3068C24.8363 15.4035 25.0732 15.501 25.293 15.5978C26.3452 16.0613 27.2438 15.7733 27.8573 15.1343C32.592 17.9993 36.3855 25.578 37.3838 31.704C35.2192 32.5695 31.7857 33.414 26.5163 33.5625C27.5557 32.9685 28.3358 31.9695 28.0553 30.657C27.7605 29.2695 26.601 28.8795 25.4002 28.8158C25.3973 28.164 25.3972 27.5138 25.4017 26.862C25.77 27.0248 26.1232 27.2122 26.4442 27.4125C27.0112 27.7687 27.5243 26.8455 26.961 26.4893C26.4726 26.1822 25.9514 25.9309 25.407 25.74C25.4145 24.9855 25.4182 24.2325 25.4182 23.4795C25.419 22.7895 24.3938 22.7895 24.3938 23.4795C24.3938 24.1418 24.3893 24.8032 24.3833 25.464C23.8375 25.3689 23.2803 25.3595 22.7318 25.4363C22.6426 24.9398 22.5345 24.447 22.4078 23.9587C22.2383 23.2943 21.2482 23.5755 21.42 24.2423C21.546 24.7215 21.6488 25.1985 21.7335 25.6823C21.69 25.6987 21.6427 25.707 21.6 25.7265C20.211 26.2762 19.3635 27.678 20.3797 28.9852C20.853 29.5942 21.4718 29.8403 22.149 29.922C22.1857 30.8242 22.209 31.7273 22.2352 32.6287C21.7815 32.334 21.3682 31.956 20.994 31.5563C20.5305 31.0673 19.8067 31.8225 20.2695 32.3108C20.8987 32.9805 21.5595 33.4868 22.2757 33.8108C22.308 34.581 22.3538 35.3535 22.4288 36.12C22.4948 36.8003 23.5208 36.804 23.454 36.12C23.3908 35.457 23.344 34.7926 23.3137 34.1273C23.7037 34.1947 24.1132 34.212 24.5482 34.1707C24.597 34.8802 24.654 35.5897 24.735 36.2992C24.7815 36.7057 25.17 36.8655 25.4565 36.783L25.3927 38.256C24.9412 38.2965 24.4807 38.334 24.0007 38.3655L23.4293 38.403L23.7337 38.895C23.7645 38.9445 24.1102 39.4912 24.882 40.287H23.823V40.2855ZM42.489 35.349C41.5462 35.7923 40.3538 36.1987 39.1388 36.5535C38.3918 35.7817 37.4362 34.752 36.723 33.8385C38.3123 33.357 39.2018 32.8605 39.603 32.5928C39.9202 32.8725 40.3403 33.018 40.8375 33.0173C41.0025 33.0173 41.1488 33.0015 41.2612 32.9835C41.6213 33.45 42.2017 33.9885 42.5648 34.3102C42.393 34.4865 42.3097 34.6815 42.3165 34.8923C42.3225 35.0723 42.3945 35.2253 42.489 35.349ZM37.1227 37.8135C37.2758 37.9485 37.434 38.0865 37.5952 38.226C34.5547 39.0322 32.292 39.12 31.7992 39.1283C28.6507 37.2075 27.0188 35.175 26.3895 34.26C29.0243 34.194 31.2023 33.9555 33.0188 33.627C33.0926 33.7177 33.1674 33.8077 33.243 33.897C31.783 34.1244 30.3115 34.2704 28.8352 34.3343L28.23 34.3597L28.563 34.869C28.5623 34.8698 28.4947 34.9958 28.0477 35.0827L27.321 35.2245L30.894 38.1173L31.0605 38.0723C31.0643 38.0715 31.3792 37.9867 31.7603 37.9867C32.31 37.9867 32.6858 38.154 32.8748 38.481L32.9948 38.688L33.228 38.6468C34.5344 38.4086 35.8333 38.1307 37.1227 37.8135ZM26.55 35.6092L25.6965 35.5628C25.6568 35.1367 25.617 34.7108 25.587 34.2848C25.737 34.5338 26.0445 35.0018 26.55 35.6092ZM25.494 32.8635C25.4448 31.8539 25.415 30.8435 25.4048 29.8328C25.5278 29.8372 25.6493 29.8485 25.7648 29.865C27.0907 30.066 27.4373 31.5405 26.4022 32.37C26.1322 32.5837 25.821 32.7405 25.494 32.8635ZM33.3232 37.9275C32.9872 37.5127 32.4525 37.2952 31.761 37.2952C31.4722 37.2952 31.218 37.3342 31.0575 37.3657L28.8113 35.5455C28.998 35.4383 29.124 35.3025 29.193 35.136C29.21 35.0946 29.223 35.0516 29.232 35.0077C31.0125 34.9102 32.5125 34.7325 33.7808 34.515C34.3958 35.2013 35.2995 36.1478 36.498 37.248C35.0257 37.5983 33.798 37.8382 33.3232 37.9275ZM24.3787 29.8597C24.393 30.9465 24.42 32.0362 24.4778 33.1222C24.381 33.1372 24.2858 33.156 24.1905 33.1658C23.868 33.2025 23.562 33.1755 23.271 33.102C23.2342 32.052 23.2102 30.9998 23.1705 29.949C23.574 29.9303 23.9827 29.8905 24.3787 29.8597ZM23.1188 28.911C23.0719 28.0869 22.9943 27.2648 22.8862 26.4465C23.3834 26.3782 23.8889 26.4039 24.3765 26.5222C24.3711 27.289 24.3699 28.0557 24.3728 28.8225C24.0435 28.8405 23.7308 28.872 23.4555 28.8967C23.3435 28.9055 23.2311 28.9102 23.1188 28.911ZM22.0897 28.7798C22.026 28.7625 21.963 28.749 21.8978 28.7273C21.5977 28.6255 21.326 28.4541 21.105 28.227C20.4645 27.6293 21.3435 27.0428 21.8978 26.7645C21.9848 27.432 22.0448 28.1055 22.0897 28.7798ZM30.3675 43.3792C27.1118 41.7158 25.365 39.867 24.6712 39.0105C25.17 38.973 25.6418 38.928 26.109 38.8807L31.4475 42.3457L43.155 39.1297C37.1175 42.7687 31.1528 43.323 30.3675 43.3792ZM40.0365 37.4618C39.9405 37.3657 39.8257 37.2518 39.69 37.1145C41.022 36.711 42.3105 36.243 43.2712 35.7285L43.8555 35.4143L43.263 35.1128C43.1302 35.0445 43.0005 34.9193 42.9983 34.872C42.9998 34.854 43.0522 34.758 43.2795 34.6275L43.713 34.3785L43.3275 34.0575C43.3155 34.0477 42.1133 33.0495 41.691 32.4067L41.5515 32.1968L41.3122 32.2665C41.31 32.2665 41.1045 32.3258 40.8375 32.3258C40.425 32.3265 40.116 32.1915 39.918 31.926L39.699 31.6357L39.4245 31.872C39.4103 31.884 38.5605 32.5807 36.2812 33.2393C36.2062 33.1311 36.1339 33.0211 36.0645 32.9093C38.8282 32.0715 40.2405 31.0575 40.8525 30.5025C41.835 32.628 44.1742 34.3402 45.1898 35.0115C43.5584 35.9987 41.8319 36.8196 40.0365 37.4618Z" fill={fill}/>
<path d="M33.285 35.3378C32.5372 35.1346 31.6935 35.2733 31.398 35.6446C31.1047 36.0173 31.4752 36.4868 32.2223 36.6916C32.9708 36.8948 33.8137 36.7553 34.1092 36.3833C34.4025 36.0106 34.0335 35.5426 33.285 35.3378Z" fill={fill}/>
</svg>

  )
}

export default MoneyBag