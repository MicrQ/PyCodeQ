# PyCodeQ

![PyCodeQ Demo](images/v1.0.0.gif)

*The simplest, fastest pycodestyle linter available!*

PyCodeQ is a fast, simple, and lightweight linter extension for Python in Visual Studio Code. It uses [pycodestyle](https://pycodestyle.pycqa.org/en/latest/) to check your Python files for style issues and instantly highlights problems in your code.

## Features

- Runs `pycodestyle` automatically when you save or open a Python file
- Highlights style issues directly in the editor using VS Code diagnostics
- Command: **PyCodeQ: Run Linter Check** (available in the Command Palette)
- No configuration required—just install and start linting!

## Requirements

- Python must be installed on your system
- You must have `pycodestyle` installed and available in your PATH

Install with:

```bash
pip install pycodestyle
```

## Usage

1. Open any Python file in VS Code.
2. Save the file or run the command **PyCodeQ: Run Linter Check** from the Command Palette.
3. Style issues will be highlighted in the editor and listed in the Problems panel.

## Known Issues

- Only supports linting with `pycodestyle` found in your system PATH
- Does not support custom configuration or arguments (YET!)

## Release Notes

### 1.0.0
- Initial public release
- Automatic linting on save and open
- Manual linting command
- Diagnostic highlights for style issues

---

## License

MIT

---

For questions, feedback, or issues, please visit the [GitHub repository](https://github.com/MicrQ/PyCodeQ).
