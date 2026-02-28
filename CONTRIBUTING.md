# Contributing to abac-ts

Thank you for your interest in contributing!

## Getting Started

```bash
git clone https://github.com/mounteden/abac-ts.git
cd abac-ts
pnpm install
```

## Development Workflow

1. Create a branch from `main`
2. Make your changes
3. Run the checks:
   ```bash
   pnpm typecheck      # Type checking
   pnpm check          # Lint + format check
   pnpm test           # Run tests
   ```
4. Fix formatting or lint issues:
   ```bash
   pnpm format:fix     # Auto-format
   pnpm lint:fix       # Auto-fix lint issues
   ```
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/) — this is enforced by a git hook:
   ```
   feat: add new feature
   fix: correct a bug
   docs: update documentation
   test: add or update tests
   refactor: restructure without behavior change
   chore: maintenance tasks
   ```
6. Open a pull request against `main`

## Pull Requests

- Keep PRs focused on a single change
- Include tests for new functionality
- Ensure all checks pass before requesting review
- Use a descriptive title following Conventional Commits format

## Reporting Issues

- Use [GitHub Issues](https://github.com/mounteden/abac-ts/issues) for bugs and feature requests
- For security vulnerabilities, see [SECURITY.md](SECURITY.md)
