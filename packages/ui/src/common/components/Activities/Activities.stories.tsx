import { Meta, Story } from '@storybook/react'
import BN from 'bn.js'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { ModalContext } from '../../providers/modal/context'
import { TemplateBlock } from '../storybookParts/previewStyles'

import { Activities, ActivitiesProps } from './Activities'

export default {
  title: 'Common/Activities',
  component: Activities,
} as Meta

const Template: Story<ActivitiesProps> = (args) => (
  <MemoryRouter>
    <ModalContext.Provider
      value={{
        showModal: () => null,
        hideModal: () => null,
        modal: '',
        modalData: {},
      }}
    >
      <TemplateBlock>
        <Activities {...args} />
      </TemplateBlock>
    </ModalContext.Provider>
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  activities: [
    {
      id: '1',
      createdAt: '2021-03-09T10:28:04.155Z',
      eventType: 'AppliedOnOpeningEvent',
      member: {
        handle: 'xXproGamerDarknessXx',
        id: '1',
      },
      opening: {
        title: 'Forum Worker',
        id: '2',
        type: 'REGULAR',
        groupName: 'forum',
      },
    },
    {
      id: '2',
      createdAt: '2021-05-09T10:28:04.155Z',
      eventType: 'ApplicationWithdrawnEvent',
      member: {
        handle: 'andy00',
        id: '1',
      },
      opening: {
        title: 'Forum Worker',
        id: '2',
        type: 'REGULAR',
        groupName: 'forum',
      },
    },
    {
      id: '3',
      createdAt: '2021-05-19T10:28:04.155Z',
      eventType: 'BudgetSpendingEvent',
      amount: new BN('10000'),
      groupName: 'Forum',
    },
    {
      id: '4',
      createdAt: '2021-05-20T10:28:04.155Z',
      eventType: 'BudgetSetEvent',
      groupName: 'Forum',
      newBudget: new BN(100000),
    },
    {
      id: '5',
      createdAt: '2021-05-23T10:28:04.155Z',
      eventType: 'LeaderSetEvent',
      member: {
        id: '3',
        handle: 'Kyle_1994',
      },
      groupName: 'storage',
    },
    {
      id: '6',
      createdAt: '2021-05-24T10:28:04.155Z',
      eventType: 'StatusTextChangedEvent',
      groupName: 'storage',
    },
    {
      id: '7',
      createdAt: '2021-05-25T10:28:04.155Z',
      eventType: 'OpeningAddedEvent',
      opening: {
        id: '3',
        title: 'Forum Working Group Regular',
        type: 'REGULAR',
        groupName: 'forum',
      },
    },
    {
      id: '8',
      createdAt: '2021-05-25T10:28:04.155Z',
      eventType: 'OpeningCanceledEvent',
      opening: {
        id: '3',
        title: 'Forum Working Group Regular',
        type: 'REGULAR',
        groupName: 'forum',
      },
    },
    {
      id: '9',
      createdAt: '2021-05-26T19:28:04.155Z',
      eventType: 'StakeSlashedEvent',
      groupName: 'Forum',
      member: {
        id: '6',
        handle: 'stefan0',
      },
    },
    {
      id: '10',
      createdAt: '2021-05-26T19:28:04.155Z',
      eventType: 'StakeIncreasedEvent',
      member: {
        id: '6',
        handle: 'stefan0',
      },
      amount: new BN(1000),
    },
    {
      id: '11',
      createdAt: '2021-05-26T19:28:04.155Z',
      eventType: 'StakeDecreasedEvent',
      member: {
        id: '6',
        handle: 'stefan0',
      },
      amount: new BN(1000),
    },
    {
      id: '12',
      createdAt: '2021-05-26T19:28:04.155Z',
      eventType: 'WorkerExitedEvent',
      member: {
        id: '7',
        handle: 'mr_guy',
      },
    },
    {
      id: '13',
      createdAt: '2021-05-25T10:28:04.155Z',
      eventType: 'OpeningAddedEvent',
      opening: {
        id: '3',
        title: 'Forum Working Group Leader',
        type: 'LEADER',
        groupName: 'forum',
      },
    },
    {
      id: '14',
      createdAt: '2021-05-25T10:28:04.155Z',
      eventType: 'OpeningCanceledEvent',
      opening: {
        id: '3',
        title: 'Forum Working Group Leader',
        type: 'LEADER',
        groupName: 'forum',
      },
    },
    {
      id: '15',
      createdAt: '2021-05-25T10:28:04.155Z',
      eventType: 'WorkerStartedLeavingEvent',
      member: {
        id: '8',
        handle: 'johann',
      },
    },
  ],
}