type inputEvent = React.ChangeEvent<HTMLInputElement>;
type InputHandler = (e: inputEvent) => void;
interface EmailSignUpDetails {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  country: string;
  postal: string;
}
interface EmailSignInDetails {
  email: string;
  password: string;
}

interface AnonymousFnc {
  (): void;
}
