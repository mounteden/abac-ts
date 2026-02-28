# abac-ts

Attribute-based access control (ABAC) for TypeScript. Zero dependencies.

ATTENTION: WORK IN PROGRESS; DOES NOT WORK YET.

## Installation

```bash
npm install abac-ts
```

## What is ABAC?

ABAC is an authorization model that evaluates access requests against policies based on attributes of the **subject** (who), **resource** (what), **action** (how), and **environment** (context). Unlike role-based access control (RBAC), ABAC enables fine-grained, dynamic policies without combinatorial explosion of roles.

## Usage

```typescript
import { createPolicy, createEngine } from "abac-ts";

// Define policies using attributes
const policy = createPolicy({
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

// Create the policy engine
const engine = createEngine([policy]);

// Evaluate an access request
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
| **Policy**      | A rule that maps attribute conditions to a decision       |
| **Decision**    | The result of evaluation: `permit`, `deny`, or `not_applicable` |

## License

MIT
