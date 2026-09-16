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
7. if the release includes a deployable service and deployment is not authorized, stop and fail closed; do not substitute artifact verification for deployment authorization;
8. when the release includes an authorized deployable service, deploy under repository policy and smoke-test its deployed health/discovery surfaces;
9. for a package-only release with no deployable service, verify the released package or artifact with repository-native integrity, installation, publication, or equivalent checks;
10. record the resulting version, commit and artifact/deployment state.

A successful build does not by itself authorize deployment. Q1X Control Plane is not a release authority for repository agents.
