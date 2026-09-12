# 🎓 JavaScript Exercises: Building a Campus Portal

## Assignment contract

Implement the JavaScript functions in modules 1–9 of this private course repository. The automated tests describe the required behavior, and Canvas contains the official due date and rubric. If this README and Canvas ever appear to conflict, contact the instructor or TA before submitting.

Your repository is created for you in the `IT3049C-26FS` organization:

```text
campus-portal-<your-github-username>
```

Only you, the instructor, and the course TA may access it. Do not create a separate repository, change its visibility, or add classmates as collaborators.

## Learning outcomes

By completing this assignment, you will practice:

- JavaScript numbers, strings, types, coercion, equality, and control flow.
- Arrays, objects, functions, scope, and higher-order array methods.
- Reading function documentation and automated tests to determine expected behavior.
- Running tests locally and using failures to guide debugging.
- Making meaningful Git commits and pushing a complete repository to GitHub.

## Required modules and points

| Module                     | File                               | Points |
| -------------------------- | ---------------------------------- | -----: |
| Numbers                    | `src/1.numbers.js`                 |      3 |
| Strings                    | `src/2.strings.js`                 |      2 |
| Types and coercion         | `src/3.typesAndCoercion.js`        |      2 |
| Equality                   | `src/4.equality.js`                |      1 |
| Control flow and logic     | `src/5.controlFlowAndLogic.js`     |      3 |
| Arrays                     | `src/6.arrays.js`                  |      3 |
| Objects                    | `src/7.objects.js`                 |      2 |
| Functions and scope        | `src/8.functionsAndScope.js`       |      1 |
| Higher-order arrays        | `src/9.arraysHigherOrder.js`       |      2 |
| Git history and reflection | This README and repository history |      1 |
| **Total**                  |                                    | **20** |

Modules 10–12 are optional, ungraded enrichment. They are not included when you run `npm test`.

## Local setup and testing

Install [Node.js 20 or newer](https://nodejs.org/) and Git before starting. From the repository directory, run:

```bash
npm install
npm test
npm run lint
```

- `npm test` runs every required check for modules 1–9.
- `npm run test:1` through `npm run test:9` run one required module at a time.
- `npm run test:bonus` runs the optional checks for modules 10–12.
- `npm run test:watch` reruns affected tests as you work.
- `npm run lint` checks the JavaScript source for code-quality problems.

Work through modules 1–9 in order. Read the documentation above each function and the corresponding file in `src/__tests__/`. Edit the implementation files only; do not change the tests, package scripts, or grading configuration.

## Git workflow

Make at least five meaningful, student-authored commits as you complete the required modules. Commit messages should explain the work completed rather than use messages such as `changes` or `finished`. Push the completed work to the `main` branch. Work that exists only on your computer cannot be graded.

Do not commit `node_modules`, generated output, credentials, or unrelated files.

## Self-reflection

Replace each prompt below with a short, specific response.

1. How much time did you spend, and which required module took the longest?
   <!-- Replace this comment with your response. -->
2. Which JavaScript concept was most challenging, and what helped it make sense?
   <!-- Replace this comment with your response. -->
3. Describe one test failure you debugged and how you found the cause.
   <!-- Replace this comment with your response. -->
4. What documentation, classmates, tutoring, or AI tools did you use? Explain how you verified that the submitted work is your own and that you understand it.
   <!-- Replace this comment with your response. -->

## Submission

Before submitting, confirm that:

- `npm test` passes all required checks.
- `npm run lint` completes without errors.
- All four reflection responses are complete.
- At least five meaningful commits are visible on GitHub.
- The completed work is pushed to `main`.

Submit only this private repository URL in Canvas:

```text
https://github.com/IT3049C-26FS/campus-portal-<your-github-username>
```

No deployment, GitHub Pages site, or GitHub Actions run is required.

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
