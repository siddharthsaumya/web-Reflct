# 🌱 Git Branch Naming Convention

To maintain consistency and clarity across our repositories, all branches must follow the **prefix-based naming convention** described below.

---

## 📌 Branch Prefixes

| Prefix        | Usage                                                                 | Example                                    |
|---------------|----------------------------------------------------------------------|--------------------------------------------|
| `doc/`        | Documentation changes only                                            | `doc/update-readme`                        |
| `feature/`    | New features or enhancements                                          | `feature/user-authentication`              |
| `bugfix/`     | Fixing a bug (not urgent/hot)                                         | `bugfix/login-redirect`                    |
| `hotfix/`     | Critical, urgent fixes (usually deployed directly to production)      | `hotfix/payment-crash`                     |
| `release/`    | Preparation for a new release (changelog, version bump, final checks) | `release/v1.2.0`                           |
| `improvement/`| Refactoring, performance, or code quality improvements               | `improvement/db-query-optimization`        |
| `experiment/` | Testing out new ideas or proof-of-concepts                            | `experiment/ai-recommendations`            |

---

## ✅ Rules to Follow

1. Always use **lowercase** with `-` for separators.  
   - ✔ `feature/user-authentication`  
   - ✘ `Feature/UserAuthentication`  
2. Keep branch names **short but descriptive**.  
3. Prefix is **mandatory**.  
4. Avoid personal names (✘ `feature/siddharth-new-api`).  
5. Delete merged branches to keep the repo clean.  

---

## 🔄 Workflow Example

1. Create a feature branch:
   ```bash
   git checkout -b feature/user-authentication
    ```
2. Work, commit, push, and open a PR.
3. After merging, delete the branch:
    ```bash
    git branch -d feature/user-authentication
    ```