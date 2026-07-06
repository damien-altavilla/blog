---
title: 'How I Built This Blog (and What It Taught Me)'
excerpt: "I'm not a web developer. Here's how I still managed to build and ship this site with Astro, GitHub Pages and Cloudflare, and what I learned along the way."
publishDate: 2026-07-07
tags: ['astro', 'github', 'cloudflare', 'dns']
isFeatured: true
---

I've always dreamed of having my own little corner of the internet dedicated to IT. For a long time, it felt out of reach, something reserved for people who actually know how to code.

Let me be honest right away: I'm not a web developer. My background is IT support and infrastructure, and I only have basic notions of code. If I managed to build this site, it's thanks to today's tools, which make the whole thing surprisingly accessible, and to AI, which helped me get unstuck every time I hit a wall.

That said, you still need some IT knowledge to pull this off. You don't have to be an expert, but starting from absolute zero would get frustrating very fast. I'll assume you're comfortable with a computer and that technical stuff doesn't scare you.

This is not a tutorial either. A real step-by-step guide would be ten times longer. It's simply the story of my experience: what I chose, what went wrong, and how I got through it.

There are already thousands of tech blogs out there, many of them excellent. I'm not trying to replace any of them. This blog is just my own space: a place where I document what I learn, the projects I tinker with, and the problems I solve along the way.

## Choosing the tools

A blog is essentially a set of pages that don't change with every visit. So there's no need for heavy technologies like React, Angular or Next.js. Those are built for dynamic, complex web applications, not for a static site like this one.

The real question was: Astro or WordPress?

WordPress rebuilds every page on the fly, at every visit, using a database. It's powerful, but heavier, paid to host, and it needs constant maintenance. Astro takes the opposite approach: it generates all the pages once, and visitors simply receive ready-made HTML. The result is a site that's fast, free to host, and much harder to hack, since there's no server running code on every visit.

One thing worth saying: if you know absolutely nothing about IT, WordPress is probably the safer choice. Everything is managed through a visual interface, without ever touching code. Astro requires a bit more technical comfort, but that's exactly what I was looking for.

I went with Astro and the Dante theme. Astro offers several free, ready-to-use themes (AstroPaper, Astro Nano, Astro Micro, Dante and more), and Dante won me over because it's designed for a single author, with a proper section to showcase projects next to the articles. Exactly what I needed.

So what do you actually need to get started? Three things, all free except the domain:

- A **domain name**, the address of your site. I got mine through Cloudflare, but any registrar works.
- **VS Code** (Visual Studio Code), the editor where you build your site. Don't confuse it with Visual Studio, which is a different, much heavier tool made for another purpose.
- A **GitHub account**, which will host your site for free and publish it automatically.

## Getting the site online

Three tools work together here: VS Code (where I edit the site), Git (which tracks versions locally on my PC) and GitHub (which hosts everything online). Once Git is installed, you have two options: type a few commands in the terminal, or manage everything visually with GitHub Desktop, no command line involved. I ended up using a bit of both, and for someone who isn't a developer, GitHub Desktop is clearly the more reassuring option.

The principle is simple. I started by creating a repository (a "repo") on GitHub: that's the space that holds all the files of the site. You can create as many repos as you want, one per project.

Then I grabbed the Dante theme, available for free on astro.build/themes, put its files in my working folder, and pushed them to my GitHub repo.

From there, the magic happens. GitHub hosts and publishes the site on its own through **GitHub Pages**, which is free for static sites like this one. And the real comfort is what comes next: every time I change something and push it, the site updates itself about a minute later. Nothing else to do.

## The domain and the DNS

Once online, the site lives at a rather ugly address provided by GitHub. To make it answer on my real domain name, I had to configure the DNS, the system that connects a domain name to a server.

This is a part I already knew a little, but it deserves attention, because it's where a lot of people get stuck. On Cloudflare, I added the DNS records pointing to GitHub Pages:

- Four **A records** pointing to the GitHub Pages IP addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153.
- One **CNAME record** for the "www" version, pointing to my GitHub site address (your-username.github.io).

And here's the detail that kept me busy for a while. On Cloudflare, every record has a small cloud icon next to it, either orange or grey. It's not decorative, and the difference matters:

- **Orange cloud (proxied)**: traffic goes through Cloudflare's servers, which sit between the visitor and the site. That adds a layer of protection and caching, but Cloudflare stands in front of your site.
- **Grey cloud (DNS only)**: Cloudflare simply translates the domain name into an IP address, and the visitor connects directly to the destination. No middleman.

For a site hosted on GitHub Pages, grey (DNS only) is the mode you want. GitHub manages its own HTTPS certificate, and the orange mode can create conflicts. Once the records were set to grey, all that was left was to enter the domain in the GitHub Pages settings, wait for the verification, and enable HTTPS.

## AI and YouTube tutorials

This is probably the most important part of this article, especially if you're just starting out.

Before touching anything, I strongly recommend watching a few YouTube tutorials on the basic tools: how to use VS Code, how GitHub works, what Git is, and how to manage records on Cloudflare. It builds the foundations. Without them, you'll just stack actions without understanding what you're doing, and the smallest grain of sand will block you completely.

Then yes, I used AI to help me. But I want to be clear about this, because there's a common misunderstanding: AI never does everything for you. It won't build your site while you watch. What it does, and it's already huge, is unblock you when you're stuck, explain an error message that makes no sense, or show you the way when you're lost.

The right way to use it is to treat it like a private tutor available at any hour: you ask your question, it explains, and you're the one who executes and understands. If you expect it to do the work for you without understanding anything yourself, you'll hit a wall at the first unexpected problem.

## So, was it worth it?

Can you really build your own blog, properly, in a weekend? Yes, absolutely, with today's tools. What used to take weeks and solid development skills now fits in a few hours.

But let's be clear: it's still real work. Even with AI and modern tools, you need to stay focused, understand what you're doing, and accept a bit of struggle. AI and free themes remove a big part of the difficulty. They don't remove the effort.

And honestly? That's exactly what makes it satisfying. Seeing your site live, on your own domain name, knowing you built it yourself: that's worth every hour of sweat.
