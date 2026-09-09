---
name: repository-context
description: Resolve repository context and only the capabilities justified by the current task for Quoralinex/Q1X-portfolio.
---

# Quoralinex/Q1X-portfolio Repository Context

Profile: delivery
Plugin: q1x-delivery
Default branch: master
Enabled canonical skills: repository-delivery, testing, release-validation
Required capabilities: github
Optional capabilities: goose-review, design-collaboration, web-deployment, systematic-debugging, test-driven-development

Use normal ChatGPT as the inference and reasoning runtime. Installed capabilities are not automatic dependencies. Select and activate a capability only when the repository and current task require it. Preserve repository-native CI, security, review, merge and deployment policy. Do not connect this repository directly to Q1X Control Plane.
