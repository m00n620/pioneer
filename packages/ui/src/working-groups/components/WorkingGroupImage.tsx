import React from 'react'
import styled from 'styled-components'

import { Colors, Transitions } from '../../common/constants'
import { GroupName } from '../types'

export interface WorkingGroupImageProps {
  className?: string
  groupName?: GroupName | string
}

export const WorkingGroupImage = ({ className, groupName }: WorkingGroupImageProps) => {
  switch (groupName) {
    case 'bandwidth':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <rect x="42.8284" y="42.8281" width="22" height="22" fill={Colors.Black[500]} />
          <circle cx="54" cy="54" r="2" fill={Colors.White} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.8284 24L60.2426 30.4142L57.4142 33.2426L55.8284 31.6569V47.8284H51.8284V31.6569L50.2426 33.2426L47.4142 30.4142L53.8284 24Z"
            fill={Colors.Blue[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.8284 42.8281V47.8281H51.8284V42.8281H55.8284Z"
            fill={Colors.Black[900]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.8284 83.6572L60.2426 77.243L57.4142 74.4146L55.8284 76.0004V59.8288H51.8284V76.0004L50.2426 74.4146L47.4142 77.243L53.8284 83.6572Z"
            fill={Colors.Blue[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.6567 53.8283L77.2425 60.2425L74.4141 57.4141L75.9999 55.8283L59.8283 55.8283L59.8283 51.8283L75.9999 51.8283L74.4141 50.2425L77.2425 47.4141L83.6567 53.8283Z"
            fill={Colors.Blue[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 53.8283L30.4142 60.2425L33.2426 57.4141L31.6569 55.8283L47.8284 55.8283L47.8284 51.8283L31.6569 51.8283L33.2426 50.2425L30.4142 47.4141L24 53.8283Z"
            fill={Colors.Blue[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.8284 59.8281V64.8281H51.8284V59.8281H55.8284Z"
            fill={Colors.Black[900]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.8284 55.8281L42.8284 55.8281L42.8284 51.8281L47.8284 51.8281L47.8284 55.8281Z"
            fill={Colors.Black[900]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.8284 55.8281L59.8284 55.8281L59.8284 51.8281L64.8284 51.8281L64.8284 55.8281Z"
            fill={Colors.Black[900]}
          />
        </WorkingGroupImageTag>
      )
    case 'storage':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M53 37H73V39H53V37Z" fill={Colors.White} />
          <path fillRule="evenodd" clipRule="evenodd" d="M53 33H80V35H53V33Z" fill={Colors.White} />
          <path d="M64 68V44H44.0131H24V68H24.2129H27.7738H64Z" fill={Colors.Blue[500]} />
          <path d="M44 66.5V77" stroke={Colors.Blue[500]} strokeWidth="2" />
          <path d="M67 48L67 76" stroke={Colors.Black[500]} strokeWidth="2" />
          <path d="M87 49V25H67.0131H47V49H47.2129H50.7738H87Z" fill={Colors.Black[500]} />
          <circle cx="74" cy="37" r="2" fill={Colors.White} />
          <circle cx="80" cy="37" r="2" fill={Colors.White} />
          <path fillRule="evenodd" clipRule="evenodd" d="M47 44V49H64V44H50.4143H47Z" fill={Colors.Black[900]} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 53H28V55H32V53ZM32 57H28V59H32V57ZM38 57H34V59H38V57ZM40 57H44V59H40V57ZM34 53H38V55H34V53ZM44 53H40V55H44V53Z"
            fill={Colors.White}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55 34H51V36H55V34ZM55 38H51V40H55V38ZM61 38H57V40H61V38ZM63 38H67V40H63V38ZM57 34H61V36H57V34ZM67 34H63V36H67V34Z"
            fill={Colors.White}
          />
          <circle cx="51" cy="56" r="2" fill={Colors.White} />
          <path d="M19 77H90" stroke={Colors.Black[900]} strokeWidth="2" />
          <circle cx="44" cy="77" r="2" fill={Colors.Blue[500]} />
          <circle cx="67" cy="77" r="2" fill={Colors.Black[500]} />
          <circle cx="57" cy="56" r="2" fill={Colors.White} />
        </WorkingGroupImageTag>
      )
    case 'forum':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path d="M44 53.9256V29H60H88.021V53.9256H85L75.8506 59.5V53.9256H44Z" fill={Colors.Black[500]} />
          <path fillRule="evenodd" clipRule="evenodd" d="M53 42H73V44H53V42Z" fill={Colors.White} />
          <path fillRule="evenodd" clipRule="evenodd" d="M53 38H80V40H53V38Z" fill={Colors.White} />
          <path d="M64.021 73.595V49H48.021H20V73.595H23.021L32.1704 79.1694V73.595H64.021Z" fill={Colors.Blue[500]} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44 49V53.9256H64.021V49H48.021H44Z"
            fill={Colors.Black[900]}
          />
          <path fillRule="evenodd" clipRule="evenodd" d="M28.021 62H48.021V64H28.021V62Z" fill={Colors.White} />
          <path fillRule="evenodd" clipRule="evenodd" d="M28.021 58H55.021V60H28.021V58Z" fill={Colors.White} />
        </WorkingGroupImageTag>
      )
    case 'membership':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path
            d="M30.2553 34.3861L35.2106 28.0149C35.611 27.5001 36.389 27.5001 36.7894 28.0149L41.7447 34.3861C42.2556 35.0429 41.7875 36 40.9554 36H38H31.0446C30.2125 36 29.7444 35.0429 30.2553 34.3861Z"
            fill={Colors.Black[500]}
          />
          <rect x="49" y="20" width="10" height="10" rx="1" fill={Colors.Black[500]} />
          <circle cx="72.5" cy="31.5" r="5.5" fill={Colors.Black[500]} />
          <path
            d="M46.9668 68.8154C47.1035 66.999 47.7969 65.5781 49.0469 64.5527C50.2969 63.5176 51.9326 63 53.9541 63C54.9307 63 55.8145 63.1416 56.6055 63.4248C57.3965 63.6982 58.0703 64.084 58.627 64.582C59.1934 65.0801 59.623 65.6855 59.916 66.3984C60.2188 67.1113 60.3701 67.8975 60.3701 68.7568C60.3701 69.9385 60.1406 70.9053 59.6816 71.6572C59.2227 72.3994 58.6123 73.1123 57.8506 73.7959C57.4502 74.1572 57.0791 74.4795 56.7373 74.7627C56.3955 75.0361 56.0977 75.3193 55.8438 75.6123C55.5996 75.9053 55.4043 76.208 55.2578 76.5205C55.1211 76.8232 55.0527 77.1846 55.0527 77.6045V77.8975H51.3027V77.6045C51.3027 77.0674 51.3516 76.5791 51.4492 76.1396C51.5566 75.7002 51.7227 75.2852 51.9473 74.8945C52.1816 74.5039 52.4746 74.1279 52.8262 73.7666C53.1777 73.4053 53.5928 73.0244 54.0713 72.624C54.9111 71.9404 55.5459 71.3008 55.9756 70.7051C56.4053 70.1094 56.6201 69.4307 56.6201 68.6689C56.6201 67.8682 56.3955 67.2334 55.9463 66.7646C55.4971 66.2959 54.7695 66.0615 53.7637 66.0615C52.748 66.0615 52.001 66.3105 51.5225 66.8086C51.0439 67.3066 50.7754 67.9756 50.7168 68.8154H46.9668ZM51.0391 83.8447V79.5234H55.3604V83.8447H51.0391Z"
            fill={Colors.Black[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.394 56.7963C45.03 57.9027 43.2395 59.5829 41.9421 61.4866C39.7206 64.7461 39 68.555 39 71.0493V72.5378L40.3208 73.2035C42.3219 74.212 47.5627 76 54 76C60.4373 76 65.6781 74.212 67.6792 73.2035L69 72.5378V71.0493C69 68.555 68.2794 64.7461 66.0579 61.4866C64.7605 59.5829 62.97 57.9027 60.606 56.7963C58.7665 58.1799 56.479 59 54 59C51.521 59 49.2335 58.1799 47.394 56.7963ZM45 48C45 43.0294 49.0294 39 54 39C58.9706 39 63 43.0294 63 48C63 52.9706 58.9706 57 54 57C49.0294 57 45 52.9706 45 48Z"
            fill={Colors.Blue[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.577 75.9645C55.0603 75.9877 54.5343 76 54 76C53.1477 76 52.3164 75.9687 51.5108 75.9119C51.6163 75.5562 51.7618 75.217 51.9473 74.8945C52.1816 74.5039 52.4746 74.1279 52.8262 73.7666C53.1777 73.4053 53.5928 73.0244 54.0713 72.624C54.9111 71.9404 55.5459 71.3008 55.9756 70.7051C56.4053 70.1094 56.6201 69.4307 56.6201 68.6689C56.6201 67.8682 56.3955 67.2334 55.9463 66.7646C55.4971 66.2959 54.7695 66.0615 53.7637 66.0615C52.748 66.0615 52.001 66.3105 51.5225 66.8086C51.0439 67.3066 50.7754 67.9756 50.7168 68.8154H46.9668C47.1035 66.999 47.7969 65.5781 49.0469 64.5527C50.2969 63.5176 51.9326 63 53.9541 63C54.9307 63 55.8145 63.1416 56.6055 63.4248C57.3965 63.6982 58.0703 64.084 58.627 64.582C59.1934 65.0801 59.623 65.6855 59.916 66.3984C60.2188 67.1113 60.3701 67.8975 60.3701 68.7568C60.3701 69.9385 60.1406 70.9053 59.6816 71.6572C59.2227 72.3994 58.6123 73.1123 57.8506 73.7959C57.4502 74.1572 57.0791 74.4795 56.7373 74.7627C56.3955 75.0361 56.0977 75.3193 55.8438 75.6123C55.7472 75.7282 55.6583 75.8456 55.577 75.9645Z"
            fill={Colors.Black[900]}
          />
        </WorkingGroupImageTag>
      )
    case 'content directory':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 56V51.561V46.8881V30H24.9427H27.8925H31.387H31.3871H36.7669H44.9354H54.6129V56H31.3871H31.387H23ZM56.5556 30H54.6129V46.8881V51.561V56H63V30H59.5054H56.5556Z"
            fill={Colors.Black[500]}
          />
          <rect x="25.5808" y="33.4004" width="3.22581" height="3" fill={Colors.White} />
          <rect x="25.5806" y="38.8008" width="3.22581" height="3" fill={Colors.White} />
          <rect x="25.5806" y="44.2002" width="3.22581" height="3" fill={Colors.White} />
          <rect x="25.5806" y="49.6006" width="3.22581" height="3" fill={Colors.White} />
          <rect x="57.194" y="33.4004" width="3.22581" height="3" fill={Colors.White} />
          <rect x="57.1936" y="38.8008" width="3.22581" height="3" fill={Colors.White} />
          <rect x="57.1936" y="44.2002" width="3.22581" height="3" fill={Colors.White} />
          <rect x="57.1936" y="49.6006" width="3.22581" height="3" fill={Colors.White} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37 79V73.7073V68.1359V48H39.2827H42.7487H46.8546H46.8549H53.1759H62.774H74.145V79H46.8549H46.8546H37ZM74.1451 73.7073V79H84V48H79.8938H76.4278H74.1451V68.1359V73.7073Z"
            fill={Colors.Blue[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.6129 48H62.5911H63V56H54.6129V51.561L54.6129 48ZM54.6129 48H53.0612H46.785H46.7847H42.7079H39.2665H37V56H54.6129V48Z"
            fill={Colors.Black[900]}
          />
          <path d="M66.7312 63.3L55.0646 57V69.95L66.7312 63.3Z" fill={Colors.White} />
          <rect x="40.011" y="50.7998" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="40.0106" y="58.0996" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="40.0106" y="65.3994" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="40.0106" y="72.7002" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="76.8929" y="50.7998" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="76.8925" y="58.0996" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="76.8925" y="65.3994" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="76.8925" y="72.7002" width="3.76344" height="3.5" fill={Colors.White} />
        </WorkingGroupImageTag>
      )
    case 'discovery':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.8947 59V53.7073V48.1359V28H34.1774H37.6433H41.7492H41.7495H48.0706H57.6686H69.0396V59H41.7495H41.7492H31.8947ZM69.0398 53.7073V59H78.8947V28H74.7885H71.3225H69.0398V48.1359V53.7073Z"
            fill={Colors.Black[500]}
          />
          <path d="M61.6259 43.3L49.9592 37V49.95L61.6259 43.3Z" fill={Colors.White} />
          <rect x="71.7876" y="30.7998" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="71.7871" y="38.0996" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="71.7871" y="45.4004" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="71.7871" y="52.7002" width="3.76344" height="3.5" fill={Colors.White} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58 75.7685L45.2315 63L42 66.2315L54.7685 79L58 75.7685Z"
            fill={Colors.Blue[500]}
          />
          <rect x="34.9056" y="30.7998" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="34.9053" y="38.0996" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="34.9053" y="45.3994" width="3.76344" height="3.5" fill={Colors.White} />
          <rect x="34.9053" y="52.7002" width="3.76344" height="3.5" fill={Colors.White} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49 57C49 64.1797 43.1797 70 36 70C28.8203 70 23 64.1797 23 57C23 49.8203 28.8203 44 36 44C43.1797 44 49 49.8203 49 57Z"
            fill={Colors.Blue[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.8947 53.7073V59H41.7492H41.7495H48.8471C48.9478 58.3481 49 57.6801 49 57C49 49.8203 43.1797 44 36 44C34.5654 44 33.1851 44.2324 31.8947 44.6615V48.1359V53.7073Z"
            fill={Colors.Black[900]}
          />
          <path d="M27 57C27 52.0294 31.0294 48 36 48" stroke={Colors.White} strokeWidth="2" />
        </WorkingGroupImageTag>
      )
    case 'operations':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.0728 51.6441C43.236 52.9898 41.0874 55.0333 39.5305 57.3485C36.8647 61.3128 36 65.9452 36 68.9789V70.7892L37.585 71.5988C39.9863 72.8255 46.2752 75 54 75C61.7248 75 68.0137 72.8255 70.415 71.5988L72 70.7892V68.9789C72 65.9452 71.1353 61.3128 68.4695 57.3485C66.9126 55.0333 64.764 52.9898 61.9272 51.6441C59.7198 53.3269 56.9748 54.3243 54 54.3243C51.0252 54.3243 48.2802 53.3269 46.0728 51.6441ZM43.2 40.9459C43.2 34.9007 48.0353 30 54 30C59.9647 30 64.8 34.9007 64.8 40.9459C64.8 46.9912 59.9647 51.8919 54 51.8919C48.0353 51.8919 43.2 46.9912 43.2 40.9459Z"
            fill={Colors.Blue[500]}
          />
          <path
            d="M40.7436 44.3661C40.7436 47.52 39.2884 50.3097 37.0581 52.007C39.4409 53.0063 41.2068 54.6935 42.4502 56.6324C44.3755 59.6345 45 63.1427 45 65.4402V66.8111L43.8553 67.4243C42.121 68.3532 37.579 70 32 70C26.421 70 21.879 68.3532 20.1447 67.4243L19 66.8111V65.4402C19 63.1427 19.6245 59.6345 21.5498 56.6324C22.7933 54.6934 24.5593 53.0061 26.9422 52.0069C24.712 50.3096 23.2569 47.5199 23.2569 44.3661C23.2569 39.1934 27.1714 35 32.0002 35C36.8291 35 40.7436 39.1934 40.7436 44.3661Z"
            fill={Colors.Black[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 69.7228C39.6941 69.2138 42.559 68.1184 43.8553 67.4241L45 66.811V65.44C45 63.1426 44.3755 59.6344 42.4502 56.6322C42.1112 56.1036 41.7333 55.5937 41.3148 55.1113C40.65 55.815 40.0565 56.5662 39.5305 57.3484C36.8647 61.3126 36 65.9451 36 68.9787V69.7228Z"
            fill={Colors.Black[900]}
          />
          <path
            d="M84.7436 44.3661C84.7436 47.52 83.2884 50.3097 81.0581 52.007C83.4409 53.0063 85.2068 54.6935 86.4502 56.6324C88.3755 59.6345 89 63.1427 89 65.4402V66.8111L87.8553 67.4243C86.121 68.3532 81.579 70 76 70C70.421 70 65.879 68.3532 64.1447 67.4243L63 66.8111V65.4402C63 63.1427 63.6245 59.6345 65.5498 56.6324C66.7933 54.6934 68.5593 53.0061 70.9422 52.0069C68.712 50.3096 67.2569 47.5199 67.2569 44.3661C67.2569 39.1934 71.1714 35 76.0002 35C80.8291 35 84.7436 39.1934 84.7436 44.3661Z"
            fill={Colors.Black[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M66.6852 55.1113C66.2667 55.5937 65.8888 56.1036 65.5498 56.6322C63.6245 59.6344 63 63.1426 63 65.44V66.811L64.1447 67.4241C65.441 68.1184 68.3059 69.2138 72 69.7228V68.9787C72 65.9451 71.1353 61.3126 68.4695 57.3484C67.9435 56.5662 67.35 55.815 66.6852 55.1113Z"
            fill={Colors.Black[900]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.2212 61.8113C47.077 62.3515 47 62.9166 47 63.5C47 64.084 47.077 64.6492 47.2205 65.1881C47.6074 65.1683 47.9925 65.2519 48.3331 65.4299C48.6737 65.6078 48.9565 65.8731 49.1504 66.1963C49.3442 66.5195 49.4414 66.8881 49.4313 67.2612C49.4212 67.6344 49.3042 67.9976 49.0931 68.3106C49.9394 69.1128 50.9838 69.6942 52.1278 70C52.3035 69.6672 52.5713 69.3877 52.9017 69.1925C53.2321 68.9973 53.6121 68.894 53.9997 68.894C54.3872 68.894 54.7672 68.9973 55.0976 69.1925C55.428 69.3877 55.6958 69.6672 55.8715 70C57.0155 69.6942 58.0599 69.1128 58.9062 68.3106C58.6953 67.9976 58.5784 67.6345 58.5684 67.2614C58.5584 66.8884 58.6557 66.5199 58.8495 66.1968C59.0433 65.8737 59.3261 65.6086 59.6666 65.4307C60.0071 65.2527 60.392 65.169 60.7788 65.1887C60.923 64.6485 61 64.0834 61 63.5C61 62.9166 60.923 62.3515 60.7788 61.8119C60.3919 61.8317 60.0068 61.7481 59.6662 61.5701C59.3256 61.3922 59.0428 61.1269 58.8489 60.8037C58.6551 60.4805 58.5579 60.1119 58.568 59.7388C58.5781 59.3656 58.6951 59.0024 58.9062 58.6894C58.0599 57.8872 57.0155 57.3058 55.8715 57C55.6958 57.3328 55.428 57.6123 55.0976 57.8075C54.7672 58.0027 54.3872 58.106 53.9997 58.106C53.6121 58.106 53.2321 58.0027 52.9017 57.8075C52.5713 57.6123 52.3035 57.3328 52.1278 57C50.9838 57.3058 49.9394 57.8872 49.0931 58.6894C49.3039 59.0024 49.4208 59.3654 49.4309 59.7384C49.4409 60.1114 49.3437 60.4798 49.15 60.8028C48.9562 61.1259 48.6736 61.3911 48.3332 61.5691C47.9928 61.747 47.608 61.8309 47.2212 61.8113ZM54.0003 65.6325C55.2375 65.6325 56.2405 64.6663 56.2405 63.4744C56.2405 62.2825 55.2375 61.3162 54.0003 61.3162C52.7632 61.3162 51.7602 62.2825 51.7602 63.4744C51.7602 64.6663 52.7632 65.6325 54.0003 65.6325Z"
            fill={Colors.White}
          />
        </WorkingGroupImageTag>
      )
    case 'council':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path
            d="M61.3984 31.1091C61.3984 33.5871 60.1671 35.7791 58.2799 37.1126C60.2961 37.8978 61.7903 39.2235 62.8425 40.7469C64.4716 43.1057 65 45.8622 65 47.6673V48.7445L64.0314 49.2262C62.5639 49.9561 58.7207 51.25 54 51.25C49.2793 51.25 45.4361 49.9561 43.9686 49.2262L43 48.7445V47.6673C43 45.8622 43.5284 43.1057 45.1575 40.7469C46.2097 39.2234 47.704 37.8977 49.7203 37.1125C47.8332 35.779 46.602 33.5871 46.602 31.1091C46.602 27.0448 49.9143 23.75 54.0002 23.75C58.0861 23.75 61.3984 27.0448 61.3984 31.1091Z"
            fill={Colors.Blue[500]}
          />
          <path
            d="M39.3984 44.8591C39.3984 47.3371 38.1671 49.5291 36.2799 50.8626C38.2961 51.6478 39.7903 52.9735 40.8425 54.4969C42.4716 56.8557 43 59.6122 43 61.4173V62.4945L42.0314 62.9762C40.5639 63.7061 36.7207 65 32 65C27.2793 65 23.4361 63.7061 21.9686 62.9762L21 62.4945V61.4173C21 59.6122 21.5284 56.8557 23.1575 54.4969C24.2097 52.9734 25.704 51.6477 27.7203 50.8625C25.8332 49.529 24.602 47.3371 24.602 44.8591C24.602 40.7948 27.9143 37.5 32.0002 37.5C36.0861 37.5 39.3984 40.7948 39.3984 44.8591Z"
            fill={Colors.Blue[500]}
          />
          <path
            d="M83.3984 44.8591C83.3984 47.3371 82.1671 49.5291 80.2799 50.8626C82.2961 51.6478 83.7903 52.9735 84.8425 54.4969C86.4716 56.8557 87 59.6122 87 61.4173V62.4945L86.0314 62.9762C84.5639 63.7061 80.7207 65 76 65C71.2793 65 67.4361 63.7061 65.9686 62.9762L65 62.4945V61.4173C65 59.6122 65.5284 56.8557 67.1575 54.4969C68.2097 52.9734 69.704 51.6477 71.7203 50.8625C69.8332 49.529 68.602 47.3371 68.602 44.8591C68.602 40.7948 71.9143 37.5 76.0002 37.5C80.0861 37.5 83.3984 40.7948 83.3984 44.8591Z"
            fill={Colors.Blue[500]}
          />
          <path
            d="M40.3596 54.2417L42.7155 52.5249H65.2845L67.6405 54.2417L75.606 78.9917L70.894 80.5082C56.9093 83.3147 42.5417 81.6776 37.106 80.5082L32.394 78.9917L40.3596 54.2417Z"
            fill={Colors.Black[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70.9472 64.5162C68.6333 64.073 66.8614 63.4202 65.9686 62.9762L65 62.4945V61.4173C65 59.6122 65.5284 56.8557 67.1575 54.4969C67.2501 54.3628 67.3461 54.2304 67.4455 54.0996L67.6405 54.2417L70.9472 64.5162Z"
            fill={Colors.Black[900]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.5545 54.0996C40.654 54.2304 40.7499 54.3628 40.8425 54.4969C42.4716 56.8557 43 59.6121 43 61.4173V62.4945L42.0314 62.9762C41.1387 63.4202 39.3667 64.073 37.0529 64.5162L40.3596 54.2417L40.5545 54.0996Z"
            fill={Colors.Black[900]}
          />
        </WorkingGroupImageTag>
      )
    case 'gateway':
      return (
        <WorkingGroupImageTag viewBox="0 0 108 108" fill="none" className={className}>
          <path
            d="M35.5621 45.2243C35.5621 47.6573 34.3868 49.8094 32.5854 51.1187C34.5099 51.8896 35.9362 53.1912 36.9405 54.6869C38.4956 57.0028 39 59.7091 39 61.4814V62.5391L38.0754 63.012C36.6746 63.7286 33.0061 64.999 28.5 64.999C23.9939 64.999 20.3254 63.7286 18.9246 63.012L18 62.5391V61.4814C18 59.7091 18.5044 57.0028 20.0595 54.6869C21.0638 53.1911 22.4902 51.8895 24.4149 51.1186C22.6135 49.8093 21.4382 47.6572 21.4382 45.2243C21.4382 41.2339 24.6 37.999 28.5002 37.999C32.4004 37.999 35.5621 41.2339 35.5621 45.2243Z"
            fill={Colors.Blue[500]}
          />
          <path
            d="M85.5621 45.2243C85.5621 47.6573 84.3868 49.8094 82.5854 51.1187C84.5099 51.8896 85.9362 53.1912 86.9405 54.6869C88.4956 57.0028 89 59.7091 89 61.4814V62.5391L88.0754 63.012C86.6746 63.7286 83.0061 64.999 78.5 64.999C73.9939 64.999 70.3254 63.7286 68.9246 63.012L68 62.5391V61.4814C68 59.7091 68.5044 57.0028 70.0595 54.6869C71.0638 53.1911 72.4902 51.8895 74.4149 51.1186C72.6135 49.8093 71.4382 47.6572 71.4382 45.2243C71.4382 41.2339 74.6 37.999 78.5002 37.999C82.4004 37.999 85.5621 41.2339 85.5621 45.2243Z"
            fill={Colors.Blue[500]}
          />
          <path
            d="M76.1431 56.1112C75.9356 55.2915 75.523 54.5385 74.9305 53.9209C74.0356 52.9882 72.8419 52.4747 71.5694 52.475L66.0618 52.475C64.8223 52.4749 63.6578 52.962 62.771 53.8488C62.7471 53.8727 62.7234 53.8968 62.6999 53.9213C62.1072 54.539 61.6943 55.292 61.4868 56.1118L60.6781 56.1119C60.4706 55.292 60.0581 54.5389 59.4656 53.9214C58.5705 52.9886 57.3765 52.4749 56.1034 52.4753L50.5957 52.4753C49.3229 52.4754 48.129 52.9898 47.2341 53.9215C46.6416 54.5391 46.2291 55.2921 46.0216 56.1118L45.2133 56.1118C45.0058 55.2919 44.5931 54.5388 44.0004 53.9212C43.1054 52.9886 41.9113 52.4751 40.6384 52.4753L35.1316 52.4751C32.9391 52.475 31.0909 54.0215 30.558 56.1115L28.2397 56.112L28.2401 58.5896L30.5571 58.5892C30.7645 59.4089 31.1771 60.1621 31.7697 60.7797C32.6645 61.7123 33.8582 62.2261 35.1311 62.2266L40.6377 62.2268C41.8772 62.2269 43.0419 61.74 43.9288 60.8529C43.9527 60.829 43.9766 60.8046 44 60.7801C44.5929 60.1623 45.0056 59.4091 45.2133 58.5892L46.0216 58.5892C46.229 59.4092 46.6417 60.1623 47.2343 60.78C48.1292 61.7128 49.3232 62.2265 50.5959 62.2265L56.1037 62.2265C57.3432 62.2265 58.5077 61.7395 59.3944 60.8527C59.4182 60.8289 59.442 60.8046 59.4654 60.7801C60.0584 60.1623 60.4711 59.409 60.6784 58.5894L61.4866 58.5893C61.6941 59.4092 62.107 60.1623 62.6999 60.7799C63.5951 61.7125 64.7891 62.226 66.0614 62.2257L71.5687 62.2262C72.8463 62.2258 74.007 61.7006 74.8588 60.8488C75.4688 60.2386 75.9204 59.461 76.1427 58.5886L78.462 58.5887L78.4622 56.1111L76.1431 56.1112ZM42.567 56.1115L40.4773 56.1112L40.4771 58.5889L42.5671 58.589C42.4694 58.7606 42.3509 58.9204 42.2123 59.0646C41.7925 59.5068 41.2296 59.7491 40.6378 59.7491L35.1314 59.7488C34.5399 59.7487 33.9807 59.5055 33.5574 59.0643C33.419 58.92 33.3004 58.7603 33.2029 58.5886L33.927 58.5885L33.9266 56.1109L33.2058 56.111C33.3127 55.9233 33.4425 55.752 33.592 55.6025C33.9948 55.1997 34.5366 54.9526 35.1314 54.9526L40.6386 54.9529C41.2303 54.9527 41.7893 55.1956 42.2127 55.6366C42.3511 55.7808 42.4695 55.9402 42.567 56.1115ZM58.0322 56.112L55.9418 56.1122L55.9421 58.5898L58.0322 58.5897C57.9347 58.761 57.8163 58.9206 57.6779 59.0647C57.2532 59.5061 56.6953 59.7489 56.1038 59.749L50.596 59.7489C50.0046 59.7489 49.4455 59.506 49.0223 59.0647C48.884 58.9205 48.7654 58.7609 48.6679 58.5895L50.7575 58.5896L50.7577 56.112L48.6677 56.1119C48.7652 55.9405 48.8837 55.7809 49.0219 55.6369C49.0332 55.6251 49.0446 55.6134 49.0561 55.6019C49.475 55.183 50.0199 54.9529 50.5957 54.9529L56.1033 54.9529L56.1037 54.9529C56.6954 54.9527 57.2544 55.1956 57.6777 55.6367C57.8161 55.7809 57.9347 55.9406 58.0322 56.112ZM73.4968 56.111L72.7754 56.111V58.5887L73.4958 58.5887C73.101 59.2832 72.3848 59.7484 71.5687 59.7487L66.0615 59.7483C65.4701 59.7484 64.911 59.5055 64.4875 59.0644C64.3492 58.9202 64.2306 58.7606 64.133 58.5893L66.2234 58.5891L66.2232 56.1115L64.1334 56.1117C64.2309 55.9405 64.3492 55.7811 64.4875 55.637C64.4988 55.6253 64.5101 55.6137 64.5217 55.6021C64.9408 55.183 65.4858 54.9528 66.0618 54.9527H71.5694L71.5698 54.9528C72.161 54.9527 72.7196 55.1953 73.1427 55.6364C73.2809 55.7803 73.3994 55.9398 73.4968 56.111Z"
            fill={Colors.Black[500]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.9235 52.4795C32.8228 52.5737 31.0739 54.0877 30.5579 56.1113L28.2396 56.1118L28.2401 58.5894L30.5571 58.589C30.7645 59.4087 31.177 60.1619 31.7696 60.7795C32.6645 61.7121 33.8581 62.2259 35.131 62.2264L39 62.2266V61.4814C39 60.9708 38.9581 60.3827 38.8613 59.7488L35.1313 59.7486C34.5398 59.7485 33.9807 59.5053 33.5574 59.0641C33.419 58.9198 33.3004 58.7601 33.2029 58.5884L33.927 58.5883L33.9266 56.1107L33.2058 56.1108C33.3127 55.9231 33.4424 55.7518 33.5919 55.6023C33.9948 55.1995 34.5366 54.9523 35.1314 54.9524L37.1133 54.9525C37.0572 54.8634 36.9996 54.7748 36.9405 54.6868C36.3962 53.8762 35.7279 53.1225 34.9235 52.4795Z"
            fill={Colors.Black[900]}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68 62.2252L71.5687 62.2255C72.8463 62.2251 74.007 61.6999 74.8588 60.8481C75.4688 60.238 75.9204 59.4603 76.1427 58.588L78.462 58.5881L78.4622 56.1104L76.1431 56.1105C75.9356 55.2908 75.523 54.5378 74.9305 53.9203C74.1496 53.1064 73.1413 52.6117 72.0516 52.499C71.2583 53.1377 70.5982 53.8841 70.0595 54.6864C70.0004 54.7744 69.9428 54.863 69.8867 54.952H71.5694L71.5698 54.9521C72.161 54.952 72.7196 55.1947 73.1427 55.6358C73.2809 55.7797 73.3994 55.9391 73.4968 56.1104H72.7754L72.7754 58.588L73.4957 58.5881C73.101 59.2825 72.3848 59.7477 71.5687 59.7481L68.1387 59.7478C68.0419 60.3819 68 60.9702 68 61.4809V62.2252Z"
            fill={Colors.Black[900]}
          />
        </WorkingGroupImageTag>
      )
    default:
      return (
        <WorkingGroupImageTag viewBox="0 0 40 40" fill="none" className={className}>
          <rect fill={Colors.Blue[50]} x="0" y="0" width="40" height="40" />
          <rect
            x="0"
            y="19.5"
            transform="matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)"
            fill={Colors.Blue[100]}
            width="40"
            height="1"
          />
          <rect
            x="19.5"
            y="0"
            transform="matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)"
            fill={Colors.Blue[100]}
            width="1"
            height="40"
          />
          <rect x="11" y="11" fill={Colors.Blue[50]} width="18" height="18" />
          <path
            fill={Colors.Blue[500]}
            d="M25,12v7.6500244c0,0.6799927-0.0700073,1.3199463-0.210022,1.9499512 C25.9299927,20.25,26.5599976,18.5,26.5599976,16.6900024V12H25z M14.3099976,25.3800049l-0.3200073,1.1099854 l-0.1499634,0.5300293h0.3099976c0.0899658,0,0.1599731,0,0.25-0.0200195h0.0099487 c0.0300293,0,0.0599976-0.0200195,0.0900269-0.0200195c0.0800171,0,0.1799927-0.0199585,0.2700195-0.039978 c0.0700073-0.0200195,0.1399536-0.039978,0.2099609-0.0599976H15c0.0700073-0.0200195,0.1400146-0.0300293,0.210022-0.0599976 h0.0099487c0.0900269-0.0300293,0.1600342-0.0599976,0.2300415-0.0900269 c0.039978-0.0100098,0.0700073-0.0299683,0.1199951-0.0499878c0.0200195-0.0100098,0.0499878-0.0299683,0.0999756-0.039978 c0.0400391-0.0100098,0.0700073-0.0300293,0.1000366-0.0499878c0.1399536-0.0700073,0.2799683-0.1600342,0.4199829-0.25 l0.1699829-0.1400146c0.0700073-0.0400391,0.1300049-0.0900269,0.1900024-0.1400146l0.1699829-0.1699829 c0.0500488-0.0400391,0.1000366-0.0900269,0.1400146-0.1400146l0.0599976-0.0599976 c0.0400391-0.0300293,0.0700073-0.0700073,0.1100464-0.1199951l0.0499878-0.039978 c0.039978-0.0500488,0.0700073-0.0900269,0.1099854-0.1400146v-0.0100098H14.3099976z M22.1900024,12v11.0300293 c0,0.0599976-0.0100098,0.0999756-0.0100098,0.1599731V23.25c-0.0100098,0.0900269-0.0100098,0.1599731-0.0299683,0.2399902 c0,0.0400391-0.0100098,0.0700073-0.0100098,0.1199951c0,0.0300293-0.0200195,0.0700073-0.0200195,0.1199951 c0,0.0599976-0.0100098,0.1300049-0.0299683,0.210022C22.0800171,24,22.0800171,24.0599976,22.0700073,24.1199951v0.039978 C22.0499878,24.210022,22.0499878,24.25,22.039978,24.2999878l-0.0499878,0.1799927L22.25,24.1599731 C22.2800293,24.0999756,22.3200073,24.0599976,22.3599854,24c0.0499878-0.0499878,0.0800171-0.0900269,0.1199951-0.1500244 c0.0100098-0.0199585,0.0400391-0.039978,0.0599976-0.0799561c0.0400391-0.0400391,0.0700073-0.0900269,0.1000366-0.1500244 c0.039978-0.0599976,0.0799561-0.1300049,0.1199951-0.210022c0.0200195-0.0299683,0.0499878-0.0699463,0.0700073-0.0999756 c0.0299683-0.0499878,0.0499878-0.0999756,0.0799561-0.1500244c0.0100098-0.0499878,0.0400391-0.0699463,0.0500488-0.1199951 C22.9899902,23,23.0100098,22.9400024,23.0300293,22.8900146c0.0299683-0.0499878,0.0599976-0.1000366,0.0799561-0.1500244 c0.0100098-0.0200195,0.0200195-0.0499878,0.0300293-0.0800171c0.0199585-0.0199585,0.0299683-0.0499878,0.039978-0.0699463 c0.0100098-0.0500488,0.039978-0.0900269,0.0499878-0.1500244C23.25,22.3900146,23.2800293,22.3499756,23.289978,22.289978 c0.0200195-0.0499878,0.0400391-0.0899658,0.0599976-0.1499634c0.0200195-0.0499878,0.0400391-0.1099854,0.0599976-0.1700439 c0.0100098-0.039978,0.0200195-0.0999756,0.0400391-0.1499634c0.0599976-0.1699829,0.0999756-0.3699951,0.1400146-0.5499878 v-0.0300293c0.0099487-0.0499878,0.0099487-0.0899658,0.0299683-0.1300049v-0.0199585 c0.0100098-0.0500488,0.0100098-0.1100464,0.0300293-0.1700439c0.0099487-0.039978,0.0099487-0.0999756,0.0299683-0.1599731 V20.710022c0-0.0400391,0.0100098-0.1000366,0.0100098-0.1500244c0-0.0599976,0.0100098-0.1199951,0.0100098-0.1699829 c0-0.0599976,0.0199585-0.1300049,0.0199585-0.1900024c0.0100098-0.0499878,0.0100098-0.1099854,0.0100098-0.1699829 C23.75,19.9099731,23.75,19.7700195,23.75,19.6500244V12H22.1900024z"
          />
          <path
            fill={Colors.Blue[500]}
            d="M20.9393997,12v10.6047001c0,0.2551994-0.0144997,0.4951-0.0289993,0.7350006 c-0.014101,0.2068996-0.0424995,0.4124985-0.085001,0.615099c-0.0854988,0.4803009-0.2139988,0.9454002-0.3850002,1.3800011 c-0.1042995,0.2719002-0.223299,0.5373993-0.3563995,0.7950001c-0.3976002,0.7467995-0.9078999,1.420599-1.5109005,1.9951 C17.2926998,29.3341007,15.6323996,30.0021,13.9118996,30H13l0.4705-1.6352005h0.4559002 c1.2841997,0.0027008,2.5274-0.4758987,3.5068007-1.3500996c0.5119991-0.4451008,0.9376984-0.9899998,1.2538986-1.6047001 c0.0855007-0.1499004,0.1570015-0.3150997,0.2280006-0.480299c0.114399-0.2694016,0.1998997-0.5398006,0.2709007-0.8250008 c0.0879993-0.3174992,0.1406994-0.6445999,0.1569996-0.9748993c0.0144997-0.1647015,0.0144997-0.3299007,0.0144997-0.4951V12 H20.9393997z"
          />
          <path
            fill={Colors.Blue[500]}
            d="M18.1315994,22.4400005v0.1646996c0,0.1352005,0,0.2703991-0.0144997,0.3903008 c-0.0284996,0.2546997-0.0569992,0.5098991-0.1280003,0.7497997c-0.0289993,0.1198997-0.0574989,0.2398987-0.1000004,0.3450985 H14.6819l0.4703999-1.6351986h2.9792995v-0.0151997V22.4400005z"
          />
        </WorkingGroupImageTag>
      )
  }
}

export const WorkingGroupImageTag = styled.svg`
  display: flex;
  position: absolute;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  transform: scale(0.9);
  object-fit: cover;
  background-color: ${Colors.Black[25]};
  transition: ${Transitions.all};
`