// A throttle is a common technique used in the browser to improve an application’s performance by limiting the number of events your code needs to handle.
// You should use a throttle when you want to execute a callback at a controlled rate,
// allowing you to handle intermediate states repeatedly at each fixed interval of time.

// Pass in the callback that we want to throttle and the delay between throttled events
const throttle = (callback, delay) => {
  // Create a closure around these variables.
  // They will be shared among all events handled by the throttle.
  let throttleTimeout = null;
  let storedEvent = null;

  // This is the function that will handle events and throttle callbacks when the throttle is active.
  const throttledEventHandler = event => {
    // Update the stored event every iteration
    storedEvent = event;

    // We execute the callback with our event if our throttle is not active
    const shouldHandleEvent = !throttleTimeout;

    // If there isn't a throttle active, we execute the callback and create a new throttle.
    if (shouldHandleEvent) {
      // Handle our event
      callback(storedEvent);

      // Since we have used our stored event, we null it out.
      storedEvent = null;

      // Create a new throttle by setting a timeout to prevent handling events during the delay.
      // Once the timeout finishes, we execute our throttle if we have a stored event.
      throttleTimeout = setTimeout(() => {
        // We immediately null out the throttleTimeout since the throttle time has expired.
        throttleTimeout = null;

        // If we have a stored event, recursively call this function.
        // The recursion is what allows us to run continusously while events are present.
        // If events stop coming in, our throttle will end. It will then execute immediately if a new event ever comes.
        if (storedEvent) {
          // Since our timeout finishes:
          // 1. This recursive call will execute `callback` immediately since throttleTimeout is now null
          // 2. It will restart the throttle timer, allowing us to repeat the throttle process
          throttledEventHandler(storedEvent);
        }
      }, delay);
    }
  };

  // Return our throttled event handler as a closure
  return throttledEventHandler;
};
