import React, { useRef, useState } from "react";

import S from './style.module.css';
import classNames from "classnames";
import { chains, chainsData } from "../../constants";
import { MetamaskLogo } from "../../icons";
import {useOutsideAlerter} from "../../hooks/useOutsideAlerter";

const getChainDataById = (chainId) => {
  switch (chainId) {
    case 56:
      return chainsData.bsc
    case 137:
      return chainsData.polygon;
    case 43114:
      return chainsData.avalanche;
    case 42161:
      return chainsData.arbitrum;
    case 250:
      return chainsData.fantom;
    case 10:
      return chainsData.optimism;
    case 1:
      return chainsData.ethereum;
    default:
      return null;
  }
};

export const NetworksDropdown = ({ children }) => {
  const containerRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);

  useOutsideAlerter(containerRef, () => setIsOpened(false));

  const handleAddNetwork = async (id) => {
    const chainData = getChainDataById(+id);
    console.log(id, chainData);

    await window?.ethereum?.request({
      jsonrpc: "2.0",
      method: "wallet_addEthereumChain",
      params: [chainData],
      id: 0,
    });
  }

  return (
    <div className={classNames(S.Root, 'col-6')} ref={containerRef}>
      <button className={S.Trigger} onClick={() => setIsOpened((prevState) => !prevState)}>
        {children}
      </button>
      <div className={classNames(S.Dropdown, { [S.Opened]: isOpened })}>
        <ul className={S.List}>
          {chains.map((item) => (
            <li className={S.Item}>
              <div className={S.Wrapper}>
                {item.icon}
                <span className={S.Text}>{item.label}</span>
              </div>
              <button type="button" className={S.Button} onClick={() => handleAddNetwork(item.value)}>
                Add network
                <MetamaskLogo />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
