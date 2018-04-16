##### 1. What is SQL Injection? How to prevent it



##### 2. What is XSS?

* By default, most template language escape character in order to avoid XSS attack

##### 3. What is CSRF?


##### 4. What is Phishing?


##### 5. NodeJs key compare
```
function checkApiKey (apiKeyFromDb, apiKeyReceived) {
  if (apiKeyFromDb === apiKeyReceived) {
    return true
  }
  return false
}
```

* When you compare security credentials it is crucial that you don't leak any information, so you have to make sure that you compare them in fixed time. If you fail to do so, your application will be vulnerable to timing attacks.

* Fixing using `cryptiles` npm
```javascript
function checkApiKey (apiKeyFromDb, apiKeyReceived) {
  return cryptiles.fixedTimeComparison(apiKeyFromDb, apiKeyReceived)
}

```