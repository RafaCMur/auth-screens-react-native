# **Managing the CI/CD Pipeline**

The CI/CD pipeline runs automatically using **GitHub Actions**. It is configured in the `.github/workflows/ci.yml` file.

### **How to Check the Pipeline Status**

1. Go to your **GitHub repository**.
2. Click on the **"Actions"** tab.
3. Select the latest workflow run to see if it passed or failed.

### **How to Rerun the Pipeline**

If the pipeline fails, you can:

- Fix the issue in your code and **push a new commit** (this will trigger the pipeline again).
- Manually rerun it from the **GitHub Actions page** by clicking "Re-run jobs".

### **How to Modify Pipeline Settings**

- The pipeline runs automatically **on every push to `main`**.
- To change this, edit `.github/workflows/ci.yml` and update:
  ```yaml
  on:
    push:
      branches:
        - main
  ```
- If you don’t want it to run on every push, remove or change this setting.

### **How to Manage Secrets**

If the pipeline needs **API keys or credentials**, add them in **GitHub Secrets**:

1. Go to **GitHub → Repository → Settings → Secrets & Variables**.
2. Click **"New repository secret"** and enter the required value.
3. These secrets can be used in the pipeline without exposing them in the code.

# **Extending the Pipeline**

If you need to modify the CI/CD pipeline, edit `.github/workflows/ci.yml`.

- **To add a new step**, insert it under an existing job. Example:
  ```yaml
  - name: Run a custom command
    run: echo "Custom step added"
  ```
- **To change when it runs**, modify:
  ```yaml
  on:
    push:
      branches:
        - main
  ```
  You can add more branches if needed.
- **To add deployment**, insert a step to upload builds (e.g., Firebase, App Store).

If you're unsure about changes, it's best to test them on a separate branch before merging.
