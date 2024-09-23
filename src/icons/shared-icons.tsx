import React, { useState } from "react";

export const Message = () => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 1.8125C1.50391 1.8125 1.3125 2.03125 1.3125 2.25V2.87891L6.01562 6.73438C6.58984 7.19922 7.38281 7.19922 7.95703 6.73438L12.6875 2.87891V2.25C12.6875 2.03125 12.4688 1.8125 12.25 1.8125H1.75ZM1.3125 4.57422V9.25C1.3125 9.49609 1.50391 9.6875 1.75 9.6875H12.25C12.4688 9.6875 12.6875 9.49609 12.6875 9.25V4.57422L8.80469 7.74609C7.73828 8.62109 6.23438 8.62109 5.19531 7.74609L1.3125 4.57422ZM0 2.25C0 1.29297 0.765625 0.5 1.75 0.5H12.25C13.207 0.5 14 1.29297 14 2.25V9.25C14 10.2344 13.207 11 12.25 11H1.75C0.765625 11 0 10.2344 0 9.25V2.25Z"
        fill="white"
      />
    </svg>
  );
};

export const Play = () => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0625 11.6125L9.9375 6.80005L2.0625 1.98755V11.6125ZM1.40625 0.866455C1.81641 0.620361 2.33594 0.620361 2.74609 0.866455L10.6211 5.67896C11.0039 5.92505 11.25 6.36255 11.25 6.80005C11.25 7.26489 11.0039 7.70239 10.6211 7.92114L2.74609 12.7336C2.33594 13.0071 1.81641 13.0071 1.40625 12.761C0.996094 12.5422 0.75 12.1047 0.75 11.6125V1.98755C0.75 1.52271 0.996094 1.08521 1.40625 0.866455Z"
        fill="white"
      />
    </svg>
  );
};

export const Shortcut = () => {
  return (
    <svg
      width="43"
      height="28"
      viewBox="0 0 43 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.731445" width="42.2686" height="28" rx="6" fill="#EFF0F0" />
      <path
        opacity="0.6"
        d="M8.73145 10.1562C8.73145 8.98438 9.69238 8 10.8877 8C12.0596 8 13.0439 8.98438 13.0439 10.1562V11.1875H16.4189V10.1562C16.4189 8.98438 17.3799 8 18.5752 8C19.7471 8 20.7314 8.98438 20.7314 10.1562V10.25C20.7314 11.4922 19.7236 12.5 18.4814 12.5H17.5439V15.5H18.4814C19.7236 15.5 20.7314 16.5078 20.7314 17.75V17.8438C20.7314 19.0391 19.7471 20 18.5752 20C17.3799 20 16.4189 19.0391 16.4189 17.8438V16.8125H13.0439V17.8438C13.0439 19.0391 12.0596 20 10.8877 20C9.69238 20 8.73145 19.0391 8.73145 17.8438V17.75C8.73145 16.5078 9.73926 15.5 10.9814 15.5H11.9189V12.5H10.9814C9.73926 12.5 8.73145 11.4922 8.73145 10.25V10.1562ZM11.9189 11.375V11.1875V10.1562C11.9189 9.59375 11.4502 9.125 10.8877 9.125C10.3018 9.125 9.85645 9.59375 9.85645 10.1562V10.25C9.85645 10.8828 10.3486 11.375 10.9814 11.375H11.9189ZM13.0439 15.5V15.6875H16.4189V15.5V12.5V12.3125H13.0439V12.5V15.5ZM11.9189 16.625H10.9814C10.3486 16.625 9.85645 17.1406 9.85645 17.75V17.8438C9.85645 18.4297 10.3018 18.875 10.8877 18.875C11.4502 18.875 11.9189 18.4297 11.9189 17.8438V16.8125V16.625ZM17.5439 16.8125V17.8438C17.5439 18.4297 17.9893 18.875 18.5752 18.875C19.1377 18.875 19.6064 18.4297 19.6064 17.8438V17.75C19.6064 17.1406 19.0908 16.625 18.4814 16.625H17.5439V16.8125ZM17.5439 11.375H18.4814C19.0908 11.375 19.6064 10.8828 19.6064 10.25V10.1562C19.6064 9.59375 19.1377 9.125 18.5752 9.125C17.9893 9.125 17.5439 9.59375 17.5439 10.1562V11.1875V11.375Z"
        fill="#0B1742"
      />
      <path
        opacity="0.6"
        d="M26.2743 16.3657L26.1714 14.2914L32.4629 8H34.8972L26.2743 16.3657ZM24.7314 20V8H26.5829V20H24.7314ZM32.6857 20L28.0914 13.8629L29.4629 12.68L35 20H32.6857Z"
        fill="#0B1742"
      />
    </svg>
  );
};

