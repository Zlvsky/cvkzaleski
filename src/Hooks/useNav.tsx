import { useRef, useContext, useEffect, FC } from "react";
import { useOnScreen } from "../Hooks/useOnScreen";
import { NavContext } from "../Components/NavProvider";



export const useNav = (navLinkId: string) => {
  const ref = useRef(null);

  const { setActiveNavLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveNavLinkId, navLinkId]);

  return ref;
};
