---
layout: default
title: Home
---

# abac-ts

Attribute-based access control (ABAC) for TypeScript. Zero dependencies.

[View on GitHub](https://github.com/mounteden/abac-ts){: .btn }
[View on npm](https://www.npmjs.com/package/abac-ts){: .btn }

---

## What is ABAC?

ABAC is an authorization model that evaluates access requests against policies based on attributes of the **subject** (who), **resource** (what), **action** (how), and **environment** (context).

Unlike role-based access control (RBAC), ABAC enables fine-grained, dynamic policies without combinatorial explosion of roles.

## Installation

```bash
npm install abac-ts
```

Or with other package managers:

```bash
pnpm add abac-ts
yarn add abac-ts
```

## Getting Started

### 1. Define a Policy

A policy describes who can do what under which conditions:

```typescript
import { createPolicy } from "abac-ts";

const editArticlePolicy = createPolicy({
  target: {
    subject: { role: "editor" },
    resource: { type: "article" },
    action: "edit",
  },
  condition: (subject, resource, environment) => {
    return (
      resource.department === subject.department &&
      environment.hour >= 9 &&
      environment.hour <= 17
    );
  },
});
```

### 2. Create the Policy Engine

Combine one or more policies into an engine:

```typescript
import { createEngine } from "abac-ts";

const engine = createEngine([editArticlePolicy]);
```

### 3. Evaluate an Access Request

Pass the subject, resource, action, and environment to get a decision:

```typescript
const decision = engine.evaluate({
  subject: { id: "user-1", role: "editor", department: "engineering" },
  resource: { id: "article-42", type: "article", department: "engineering" },
  action: "edit",
  environment: { hour: 14 },
});

if (decision === "permit") {
  // Access granted
}
```

## Concepts

| Term            | Description                                              |
| --------------- | -------------------------------------------------------- |
| **Subject**     | The entity requesting access (user, service, device)     |
| **Resource**    | The entity being accessed (document, API endpoint, file) |
| **Action**      | The operation being performed (read, write, delete)      |
| **Environment** | Contextual attributes (time, IP address, location)       |
| **Policy**      | A rule that maps attribute conditions to a decision      |
| **Decision**    | The result: `permit`, `deny`, or `not_applicable`        |

## Why abac-ts?

- **Zero dependencies** — no supply-chain risk, minimal footprint
- **Type-safe** — full TypeScript support with strict typing
- **Lightweight** — simple API, no framework lock-in
- **Flexible** — model any authorization scenario with attribute-based conditions

## License

[MIT](https://github.com/mounteden/abac-ts/blob/main/LICENSE)
