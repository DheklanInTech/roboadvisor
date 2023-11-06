"use client"

import React from 'react'

const ForbesIcon = ({fill,className}) => {
  return (
   <div className={className}>
    <svg width="105" height="48" viewBox="0 0 175 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.1375 15.925C99.1375 10.85 99.225 6.125 99.4875 1.75L86.1 4.2875V5.5125L87.4125 5.6875C88.375 5.775 88.9875 6.125 89.3375 6.65C89.6875 7.2625 89.95 8.1375 90.125 9.45C90.3 11.9875 90.475 17.7625 90.3875 26.8625C90.3875 35.875 90.3 41.5625 90.125 43.75C94.9375 44.8 98.7 45.2375 101.5 45.2375C106.75 45.2375 110.863 43.75 113.838 40.6875C116.813 37.7125 118.388 33.5125 118.388 28.35C118.388 24.2375 117.25 20.825 114.975 18.1125C112.7 15.4 109.812 14.0875 106.4 14.0875C104.125 14.0875 101.763 14.7 99.1375 15.925ZM99.4 42.875C99.225 40.075 99.05 31.675 99.05 17.9375C99.8375 17.675 100.888 17.5 102.2 17.5C104.3 17.5 105.963 18.55 107.188 20.7375C108.412 22.925 109.025 25.55 109.025 28.875C109.025 32.9875 108.325 36.3125 106.925 39.1125C105.525 41.825 103.775 43.225 101.588 43.225C100.887 43.05 100.188 42.9625 99.4 42.875ZM35.875 2.625H0.875V4.375L2.7125 4.55C4.1125 4.8125 5.075 5.3375 5.6875 6.125C6.3 7 6.65 8.4 6.7375 10.325C7.4375 19.775 7.4375 28.6125 6.7375 36.75C6.5625 38.675 6.2125 40.075 5.6875 40.95C5.075 41.825 4.1125 42.35 2.7125 42.525L0.875 42.7875V44.5375H23.45V42.7875L21.0875 42.6125C19.6875 42.4375 18.725 41.825 18.1125 41.0375C17.5 40.1625 17.15 38.7625 17.0625 36.8375C16.8 33.3375 16.625 29.3125 16.625 24.85L21.35 24.9375C23.8875 25.025 25.6375 26.95 26.5125 30.8H28.2625V16.5375H26.5125C25.6375 20.3 23.975 22.225 21.35 22.3125L16.625 22.4C16.625 14.525 16.8 8.925 17.0625 5.5125H23.975C28.875 5.5125 32.2 8.6625 34.125 14.9625L36.225 14.35L35.875 2.625ZM31.7625 29.575C31.7625 34.125 33.075 37.8875 35.6125 40.8625C38.15 43.8375 41.9125 45.2375 46.6375 45.2375C51.3625 45.2375 55.2125 43.75 58.0125 40.6875C60.8125 37.7125 62.125 33.95 62.125 29.4C62.125 24.85 60.8125 21.0875 58.275 18.1125C55.7375 15.1375 51.975 13.7375 47.25 13.7375C42.525 13.7375 38.675 15.225 35.875 18.2875C33.075 21.2625 31.7625 25.025 31.7625 29.575ZM51.275 19.6C52.325 22.1375 52.7625 25.4625 52.7625 29.4875C52.7625 38.7625 50.8375 43.3125 47.075 43.3125C45.15 43.3125 43.6625 42 42.6125 39.375C41.5625 36.75 41.125 33.425 41.125 29.4875C41.125 20.3 43.05 15.75 46.8125 15.75C48.7375 15.6625 50.225 16.975 51.275 19.6ZM125.213 40.8625C128.1 43.75 131.775 45.2375 136.15 45.2375C138.863 45.2375 141.225 44.7125 143.325 43.575C145.425 42.525 147.087 41.2125 148.225 39.6375L147.35 38.5875C145.425 40.075 143.238 40.775 140.7 40.775C137.2 40.775 134.488 39.6375 132.65 37.275C130.725 34.9125 129.85 31.9375 130.025 28.0875H148.75C148.75 23.8875 147.7 20.475 145.512 17.7625C143.325 15.1375 140.262 13.825 136.325 13.825C131.425 13.825 127.663 15.4 124.95 18.4625C122.238 21.525 120.925 25.2875 120.925 29.75C120.925 34.3 122.325 37.975 125.213 40.8625ZM131.688 18.9C132.65 16.8 133.875 15.75 135.537 15.75C138.162 15.75 139.475 19.075 139.475 25.8125L130.2 25.9875C130.288 23.3625 130.725 21 131.688 18.9ZM172.287 15.4C169.925 14.35 166.95 13.7375 163.363 13.7375C159.688 13.7375 156.8 14.7 154.613 16.5375C152.425 18.375 151.287 20.65 151.287 23.3625C151.287 25.725 151.988 27.5625 153.3 28.875C154.613 30.1875 156.712 31.325 159.425 32.2875C161.875 33.1625 163.625 34.0375 164.5 34.825C165.375 35.7 165.9 36.6625 165.9 37.975C165.9 39.2 165.462 40.3375 164.5 41.2125C163.625 42.175 162.4 42.6125 160.825 42.6125C156.975 42.6125 154.088 39.8125 152.075 34.2125L150.588 34.65L150.938 43.4C154.087 44.625 157.587 45.2375 161.438 45.2375C165.462 45.2375 168.525 44.3625 170.8 42.525C173.075 40.775 174.213 38.2375 174.213 35.0875C174.213 32.9875 173.688 31.2375 172.55 29.925C171.412 28.6125 169.575 27.475 166.95 26.425C164.062 25.375 162.05 24.4125 161 23.5375C159.95 22.6625 159.425 21.6125 159.425 20.3C159.425 18.9875 159.775 17.9375 160.562 17.0625C161.35 16.1875 162.312 15.8375 163.537 15.8375C167.037 15.8375 169.575 18.375 171.15 23.3625L172.637 22.925L172.287 15.4ZM88.1125 14.6125C86.8875 14 85.575 13.7375 84.0875 13.7375C82.6 13.7375 81.1125 14.35 79.45 15.575C77.7875 16.8 76.5625 18.4625 75.6 20.7375L75.6875 13.7375L62.3875 16.3625V17.5875L63.7 17.675C65.3625 17.85 66.325 19.1625 66.5 21.525C67.025 26.95 67.025 32.725 66.5 38.85C66.325 41.2125 65.3625 42.4375 63.7 42.7L62.3875 42.875V44.5375H80.9375V42.875L78.575 42.7C76.9125 42.525 75.95 41.2125 75.775 38.85C75.25 33.775 75.1625 28.35 75.6 22.75C76.125 21.875 77.2625 21.35 79.0125 21.175C80.7625 21 82.775 21.525 84.875 22.75L88.1125 14.6125Z" fill={fill} fillOpacity="0.5"/>
</svg>

   </div>
  )
}

export default ForbesIcon