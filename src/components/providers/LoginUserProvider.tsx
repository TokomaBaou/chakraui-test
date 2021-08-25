import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { User } from "../../types/api/user";

//useStateの更新関数　Dispatch,setStateAction
export type LoginUserContextType = {
  loginUser: User | null;
  //Contextで更新したい
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};
//asで矯正認識させる
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

//Providerを書いていく
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return (
    //再レンダリングの効率を目指すならproviderを分けることもある　Contextを分ける
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
