---
title: 'Secure Self-Hosting with Cloudflare Tunnel'
description: 'Exposing a home-hosted service without opening ports or revealing my IP: from a Python DDNS script to a Cloudflare Tunnel running as a Windows service, with automatic HTTPS.'
publishDate: 2026-07-13
isFeatured: true
---

A small home infrastructure project: making a self-hosted service reachable from anywhere, securely.

**The journey:**

- First attempt: a homemade **dynamic DNS** script in **Python**, calling the **Cloudflare API** to keep the DNS record in sync with my changing home IP (triggered by a Windows scheduled task).
- The problem: my public IP was still directly exposed, with no HTTPS.
- Final solution: a **Cloudflare Tunnel** (`cloudflared`) running as a **Windows service**. The connection is outbound and encrypted, so my IP is fully hidden, HTTPS is automatic, and no port is open on my router.

**What it demonstrates:** DNS (including dynamic DNS), REST APIs, Python scripting, reverse tunnels, proxying, HTTPS, and Windows service management.

Full write-up in the article: [Exposing a Self-Hosted Service Securely with Cloudflare Tunnel](/blog/cloudflare-tunnel-self-hosting).