export const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.75 7.55811L8.25 12.8081C7.9375 13.0894 7.46875 13.0894 7.1875 12.7769C6.90625 12.4644 6.90625 11.9956 7.21875 11.7144L11.375 7.74561H0.75C0.3125 7.74561 0 7.43311 0 6.99561C0 6.58936 0.3125 6.24561 0.75 6.24561H11.375L7.21875 2.30811C6.90625 2.02686 6.90625 1.52686 7.1875 1.24561C7.46875 0.933105 7.96875 0.933105 8.25 1.21436L13.75 6.46436C13.9062 6.62061 14 6.80811 14 6.99561C14 7.21436 13.9062 7.40186 13.75 7.55811Z"
      fill="white"
    />
  </svg>
);

export const GitHubMenu = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <svg
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      width="48"
      height="44"
      viewBox="0 0 48 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="43" rx="7.5" fill="white" />
      <rect x="0.5" y="0.5" width="47" height="43" rx="7.5" stroke="#DCE2EA" />
      <path
        d="M21.1562 26.9375C21.1562 26.875 21.0938 26.8125 21 26.8125C20.9062 26.8125 20.8438 26.875 20.8438 26.9375C20.8438 27 20.9062 27.0625 21 27.0312C21.0938 27.0312 21.1562 27 21.1562 26.9375ZM20.1875 26.7812C20.2188 26.7188 20.3125 26.6875 20.4062 26.7188C20.5 26.75 20.5312 26.8125 20.5312 26.875C20.5 26.9375 20.4062 26.9688 20.3438 26.9375C20.25 26.9375 20.1875 26.8438 20.1875 26.7812ZM21.5938 26.75C21.6562 26.7188 21.75 26.7812 21.75 26.8438C21.7812 26.9062 21.7188 26.9375 21.625 26.9688C21.5312 27 21.4375 26.9688 21.4375 26.9062C21.4375 26.8125 21.5 26.75 21.5938 26.75ZM23.625 14.75C27.9688 14.75 31.5 18.0625 31.5 22.375C31.5 25.8438 29.375 28.8125 26.25 29.8438C25.8438 29.9375 25.6875 29.6875 25.6875 29.4688C25.6875 29.2188 25.7188 27.9062 25.7188 26.875C25.7188 26.125 25.4688 25.6562 25.1875 25.4062C26.9375 25.2188 28.7812 24.9688 28.7812 21.9688C28.7812 21.0938 28.4688 20.6875 27.9688 20.125C28.0312 19.9062 28.3125 19.0938 27.875 18C27.2188 17.7812 25.7188 18.8438 25.7188 18.8438C25.0938 18.6562 24.4375 18.5938 23.75 18.5938C23.0938 18.5938 22.4375 18.6562 21.8125 18.8438C21.8125 18.8438 20.2812 17.8125 19.6562 18C19.2188 19.0938 19.4688 19.9062 19.5625 20.125C19.0625 20.6875 18.8125 21.0938 18.8125 21.9688C18.8125 24.9688 20.5938 25.2188 22.3438 25.4062C22.0938 25.625 21.9062 25.9688 21.8438 26.4688C21.375 26.6875 20.25 27.0312 19.5625 25.8125C19.125 25.0625 18.3438 25 18.3438 25C17.5938 25 18.3125 25.5 18.3125 25.5C18.8125 25.7188 19.1562 26.625 19.1562 26.625C19.625 28.0312 21.8125 27.5625 21.8125 27.5625C21.8125 28.2188 21.8125 29.2812 21.8125 29.5C21.8125 29.6875 21.6875 29.9375 21.2812 29.875C18.1562 28.8125 16 25.8438 16 22.375C16 18.0625 19.3125 14.75 23.625 14.75ZM19.0312 25.5312C19.0625 25.5 19.125 25.5312 19.1875 25.5625C19.25 25.625 19.25 25.7188 19.2188 25.75C19.1562 25.7812 19.0938 25.75 19.0312 25.7188C19 25.6562 18.9688 25.5625 19.0312 25.5312ZM18.6875 25.2812C18.7188 25.25 18.75 25.25 18.8125 25.2812C18.875 25.3125 18.9062 25.3438 18.9062 25.375C18.875 25.4375 18.8125 25.4375 18.75 25.4062C18.6875 25.375 18.6562 25.3438 18.6875 25.2812ZM19.6875 26.4062C19.75 26.3438 19.8438 26.375 19.9062 26.4375C19.9688 26.5 19.9688 26.5938 19.9375 26.625C19.9062 26.6875 19.8125 26.6562 19.75 26.5938C19.6562 26.5312 19.6562 26.4375 19.6875 26.4062ZM19.3438 25.9375C19.4062 25.9062 19.4688 25.9375 19.5312 26C19.5625 26.0625 19.5625 26.1562 19.5312 26.1875C19.4688 26.2188 19.4062 26.1875 19.3438 26.125C19.2812 26.0625 19.2812 25.9688 19.3438 25.9375Z"
        fill={`${hover ? "#5F38FB" : "#8A9FB8"}`}
      />
    </svg>
  );
};

