import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import BN from 'bn.js'
import React, { useEffect, useState } from 'react'
import { ActorRef } from 'xstate'

import { SelectedAccount } from '@/accounts/components/SelectAccount'
import { useBalance } from '@/accounts/hooks/useBalance'
import { useMyAccounts } from '@/accounts/hooks/useMyAccounts'
import { accountOrNamed } from '@/accounts/model/accountOrNamed'
import { ModalBody, ModalTransactionFooter, Row } from '@/common/components/Modal'
import { TransactionInfo } from '@/common/components/TransactionInfo'
import { TextMedium, TokenValue } from '@/common/components/typography'
import { useSignAndSendTransaction } from '@/common/hooks/useSignAndSendTransaction'
import { TransactionModal, TransactionStep } from '@/common/modals/TransactionModal'
import { Address } from '@/common/types'

interface SignTransactionModalProps {
  onClose: () => void
  transaction: SubmittableExtrinsic<'rxjs', ISubmittableResult> | undefined
  signer: Address
  stake: BN
  service: ActorRef<any>
  steps: TransactionStep[]
}

export const SignTransactionModal = ({
  onClose,
  transaction,
  signer,
  stake,
  service,
  steps,
}: SignTransactionModalProps) => {
  const { allAccounts } = useMyAccounts()
  const signerAccount = accountOrNamed(allAccounts, signer, 'ControllerAccount')
  const { paymentInfo, sign, isReady } = useSignAndSendTransaction({ transaction, signer, service })
  const [hasFunds, setHasFunds] = useState(false)
  const balance = useBalance(signer)
  const transferable = balance?.transferable
  const partialFee = paymentInfo?.partialFee

  useEffect(() => {
    if (transferable && partialFee) {
      setHasFunds(transferable.gte(partialFee))
    }
  }, [partialFee?.toString(), transferable?.toString()])

  const signDisabled = !isReady || !hasFunds

  return (
    <TransactionModal onClose={onClose} service={service} useMultiTransaction={{ steps, active: 1 }}>
      <ModalBody>
        <TextMedium>You intend to create a proposal.</TextMedium>
        <TextMedium>
          Also you intend to stake <TokenValue value={stake} />.
        </TextMedium>
        <TextMedium>
          Fees of <TokenValue value={partialFee?.toBn()} /> will be applied to the transaction.
        </TextMedium>
        <Row>
          <SelectedAccount account={signerAccount} />
        </Row>
      </ModalBody>
      <ModalTransactionFooter
        transactionFee={partialFee?.toBn()}
        next={{ disabled: signDisabled, label: 'Sign transacion and Create', onClick: sign }}
      >
        <TransactionInfo
          title="Stake:"
          value={stake}
          tooltipText={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
        />
      </ModalTransactionFooter>
    </TransactionModal>
  )
}
