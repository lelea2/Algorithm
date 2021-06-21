### Design an API progress bar

**Things to consider**

1. Natural animation
2. Multiple API case: error case, timeout, fast vs slow request
3. state management (inside component or follow DDAU)
- progress updated from BE (setInterval/polling)
- updated by user action
4. Modularization
5. API cancellation