export const vectorSquare = () => {
  return (
    <svg
      width="41"
      height="52"
      viewBox="0 0 41 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.0223 8.82514C34.1236 8.7782 34.2249 8.73909 34.3262 8.70779C34.4742 8.65303 34.6144 8.59826 34.7546 8.55915C34.8481 8.53568 34.9338 8.50438 35.0273 8.48091C35.113 8.45744 35.1909 8.4418 35.2766 8.42615C35.3857 8.40268 35.4948 8.38703 35.596 8.37921C35.6584 8.37921 35.7207 8.36356 35.7752 8.36356C35.9077 8.35574 36.0401 8.34792 36.1648 8.36356C36.1959 8.36356 36.2271 8.36356 36.2505 8.36356C36.4063 8.37139 36.5543 8.39486 36.7023 8.41833C36.7413 8.41833 36.7725 8.43397 36.8114 8.4418C36.9283 8.46527 37.0373 8.49656 37.1464 8.53568C37.1776 8.55132 37.2165 8.55915 37.2477 8.57479C37.3879 8.62956 37.5204 8.69214 37.645 8.76256L25.7407 1.80757C25.7407 1.80757 25.7174 1.79193 25.7096 1.79193C25.6083 1.73716 25.507 1.6824 25.4057 1.64328C25.3902 1.63546 25.3668 1.62763 25.3434 1.61981C25.3122 1.60416 25.2733 1.59634 25.2421 1.58069C25.1876 1.56505 25.1408 1.54158 25.0863 1.52593C25.0318 1.51028 24.9695 1.50246 24.9071 1.48681C24.8682 1.47899 24.837 1.47117 24.7981 1.46334C24.7747 1.46334 24.7591 1.45552 24.7435 1.4477C24.6267 1.42423 24.502 1.40858 24.3774 1.40076C24.3696 1.40076 24.3618 1.40076 24.354 1.40076C24.3228 1.40076 24.2917 1.40076 24.2683 1.40076C24.1748 1.40076 24.0735 1.40076 23.98 1.40076C23.9489 1.40076 23.9099 1.40858 23.8787 1.40858C23.8164 1.40858 23.7541 1.4164 23.6996 1.42423C23.645 1.42423 23.5905 1.43205 23.5282 1.43987C23.4814 1.43987 23.4269 1.46334 23.3723 1.47117C23.2866 1.48681 23.2087 1.50246 23.123 1.52593C23.0763 1.53375 23.0373 1.54158 22.9906 1.55722C22.9439 1.57287 22.8971 1.58852 22.8504 1.60416C22.7101 1.64328 22.5699 1.69805 22.4219 1.75281C22.3673 1.77628 22.3206 1.7841 22.2738 1.80757C22.2271 1.83104 22.1726 1.85451 22.1258 1.87798C22.0791 1.90145 22.0323 1.92492 21.9856 1.94057C21.7986 2.02663 21.6194 2.12051 21.4247 2.23003L7.65059 10.2177C7.45582 10.3351 7.26105 10.4524 7.07407 10.5854C7.01175 10.6323 6.94942 10.6793 6.8871 10.7184C6.76244 10.8123 6.63 10.9062 6.50535 11.0079C6.43523 11.0626 6.36511 11.1252 6.295 11.18C6.17813 11.2739 6.06127 11.3756 5.9522 11.4851C5.88209 11.5477 5.81197 11.6103 5.74965 11.6807C5.71069 11.7198 5.66394 11.7589 5.6172 11.798C5.57046 11.845 5.5315 11.8919 5.48476 11.9388C5.34452 12.0797 5.21208 12.2205 5.07964 12.3691C5.04068 12.4161 4.99394 12.463 4.94719 12.51C4.90824 12.5491 4.87708 12.596 4.84591 12.6351C4.76801 12.729 4.6901 12.8229 4.61219 12.9246C4.55766 12.9872 4.51091 13.0498 4.45638 13.1124C4.41742 13.1671 4.37847 13.2219 4.33952 13.2766C4.28498 13.3549 4.22265 13.4253 4.16812 13.5035C4.12917 13.5583 4.09021 13.6052 4.05126 13.66C3.98893 13.7539 3.92661 13.8478 3.86428 13.9416C3.82533 13.9964 3.78637 14.059 3.74742 14.1137C3.73183 14.1372 3.71626 14.1607 3.70068 14.1842C3.5916 14.3563 3.49032 14.5284 3.38904 14.7005C3.38904 14.7161 3.37346 14.724 3.36567 14.7396C3.3423 14.7787 3.32672 14.81 3.30334 14.8491C3.23323 14.9743 3.16311 15.0917 3.10078 15.2168C3.06962 15.2794 3.03846 15.3342 3.0073 15.3968C2.97614 15.4594 2.94497 15.522 2.91381 15.5767C2.89043 15.6315 2.85927 15.6784 2.8359 15.7332C2.76578 15.8818 2.69567 16.0305 2.63334 16.1791C2.62555 16.2026 2.60997 16.2261 2.60218 16.2495C2.60218 16.2495 2.60218 16.2652 2.59438 16.273C2.51648 16.4529 2.43857 16.6407 2.36845 16.8206C2.35287 16.8519 2.34508 16.891 2.3295 16.9223C2.30613 16.9927 2.28275 17.0553 2.25938 17.1257C2.22822 17.2196 2.18927 17.3057 2.16589 17.3996C2.14252 17.47 2.11915 17.5482 2.10357 17.6186C2.0802 17.7047 2.04903 17.7829 2.02566 17.869C2.01008 17.9237 1.9945 17.9707 1.97892 18.0254C1.95554 18.1193 1.93217 18.2132 1.9088 18.3071C1.88543 18.4088 1.85426 18.5183 1.83089 18.62C1.8231 18.6591 1.81531 18.6904 1.80752 18.7295C1.79194 18.8078 1.78415 18.8782 1.76857 18.9564C1.7374 19.1207 1.70624 19.285 1.68287 19.4493C1.68287 19.4962 1.66729 19.5432 1.6595 19.5823C1.64391 19.684 1.63612 19.7857 1.62833 19.8874C1.62833 19.9578 1.61275 20.0282 1.60496 20.1065C1.58937 20.3333 1.5738 20.5602 1.58158 20.7871L1.63612 39.7275C1.63612 41.652 2.32171 43.0133 3.41242 43.6548L15.3245 50.602C14.2338 49.9605 13.5482 48.607 13.5482 46.6746L13.4937 27.7342C13.4937 27.5152 13.5014 27.2883 13.517 27.0614C13.517 26.991 13.5326 26.9128 13.5404 26.8424C13.556 26.6937 13.5716 26.5529 13.5949 26.4043C13.6183 26.24 13.6495 26.0757 13.6806 25.9114C13.704 25.8019 13.7196 25.6923 13.743 25.5828C13.7663 25.4811 13.7897 25.3716 13.8209 25.2699C13.8598 25.1212 13.891 24.9804 13.9377 24.8318C13.9611 24.7457 13.9845 24.6597 14.0156 24.5814C14.0702 24.4171 14.1247 24.2528 14.1792 24.0964C14.2026 24.026 14.226 23.9634 14.2494 23.893C14.3351 23.6661 14.4208 23.447 14.522 23.2202C14.5298 23.1967 14.5454 23.1732 14.5532 23.1497C14.6389 22.9463 14.7324 22.7508 14.8337 22.5552C14.8648 22.4926 14.896 22.43 14.9272 22.3674C15.0206 22.1796 15.1219 21.9997 15.2232 21.8198C15.2466 21.7807 15.2622 21.7494 15.2855 21.7102C15.4102 21.499 15.5348 21.2878 15.6673 21.0844C15.7062 21.0218 15.7452 20.967 15.7841 20.9123C15.8854 20.7636 15.9789 20.6228 16.088 20.4742C16.1425 20.3959 16.2048 20.3177 16.2594 20.2395C16.3451 20.1221 16.4386 20.0047 16.5321 19.8874C16.61 19.7857 16.6879 19.6918 16.7658 19.5979C16.8437 19.5119 16.9216 19.418 16.9995 19.3319C17.1319 19.1833 17.2644 19.0425 17.4046 18.9017C17.4903 18.8156 17.576 18.7295 17.6617 18.6435C17.7318 18.5809 17.7942 18.5183 17.8643 18.4479C17.9811 18.3462 18.0902 18.2445 18.2071 18.1428C18.2772 18.088 18.3473 18.0254 18.4174 17.9707C18.5421 17.869 18.6745 17.7751 18.7992 17.6812C18.8615 17.6343 18.9238 17.5873 18.9861 17.5482C19.1809 17.4152 19.3679 17.29 19.5627 17.1805L33.3211 9.18502C33.5081 9.07549 33.6951 8.98161 33.8821 8.89555C33.9288 8.87208 33.9756 8.84861 34.0301 8.83297L34.0223 8.82514Z"
        fill="url(#paint0_linear_3743_5770)"
        stroke="#0B1742"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3233 9.18486C36.6811 7.23683 39.4157 8.80151 39.4313 12.6819L39.4858 31.6223C39.4936 35.5027 36.7824 40.228 33.4168 42.176L19.6428 50.1637C16.2849 52.1117 13.5504 50.5392 13.5348 46.6667L13.4803 27.7263C13.4725 23.838 16.1837 19.1205 19.5493 17.1725L33.3233 9.18486Z"
        fill="white"
        stroke="#0B1742"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3743_5770"
          x1="37.6528"
          y1="25.9975"
          x2="1.566"
          y2="25.9975"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCE2EA" />
          <stop offset="0.8" stopColor="#F3F5F8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const vectorPointer = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="40"
      viewBox="0 0 58 40"
      fill="none"
    >
      <path
        d="M0.637009 3.69883C0.640408 3.74985 0.64381 3.80088 0.654015 3.8519C0.667622 3.93353 0.688034 4.01517 0.715244 4.0968L9.45023 30.1317C9.46383 30.1691 9.47744 30.2031 9.49105 30.2371C9.51826 30.3085 9.55227 30.3766 9.58969 30.4446C9.59989 30.4616 9.60669 30.482 9.6169 30.499C9.66792 30.5875 9.72575 30.6691 9.78697 30.7507C9.80058 30.7677 9.81078 30.7814 9.82439 30.7984C9.90602 30.897 9.99446 30.9922 10.0897 31.0841C10.1067 31.0977 10.1203 31.1113 10.1373 31.1249C10.202 31.1827 10.2734 31.2406 10.3448 31.295C10.3652 31.3086 10.3822 31.3256 10.4026 31.3392C10.4911 31.4038 10.5829 31.465 10.6782 31.5229C10.6918 31.5297 10.7054 31.5399 10.719 31.5467C10.8686 31.6351 11.0285 31.7168 11.1986 31.795C11.2156 31.8018 11.236 31.812 11.253 31.8188C11.4197 31.8936 11.5966 31.9583 11.7802 32.0195C11.8006 32.0263 11.821 32.0331 11.8415 32.0399C11.9707 32.0807 12.1 32.1181 12.236 32.1521C12.2632 32.1589 12.2905 32.1658 12.3143 32.1726C12.4401 32.2032 12.5694 32.2304 12.702 32.2542C12.7156 32.2542 12.7326 32.261 12.7463 32.2644C12.9435 32.2984 13.1476 32.329 13.3517 32.3494C13.3585 32.3494 13.3619 32.3494 13.3687 32.3494C13.5286 32.3664 13.6919 32.3766 13.8551 32.3834C13.8823 32.3834 13.913 32.3834 13.9402 32.3868C14.083 32.3902 14.2259 32.3937 14.3722 32.3868C14.4028 32.3868 14.43 32.3868 14.4606 32.3868C14.5762 32.3834 14.6953 32.3766 14.8109 32.3698C14.8416 32.3698 14.8722 32.3664 14.9028 32.363C15.0388 32.3528 15.1715 32.3358 15.3076 32.3188C15.3348 32.3154 15.362 32.312 15.3892 32.3052C15.5082 32.2882 15.6239 32.2678 15.7395 32.244C15.7702 32.2372 15.8008 32.2338 15.828 32.227C15.9742 32.1964 16.1171 32.1623 16.26 32.1215C16.2838 32.1147 16.311 32.1079 16.3348 32.1011C16.5117 32.0501 16.6852 31.9923 16.8552 31.9242C16.8858 31.9106 16.9165 31.9004 16.9471 31.8868C17.0253 31.8528 17.1069 31.8188 17.1818 31.7848C17.2158 31.7712 17.2464 31.7542 17.2804 31.7406C17.3859 31.6895 17.4913 31.6351 17.5933 31.5773L29.7672 24.5499L44.5738 33.1556C44.7167 33.2372 44.8732 33.3086 45.033 33.3733C45.0738 33.3903 45.1181 33.4073 45.1623 33.4209C45.3188 33.4787 45.4786 33.5263 45.6419 33.5672C45.6623 33.5706 45.6793 33.574 45.6997 33.5808C45.863 33.6182 46.0297 33.6454 46.1997 33.6658C46.2337 33.6692 46.2644 33.676 46.2984 33.6794C46.4821 33.6998 46.6657 33.71 46.8528 33.71C46.8834 33.71 46.9106 33.71 46.9413 33.71C47.1249 33.71 47.3052 33.6998 47.4855 33.6794C47.5127 33.6794 47.5399 33.6726 47.5671 33.6692C47.7474 33.6488 47.9243 33.6182 48.0944 33.5774C48.125 33.5706 48.1556 33.5638 48.1896 33.5536C48.3461 33.5161 48.4991 33.4685 48.6454 33.4141C48.6726 33.4039 48.6998 33.3971 48.727 33.3869C48.9039 33.3188 49.074 33.2406 49.227 33.1488L56.3905 29.0126C57.0402 28.6384 57.3634 28.1452 57.3634 27.6554L57.3804 33.193C57.3804 33.6828 57.0572 34.176 56.4076 34.5502L49.244 38.6864C49.0944 38.7714 48.9345 38.8496 48.7678 38.9143C48.7576 38.9177 48.7508 38.9211 48.7406 38.9245C48.7134 38.9347 48.6862 38.9415 48.659 38.9517C48.5638 38.9857 48.4651 39.0231 48.3665 39.0503C48.312 39.0639 48.2576 39.0775 48.2032 39.0911C48.1726 39.0979 48.142 39.1082 48.108 39.115C48.0807 39.1218 48.0501 39.1286 48.0229 39.1354C47.9141 39.1592 47.8052 39.1762 47.6964 39.1932C47.659 39.2 47.6181 39.2 47.5773 39.2068C47.5501 39.2068 47.5229 39.2136 47.4957 39.217C47.4549 39.2204 47.4141 39.2272 47.3766 39.2306C47.2678 39.2408 47.1623 39.2442 47.0535 39.2476C47.0195 39.2476 46.9855 39.2476 46.9515 39.2476C46.9208 39.2476 46.8936 39.2476 46.863 39.2476C46.8154 39.2476 46.7644 39.2476 46.7168 39.2476C46.5943 39.2442 46.4719 39.234 46.3528 39.2238C46.3392 39.2238 46.3256 39.2204 46.312 39.217C46.278 39.2136 46.2474 39.2068 46.2133 39.2034C46.1181 39.1932 46.0263 39.1796 45.931 39.166C45.8562 39.1524 45.7848 39.1354 45.7133 39.1184C45.6929 39.115 45.6759 39.1116 45.6555 39.1048C45.5364 39.0775 45.4208 39.0435 45.3085 39.0095C45.2609 38.9959 45.2201 38.9755 45.1725 38.9585C45.1283 38.9415 45.0875 38.9279 45.0432 38.9109C44.8834 38.8462 44.7269 38.7748 44.584 38.6932L29.7774 30.0875L17.6036 37.1149C17.5015 37.1727 17.3995 37.2271 17.2906 37.2782C17.26 37.2952 17.226 37.3088 17.1954 37.3224C17.1171 37.3598 17.0389 37.3938 16.9573 37.4244C16.9369 37.4312 16.9165 37.4414 16.8994 37.4516C16.8892 37.455 16.879 37.4584 16.8688 37.4618C16.6988 37.5265 16.5253 37.5877 16.3484 37.6387C16.3348 37.6421 16.3246 37.6489 16.311 37.6523C16.2974 37.6557 16.2872 37.6591 16.2736 37.6625C16.1307 37.7033 15.9879 37.7374 15.8416 37.768C15.8314 37.768 15.8212 37.7748 15.811 37.7748C15.7906 37.7782 15.7702 37.7816 15.7532 37.785C15.6375 37.8088 15.5185 37.8292 15.3994 37.8462C15.3824 37.8462 15.362 37.853 15.345 37.8564C15.3382 37.8564 15.328 37.8564 15.3212 37.8564C15.1851 37.8734 15.0525 37.8904 14.9164 37.9006C14.9062 37.9006 14.896 37.9006 14.8858 37.904C14.8654 37.904 14.845 37.904 14.8246 37.904C14.7089 37.9142 14.5898 37.9176 14.4742 37.921C14.4538 37.921 14.4334 37.921 14.413 37.921C14.4028 37.921 14.3926 37.921 14.3824 37.921C14.2395 37.921 14.0932 37.921 13.9504 37.921C13.9402 37.921 13.9266 37.921 13.9164 37.921C13.8993 37.921 13.8823 37.921 13.8653 37.921C13.7021 37.9142 13.5388 37.904 13.3789 37.887C13.3789 37.887 13.3755 37.887 13.3721 37.887C13.3687 37.887 13.3653 37.887 13.3619 37.887C13.1578 37.8666 12.9537 37.8394 12.7565 37.802C12.7565 37.802 12.7497 37.802 12.7463 37.802C12.736 37.802 12.7224 37.7952 12.7122 37.7952C12.5796 37.7714 12.4537 37.7442 12.3245 37.7136C12.2973 37.7067 12.27 37.6999 12.2462 37.6931C12.1136 37.6591 11.9809 37.6217 11.8517 37.5809C11.8415 37.5809 11.8313 37.5741 11.8211 37.5707C11.8108 37.5707 11.8006 37.5639 11.7904 37.5605C11.6068 37.4993 11.4333 37.4346 11.2632 37.3598C11.2428 37.353 11.2258 37.3428 11.2088 37.336C11.0387 37.2612 10.8788 37.1761 10.7292 37.0877C10.7224 37.0843 10.7122 37.0809 10.7054 37.0741C10.6986 37.0707 10.6952 37.0673 10.6884 37.0639C10.5931 37.006 10.5013 36.9448 10.4128 36.8802C10.3924 36.8666 10.3754 36.853 10.355 36.836C10.2836 36.7815 10.2122 36.7237 10.1475 36.6659C10.1373 36.6557 10.1237 36.6455 10.1101 36.6353C10.1067 36.6319 10.1033 36.6251 10.0965 36.6217C9.99786 36.5298 9.90943 36.4346 9.83119 36.336C9.82439 36.3292 9.81418 36.3189 9.80738 36.3121C9.80058 36.3053 9.79718 36.2985 9.79378 36.2917C9.72915 36.2101 9.67472 36.1251 9.6237 36.04C9.6237 36.0332 9.6169 36.0298 9.61349 36.023C9.60669 36.0094 9.60329 35.9992 9.59649 35.9856C9.55907 35.9176 9.52846 35.8495 9.49784 35.7781C9.49104 35.7645 9.48424 35.7509 9.48083 35.7373C9.47403 35.7169 9.46383 35.6931 9.45703 35.6727L0.722046 9.6378C0.698235 9.56637 0.677826 9.49154 0.664219 9.42011C0.664219 9.4099 0.664219 9.4031 0.664219 9.3929C0.654015 9.34187 0.650616 9.29085 0.647217 9.23983C0.647217 9.20581 0.637009 9.1718 0.637009 9.14119C0.637009 9.12758 0.637009 9.11397 0.637009 9.10037L0.620003 3.55597C0.620003 3.60359 0.626808 3.65121 0.63361 3.69883H0.637009Z"
        fill="url(#paint0_linear_3743_5795)"
        stroke="#0B1742"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.7916 16.2199L41.6177 23.2473L41.6007 17.7029L53.778 10.6755C54.6386 10.1788 55.091 9.57338 55.1862 8.95771C55.1998 8.86928 55.2066 8.78084 55.2066 8.6958L55.2236 14.2402C55.2236 14.9409 54.7746 15.6518 53.7916 16.2199Z"
        fill="url(#paint1_linear_3743_5795)"
        stroke="#0B1742"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.05217 1.57274C0.967098 2.19861 0.388851 3.11701 0.715393 4.09323L9.45037 30.1281C10.1885 32.3255 14.8553 33.1452 17.5935 31.5635L29.7674 24.5361L44.574 33.1418C45.8563 33.8867 47.938 33.8867 49.2272 33.1418L56.3907 29.0056C57.6798 28.2607 57.6866 27.0532 56.4043 26.3082L41.5977 17.7025L53.7784 10.6751C56.5199 9.0934 55.1151 6.38583 51.3259 5.95044L6.40605 0.807411C4.72232 0.613528 3.13383 0.946872 2.05217 1.57274Z"
        fill="white"
        stroke="#0B1742"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29.7334 30.0922V24.5885" stroke="#0B1742" strokeWidth="1.2" />
      <defs>
        <linearGradient
          id="paint0_linear_3743_5795"
          x1="61.2995"
          y1="38.4142"
          x2="-23.7768"
          y2="-0.166905"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.295093" stopColor="#DCE2EA" />
          <stop offset="0.8" stopColor="#F3F5F8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3743_5795"
          x1="56.1642"
          y1="22.9075"
          x2="33.1839"
          y2="16.7726"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.295093" stopColor="#DCE2EA" />
          <stop offset="0.8" stopColor="#F3F5F8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CodeIcon = () => {
  return (
    <svg
      width="34"
      height="9"
      viewBox="0 0 34 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8.5C6.20914 8.5 8 6.70914 8 4.5C8 2.29086 6.20914 0.5 4 0.5C1.79086 0.5 0 2.29086 0 4.5C0 6.70914 1.79086 8.5 4 8.5Z"
          fill="#0B1742"
        />
        <path
          d="M7.75 4.5C7.75 6.57107 6.07107 8.25 4 8.25C1.92893 8.25 0.25 6.57107 0.25 4.5C0.25 2.42893 1.92893 0.75 4 0.75C6.07107 0.75 7.75 2.42893 7.75 4.5Z"
          stroke="black"
          strokeOpacity="0.12"
          strokeWidth="0.5"
        />
      </g>
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 8.5C19.2091 8.5 21 6.70914 21 4.5C21 2.29086 19.2091 0.5 17 0.5C14.7909 0.5 13 2.29086 13 4.5C13 6.70914 14.7909 8.5 17 8.5Z"
          fill="#0B1742"
        />
        <path
          d="M20.75 4.5C20.75 6.57107 19.0711 8.25 17 8.25C14.9289 8.25 13.25 6.57107 13.25 4.5C13.25 2.42893 14.9289 0.75 17 0.75C19.0711 0.75 20.75 2.42893 20.75 4.5Z"
          stroke="black"
          strokeOpacity="0.12"
          strokeWidth="0.5"
        />
      </g>
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 8.5C32.2091 8.5 34 6.70914 34 4.5C34 2.29086 32.2091 0.5 30 0.5C27.7909 0.5 26 2.29086 26 4.5C26 6.70914 27.7909 8.5 30 8.5Z"
          fill="#0B1742"
        />
        <path
          d="M33.75 4.5C33.75 6.57107 32.0711 8.25 30 8.25C27.9289 8.25 26.25 6.57107 26.25 4.5C26.25 2.42893 27.9289 0.75 30 0.75C32.0711 0.75 33.75 2.42893 33.75 4.5Z"
          stroke="black"
          strokeOpacity="0.12"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
};

export const CopyIcon = () => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 10.75H7C6.01562 10.75 5.25 9.98438 5.25 9V2C5.25 1.04297 6.01562 0.25 7 0.25H10.8281C11.1562 0.25 11.5117 0.414062 11.7578 0.660156L13.5898 2.49219C13.8359 2.73828 14 3.09375 14 3.42188V9C14 9.98438 13.207 10.75 12.25 10.75ZM1.75 3.75H4.375V5.0625H1.75C1.50391 5.0625 1.3125 5.28125 1.3125 5.5V12.5C1.3125 12.7461 1.50391 12.9375 1.75 12.9375H7C7.21875 12.9375 7.4375 12.7461 7.4375 12.5V11.625H8.75V12.5C8.75 13.4844 7.95703 14.25 7 14.25H1.75C0.765625 14.25 0 13.4844 0 12.5V5.5C0 4.54297 0.765625 3.75 1.75 3.75Z"
        fill="#000D3D"
      />
    </svg>
  );
};

export const Tick = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3359 0.414062C11.5469 0.648438 11.5469 1 11.3359 1.21094L5.14844 7.39844C4.91406 7.63281 4.5625 7.63281 4.35156 7.39844L1.16406 4.21094C0.929688 4 0.929688 3.64844 1.16406 3.4375C1.375 3.20312 1.72656 3.20312 1.9375 3.4375L4.72656 6.22656L10.5391 0.414062C10.75 0.203125 11.1016 0.203125 11.3125 0.414062H11.3359Z"
        fill="#0B1742"
      />
    </svg>
  );
};

export const DropDownArrow = () => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.46875 7.53125L0.46875 1.53125C0.15625 1.25 0.15625 0.78125 0.46875 0.46875C0.75 0.1875 1.21875 0.1875 1.53125 0.46875L7 5.96875L12.4688 0.5C12.75 0.1875 13.2188 0.1875 13.5312 0.5C13.8125 0.78125 13.8125 1.25 13.5312 1.53125L7.5 7.53125C7.21875 7.84375 6.75 7.84375 6.46875 7.53125Z"
        fill="#0B1742"
      />
    </svg>
  );
};

export const Tickicon = () => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z"
        fill="#6C48FB"
      />
    </svg>
  );
};
