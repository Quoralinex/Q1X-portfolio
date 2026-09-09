---
name: testing
description: Select and run proportionate repository tests, then verify required CI gates before delivery.
---

# Testing

Use the repository's own validation stack.

- run focused tests while implementing;
- run the repository-required validation before opening/merging a PR;
- include generated-output validation when generator behaviour changes;
- test authentication and fail-closed behaviour for control surfaces;
- test both success and rejection paths for policy-controlled operations;
- verify CI/CodeQL/security checks on the exact PR head.

Do not substitute a local smoke test for required repository CI.
