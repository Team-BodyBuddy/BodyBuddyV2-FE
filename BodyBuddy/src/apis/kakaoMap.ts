export const loadKakaoMap = (callback: () => void) => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_APP_KEY&libraries=services`;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
  };