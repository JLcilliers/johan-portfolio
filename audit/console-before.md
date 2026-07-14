# Console log, live production, before rebuild

Captured 2026-07-14 against https://johan-portfolio-sage.vercel.app/ (Chromium via Playwright).

## Homepage `/`

```
Error: Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for the full message
    at rK (.../_next/static/chunks/92ac57cfd1116609.js ...)
    at io (...)
    at sc (...)
    at u7 (...)
    at sV (...)
    at MessagePort.O (...)
[ERROR] Failed to load resource: the server responded with a status of 404 () @ https://johan-portfolio-sage.vercel.app/favicon.ico:0
```

Two hard failures:

1. React error #418 (hydration mismatch). Root cause: the `ThemeProvider` / theme toggle renders a class on `<html>` that differs between server and client.
2. `favicon.ico` 404. No `app/favicon.ico` or `app/icon.*` file exists, and no icon metadata is emitted.

Also observed in the rendered DOM: placeholder copy shipped to production on every case study card: "Example outcomes (replace with verified numbers)".
