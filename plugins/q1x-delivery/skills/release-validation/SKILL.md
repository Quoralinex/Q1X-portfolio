---
name: release-validation
description: Validate release readiness, deployment gates and post-release state under repository-native policy.
---

# Release Validation

Before release or deployment:

1. verify the exact commit/tag being released;
2. confirm required tests, CI, CodeQL/security and reviewer gates;
3. confirm the repository's own deployment/approval policy and the current action's authorization;
4. verify environment-specific secrets/configuration are supplied through approved secret stores rather than source;
5. identify whether the release creates or changes metered infrastructure and surface that cost-bearing effect before provisioning where policy requires approval;
6. perform dry-run/package validation where supported;
7. smoke-test the deployed health/discovery surfaces;
8. record the resulting version, commit and deployment state.

A successful build does not by itself authorize deployment. Q1X Control Plane is not a release authority for repository agents.
