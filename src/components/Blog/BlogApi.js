import { getVariant, increaseVariantInteraction } from '../MiniCMS/MiniCMSApi';

const analyticsApi = {
  trackPageview: (userId, variant) => {
    console.log(`Pageview tracked for: ${userId}`, variant);
    // Can replace the console.log statement with the actual analytics API
  },
  trackSignUp: (variant) => {
    console.log(`Sign Up tracked - ${getUserId()}`, variant);
    increaseVariantInteraction(variant);
    // Can replace the console.log statement with the actual analytics API
  },
};

  
// Function to get or generate a unique user identifier
const getUserId = () => {
  let userId = localStorage.getItem('userId');

  if (!userId) {
    userId = Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
  }

  return userId;
};

const isFirstAppearance = () => {
  const userId = getUserId();

  // Check if the user has already been counted for this event
  const hasUserBeenCounted = localStorage.getItem(`userCounted_${userId}`);
  
  if (!hasUserBeenCounted) {
    // Mark the user as counted for this event
    localStorage.setItem(`userCounted_${userId}`, 'true');
    localStorage.setItem('userCounted_variant', getVariant());

    // Call the analytics API method to track the event
    analyticsApi.trackPageview(userId, localStorage.getItem('userCounted_variant'))
    return localStorage.getItem('userCounted_variant');
  }
  
  return localStorage.getItem('userCounted_variant');
}
  export {  analyticsApi, isFirstAppearance };
  