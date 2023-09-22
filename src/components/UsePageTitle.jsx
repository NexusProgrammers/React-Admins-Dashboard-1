import { useEffect } from "react";

const UsePageTitle = (dynamicPart) => {
  const baseTitle = "Admin Panel";

  useEffect(() => {
    document.title = `${baseTitle} | ${dynamicPart}`;
  }, [dynamicPart]);
};

export default UsePageTitle;
  