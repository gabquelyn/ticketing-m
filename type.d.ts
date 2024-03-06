type inputEvent = React.ChangeEvent<HTMLInputElement>;
type InputHandler = (e: inputEvent) => void;

interface Names { 
  firstname: string,
  lastname: string
}
interface EmailSignUpDetails extends Names {
  email: string;
  password: string;
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

interface DummyEvent {
  name: string;
  image: string;
  state: string;
}

type  EventType = "trending" | "popular" | "recent" | "presale" | "news"
