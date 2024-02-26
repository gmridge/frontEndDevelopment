[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13248925&assignment_repo_type=AssignmentRepo)
# module-4-mermaid-demo


```mermaid
graph TD
  A[Landing Page] --> | User Creates Account| B(User Has Account)
  B -->|true| C(User Logs In)
    B -->|false| D(User Signs Up)
    D -->|true| C
    C --> E[Main Products Page]
    E -->|User selects product| F[Product Buy Page]
    F -->|User Buys Product and returns to Main Products Page| E
    E -->|User Logs Out| A
```