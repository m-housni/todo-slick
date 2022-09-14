# Dev Dependencies

Overview of the different dev dependencies used by this Svelte project

## "@sveltejs/adapter-auto": "next"

adapter-auto
Automatically chooses the adapter for your current environment, if possible.

Supported environments:

The following environments are supported out-of-the-box, meaning a newly created project can be deployed on one of these platforms without any additional configuration:

Cloudflare Pages via adapter-cloudflare
Netlify via adapter-netlify
Vercel via adapter-vercel

## "@sveltejs/kit": "next"

This is the SvelteKit framework and CLI.

The quickest way to get started is via the create-svelte package:

```
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```

## "prisma": "^3.5.0"

Prisma is a next-generation ORM that consists of these tools:

- Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript
- Prisma Migrate: Declarative data modeling & migration system
- Prisma Studio: GUI to view and edit data in your database

Prisma Client can be used in any Node.js or TypeScript backend application (including serverless applications and microservices). This can be a REST API, a GraphQL API a gRPC API, or anything else that needs a database.

## "svelte": "^3.44.0"

Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.

## "svelte-check": "^2.2.6"

Provides CLI diagnostics checks for:

- Unused CSS
- Svelte A11y hints
- JavaScript/TypeScript compiler errors

Requires Node 12 or later.

## "svelte-preprocess": "^4.9.4"

A Svelte preprocessor with sensible defaults and support for: PostCSS, SCSS, Less, Stylus, CoffeeScript, TypeScript, Pug and much more.

## "tslib": "^2.3.1"

This is a runtime library for TypeScript that contains all of the TypeScript helper functions.

This library is primarily used by the --importHelpers flag in TypeScript. When using --importHelpers, a module that uses helper functions like __extends and __assign in the following emitted file:

``` javascript
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.x = {};
exports.y = __assign({}, exports.x);
```

will instead be emitted as something like the following:

``` javascript
var tslib_1 = require("tslib");
exports.x = {};
exports.y = tslib_1.__assign({}, exports.x);
```

Because this can avoid duplicate declarations of things like __extends, __assign, etc., this means delivering users smaller files on average, as well as less runtime overhead. For optimized bundles with TypeScript, you should absolutely consider using tslib and --importHelpers.

## "typescript": "^4.4.3

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. 
