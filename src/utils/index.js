const isDesktop = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return false;
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return false;
  }
  return true;
};

const maxHeight = (arrOfEle) => {
  const arrayOfHeights = arrOfEle.map((ele) => ele.clientHeight);
  return Math.max(...arrayOfHeights);
};

export { isDesktop, maxHeight };
