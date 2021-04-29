import React, { Reducer, useCallback, useReducer, useState } from 'react'

import { ButtonPrimary } from '../../../common/components/buttons'
import { Arrow } from '../../../common/components/icons'
import { Modal, ModalFooter, ModalHeader } from '../../../common/components/Modal'
import { Stepper } from '../../../common/components/Stepper'
import {
  StepDescriptionColumn,
  StepperBody,
  StepperModalBody,
  StepperModalWrapper,
} from '../../../common/components/StepperModal'
import { useModal } from '../../../common/hooks/useModal'
import { useMyMemberships } from '../../../memberships/hooks/useMyMemberships'
import { OpeningFormPreview } from '../../components/OpeningFormPreview'
import { useOpeningQuestions } from '../../hooks/useOpeningQuestions'

import { ApplyForRoleModalCall, OpeningParams } from '.'
import { ApplicationStep } from './ApplicationStep'
import { StakeStep, StakeStepForm } from './StakeStep'

const steps = [{ title: 'Stake' }, { title: 'Form' }, { title: 'Submit application' }]

interface Props {
  onSubmit: (params: OpeningParams) => void
}

type ActionStepInfo = {
  type: 'STEP'
  data: {
    isValid: boolean
    stepData: any
    step: number
  }
}

const stepsReducer: Reducer<Record<number, { data: any; isValid: boolean }>, ActionStepInfo> = (state, action) => {
  const step = action.data.step
  const data = action.data.stepData
  const isValid = action.data.isValid

  return {
    ...state,
    [step]: {
      data,
      isValid,
    },
  }
}

export const ApplyForRolePrepareModal = ({ onSubmit }: Props) => {
  const { active } = useMyMemberships()
  const {
    hideModal,
    modalData: { opening },
  } = useModal<ApplyForRoleModalCall>()
  const [step, setStep] = useState(0)
  const { questions } = useOpeningQuestions({ id: opening.id })
  const [state, dispatch] = useReducer(stepsReducer, {
    0: { isValid: false, data: undefined },
    1: { isValid: false, data: undefined },
  })

  const nextStep = useCallback(() => {
    if (step >= 1) {
      const stakeForm = state[0].data as StakeStepForm
      onSubmit({
        opening_id: opening.id,
        member_id: active?.id,
        role_account_id: active?.controllerAccount,
        reward_account_id: active?.rootAccount,
        description: JSON.stringify(state[1].data), // TODO This should be applicaiton metedata
        stake_parameters: {
          stake: stakeForm.amount,
          stake_account_id: stakeForm.account?.address,
        },
      })
    } else {
      setStep((step) => step + 1)
    }
  }, [step, JSON.stringify(state)])

  const onStakeStepChange = (isValid: boolean, fields: StakeStepForm) => {
    dispatch({
      type: 'STEP',
      data: {
        isValid: isValid,
        stepData: fields,
        step: 0,
      },
    })
  }
  const onApplicationStepChange = (isValid: boolean, answers: Record<number, string>) => {
    dispatch({
      type: 'STEP',
      data: {
        isValid: isValid,
        stepData: answers,
        step: 1,
      },
    })
  }

  const isValid = state[step].isValid

  return (
    <Modal onClose={hideModal} modalSize="l" modalHeight="xl">
      <ModalHeader onClick={hideModal} title="Applying for role" />
      <StepperModalBody>
        <StepperModalWrapper>
          <Stepper steps={steps} active={step} />
          <StepDescriptionColumn>
            <OpeningFormPreview opening={opening} />
          </StepDescriptionColumn>
          <StepperBody>
            {step === 0 && <StakeStep opening={opening} onChange={onStakeStepChange} />}
            {step === 1 && <ApplicationStep questions={questions} onChange={onApplicationStepChange} />}
          </StepperBody>
        </StepperModalWrapper>
      </StepperModalBody>
      <ModalFooter>
        <ButtonPrimary disabled={!isValid} onClick={nextStep} size="medium">
          Next step
          <Arrow direction="right" />
        </ButtonPrimary>
      </ModalFooter>
    </Modal>
  )
}