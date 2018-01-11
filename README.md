# client-side-js-tests

This repo is designed for use as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) in other repos for student assignments.

After the instructor has set up an assignment repo with this submodule, students load `runTests.html` in a browser to run the instructor's tests against their work.

![Test results](./runTests.png)

Students submit a summary of their test results by clicking the `Copy` icon in the upper left corner of the page. This automatically places a summary of the test results on the clipboard. Then, as the feedback message indicates, students paste into a file named `testResults.md` and save it. When students commit and push work to GitHub, the results file will be included.

![Autocopy success message](./autoCopy.png)

## Setting up the assignment

Before a given assignment repo is provided to students, the instructor must create file system links to identify the scripts used in testing.

The following commands should be executed in a `bash` terminal, in the root folder of the assignment repo. (This is one level up from the folder for this submodule.)

For each script to be tested: `ln -s <someScriptToBeTested>.js undertest1.js`. Replace `1` with the next sequential number for each addition script. Note that this submodule will load them in numeric order; load order may matter if there are dependencies among your scripts.

For each script containing `mocha` tests: `ln -s <someMochaScript>.js tests1.js`. Again, use sequential numbers for additional scripts.
