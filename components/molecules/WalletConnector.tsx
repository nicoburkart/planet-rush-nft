import { useAccount, useConnect } from 'wagmi';
import { Paragraph, SubTitle } from '../atoms/Typography';
import { DDMItem, DropDownMenu } from './DropDownMenu';

type Props = {
  className?: string;
};

export const WalletConnector = ({ className }: Props) => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  let ddmItem: DDMItem[] = [];

  connectData.connectors.forEach((connector) => {
    ddmItem.push({ label: connector.name, action: () => connect(connector) });
  });

  if (accountData) {
    return (
      <DropDownMenu
        className={className}
        transparentBackground={true}
        items={[
          {
            label: 'logout',
            action: () => {
              disconnect();
            },
          },
        ]}
        label={
          accountData.ens?.name
            ? `${accountData.ens?.name}`
            : accountData.address.substring(0, 5) +
              '...' +
              accountData.address.substring(accountData.address.length - 3)
        }
      ></DropDownMenu>
    );
  } else {
    return (
      <DropDownMenu
        className={className}
        label="Connect Wallet"
        items={ddmItem}
      ></DropDownMenu>
    );
  }
};
