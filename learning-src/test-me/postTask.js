// https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91

useEffect(() => {
  if (hasInteractedWithCarousel) {
    preloadImages(imageUrls.slice(1, 4));
  }
 }, [hasInteractedWithCarousel]);
 
 // We use the list index combined with delay to 
 // stagger the call to preload each image by 100ms each.
 const preloadImages = useCallback((imageUrls) => {
  imageUrls.forEach((url, index) => {
    scheduler.postTask(() => preloadImage(url), {
      delay: index * 100,
      signal: controller.current.signal,
    });
  });
  
  setHasPreloadedNextImages(true);
 }, []);