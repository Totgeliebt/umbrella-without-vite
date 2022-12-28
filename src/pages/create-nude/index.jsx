import CreateNudeContainer from "./CreateNudeContainer";
import CreateNudeComponent from "./CreateNudeComponent";

export const CreateNude = (injectedProps) => {
  return (
    <CreateNudeContainer {...injectedProps}>
      {(props) => <CreateNudeComponent {...props} {...injectedProps} />}
    </CreateNudeContainer>
  );
};
