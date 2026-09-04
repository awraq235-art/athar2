# ATHAR Deployment

Environments:
1. Development
2. Staging
3. Production

Release flow:
Git Push -> CI -> Tests -> Security -> Build -> Staging -> Smoke Test -> Production Approval -> Deploy -> Post-deploy Verification.

Do not deploy until the production gate is satisfied.
