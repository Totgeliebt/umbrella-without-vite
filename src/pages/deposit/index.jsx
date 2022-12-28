import DepositContainer from "./DepositContainer";
import DepositComponent from "./DepositComponent";

export const Deposit = (injectedProps) => {
  return (
    <DepositContainer {...injectedProps}>
      {(props) => <DepositComponent {...props} {...injectedProps} />}
    </DepositContainer>
  );
};
