### Drill 1
Prompt used: "List every top-level folder in this repo and, for each, describe its purpose in one sentence. Then tell me which folder I'd edit to add a new API route."
Claude's result: Correctly identified src/routes, src/controllers, src/models and said new routes go in src/routes.
Observation: PASS - named actual folders, not generic
### Drill 2
Prompt used: "Here is an example of a good commit message... write 3 commit messages in that same style"
Claude's result: <paste the 3 commit messages it gave>
Observation: <did it match the style? PASS/FAIL>
### Drill 3
Prompt used: "Analyze src/ for potential bugs. Respond using this structure: <findings>..."
Claude's result: <paste the findings it returned>
Observation: <did it follow the XML structure? PASS/FAIL>
### Drill 4
Prompt used: "You are a senior backend engineer doing a pre-merge review... security and data-handling issues only"
Claude's result: <summarize what it flagged>
Observation: <did it stay scoped to security/data only? PASS/FAIL>
### Drill 5
Prompt used: "Before writing any code, first: (1) restate... (4) wait for my confirmation" + task: "add a GET /api/version endpoint..."
Claude's result: <did it restate, list files, list assumptions, then pause?>
Observation: <PASS if it waited for confirmation, FAIL if it jumped straight to code>
