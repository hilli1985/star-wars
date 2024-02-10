export const parseUrl = (url:string | null) => {
    if (url) {
      return url.split('&page=')[1] 
    }
    return url;
  }  