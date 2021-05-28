import React from 'react'

import { BadgeViolet } from '@/common/components/BadgeViolet'
import { TextInlineBig, TokenValue } from '@/common/components/typography'
import { Fraction } from '@/common/components/typography/Fraction'
import { Subscription } from '@/common/components/typography/Subscription'
import { relativeTime } from '@/common/model/relativeTime'
import {
  OACItemInfo,
  OACItemInfoTop,
  OACItemSummary,
  OACItemTitle,
  OACSubscriptionWide,
  OACWrap,
  OpenItemSummaryColumn,
} from '@/working-groups/components/OpeningAndApplicationsComponents/OACStyledComponents'
import { WorkingGroupOpening } from '@/working-groups/types'

export type Props = {
  opening: WorkingGroupOpening
}

export const OpeningListItem = ({ opening }: Props) => (
  <OACWrap>
    <OACItemInfo>
      <OACItemInfoTop>
        <Subscription>ID: {opening.id}</Subscription>
        <Subscription>Ends {relativeTime(opening.expectedEnding)}</Subscription>
        {opening.type === 'LEADER' ? <BadgeViolet>LEAD</BadgeViolet> : null}
      </OACItemInfoTop>
      <OACItemTitle>{opening.title}</OACItemTitle>
    </OACItemInfo>
    <OACItemSummary>
      <OpenItemSummaryColumn>
        <TextInlineBig>
          <TokenValue value={opening.reward.value} />
        </TextInlineBig>
        <OACSubscriptionWide>Reward per 3600 blocks.</OACSubscriptionWide>
      </OpenItemSummaryColumn>
      <OpenItemSummaryColumn>
        <Fraction numerator={opening.applicants.current} denominator={opening.applicants.total} sameSize />
        <Subscription>Applications</Subscription>
      </OpenItemSummaryColumn>
      <OpenItemSummaryColumn>
        <Fraction numerator={opening.hiring.current} denominator={opening.hiring.total} sameSize />
        <Subscription>Hiring</Subscription>
      </OpenItemSummaryColumn>
    </OACItemSummary>
  </OACWrap>
)
