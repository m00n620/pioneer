import { SubmittableExtrinsic } from '@polkadot/api/types'
import { BalanceOf } from '@polkadot/types/interfaces/runtime'
import { ISubmittableResult } from '@polkadot/types/types'
import React, { useEffect, useState } from 'react'

import { SelectAccount, SelectedAccount } from '../../../accounts/components/SelectAccount'
import { useAccounts } from '../../../accounts/hooks/useAccounts'
import { useBalance } from '../../../accounts/hooks/useBalance'
import { accountOrNamed } from '../../../accounts/model/accountOrNamed'
import { Account } from '../../../accounts/types'
import { ButtonPrimary } from '../../../common/components/buttons'
import { InputComponent } from '../../../common/components/forms'
import { ModalBody, ModalFooter, Row, TransactionInfoContainer } from '../../../common/components/Modal'
import { TransactionInfo } from '../../../common/components/TransactionInfo'
import { TransactionModal } from '../../../common/components/TransactionModal'
import { TextMedium, TokenValue } from '../../../common/components/typography'
import { useSignAndSendTransaction } from '../../../common/hooks/useSignAndSendTransaction'
import { onTransactionDone } from '../../../common/types'
import { getMessage } from '../utils'

import { FormFields } from './BuyMembershipFormModal'

interface SignProps {
  onClose: () => void
  membershipPrice?: BalanceOf
  formData: FormFields
  onDone: onTransactionDone
  transaction: SubmittableExtrinsic<'rxjs', ISubmittableResult> | undefined
  initialSigner?: Account
}

export const BuyMembershipSignModal = ({
  onClose,
  membershipPrice,
  formData,
  onDone,
  transaction,
  initialSigner,
}: SignProps) => {
  const { allAccounts } = useAccounts()
  const [from, setFrom] = useState(
    initialSigner ?? accountOrNamed(allAccounts, formData.invitor?.controllerAccount || '', 'Controller account')
  )
  const fromAddress = from.address
  const { paymentInfo, send, status } = useSignAndSendTransaction({ transaction, signer: fromAddress, onDone })
  const [hasFunds, setHasFunds] = useState(false)
  const balance = useBalance(fromAddress)

  useEffect(() => {
    if (balance?.transferable && paymentInfo?.partialFee && membershipPrice) {
      const requiredBalance = paymentInfo.partialFee.add(membershipPrice)
      const hasFunds = balance.transferable.gte(requiredBalance)
      setHasFunds(hasFunds)
    }
  }, [fromAddress, balance])

  const signDisabled = status !== 'READY' || !hasFunds

  return (
    <TransactionModal status={status} onClose={onClose}>
      <ModalBody>
        <TextMedium>You intend to create a new membership.</TextMedium>
        <TextMedium>
          The creation of the new membership costs <TokenValue value={membershipPrice?.toBn()} />.
        </TextMedium>
        <TextMedium>
          Fees of <TokenValue value={paymentInfo?.partialFee.toBn()} /> will be applied to the transaction.
        </TextMedium>
        <Row>
          <InputComponent
            label="Sending from account"
            inputSize="l"
            validation={hasFunds ? undefined : 'invalid'}
            message={hasFunds ? undefined : getMessage(paymentInfo?.partialFee)}
          >
            {initialSigner ? (
              <SelectAccount selected={from} onChange={(account) => setFrom(account)} />
            ) : (
              <SelectedAccount account={from} />
            )}
          </InputComponent>
        </Row>
      </ModalBody>
      <ModalFooter>
        <TransactionInfoContainer>
          <TransactionInfo
            title="Creation fee:"
            value={membershipPrice?.toBn()}
            helperText={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
          />
          <TransactionInfo
            title="Transaction fee:"
            value={paymentInfo?.partialFee.toBn()}
            helperText={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
          />
        </TransactionInfoContainer>
        <ButtonPrimary size="medium" onClick={send} disabled={signDisabled}>
          Sign and create a member
        </ButtonPrimary>
      </ModalFooter>
    </TransactionModal>
  )
}