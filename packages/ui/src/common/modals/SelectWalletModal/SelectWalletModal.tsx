import { getAllWallets, Wallet } from 'injectweb3-connect'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { useMyAccounts } from '@/accounts/hooks/useMyAccounts'
import { ButtonPrimary } from '@/common/components/buttons'
import { List, ListItem } from '@/common/components/List'
import { Modal, ModalFooter, ModalFooterGroup, ModalHeader, ScrolledModalBody } from '@/common/components/Modal'
import { TextBig, TextMedium } from '@/common/components/typography'
import { useModal } from '@/common/hooks/useModal'
import { ConnectWalletItem } from '@/common/modals/OnBoardingModal/components/ConnectWalletItem'
import { RedBox } from '@/common/modals/OnBoardingModal/OnBoardingPlugin'

export const SelectWalletModal = () => {
  const { hideModal } = useModal()
  const [selectedWallet, setSelectedWallet] = useState<Wallet>()
  const { setWallet, error, wallet: contextWallet } = useMyAccounts()
  const handleClick = useCallback(() => {
    if (!selectedWallet?.installed && selectedWallet?.installUrl) {
      window.open(selectedWallet.installUrl, '_blank')
    } else if (selectedWallet?.installed) {
      setWallet?.(selectedWallet)
    }
  }, [selectedWallet])

  useEffect(() => {
    if (error === 'APP_REJECTED') {
      setSelectedWallet(undefined)
    }

    if (contextWallet && contextWallet.extension && !error) {
      hideModal()
    }
  }, [error, contextWallet?.extension])

  return (
    <Modal onClose={hideModal} modalSize="s">
      <ModalHeader title="Select Wallet" onClick={hideModal} />
      <ModalContainer>
        <List>
          <ListItem>
            {getAllWallets().map((wallet) => (
              <ConnectWalletItem
                wallet={wallet}
                onClick={() => setSelectedWallet(wallet)}
                selected={selectedWallet?.extensionName === wallet.extensionName}
              />
            ))}
          </ListItem>
        </List>
        {error === 'APP_REJECTED' && (
          <RedBox>
            <TextBig bold value>
              Extension is blocking Pioneer from access
            </TextBig>
            <TextMedium lighter>
              Change the settings of the wallet browser plugin to allow it access to dao.joystream.org and reload the
              page
            </TextMedium>
          </RedBox>
        )}
      </ModalContainer>
      <ModalFooter>
        <ModalFooterGroup>
          <ButtonPrimary disabled={!selectedWallet} size="medium" onClick={handleClick}>
            Select Wallet
          </ButtonPrimary>
        </ModalFooterGroup>
      </ModalFooter>
    </Modal>
  )
}

const ModalContainer = styled(ScrolledModalBody)`
  padding: 20px 30px;
  max-height: 500px;

  > div {
    width: 100%;
    margin: 20px 0 0 0;
  }
`