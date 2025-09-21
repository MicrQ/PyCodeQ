# PyCodeQ - VS Code Extension

This repository contains the source code for the **PyCodeQ** Visual Studio Code extension, a simple and fast linter for Python that uses `pycodestyle`.

## For Contributors

We welcome contributions! This guide will help you get your development environment set up.

### Getting Started

The extension is developed inside the `pycodeq/` directory.

**Prerequisites:**
*   [Node.js](https://nodejs.org/) (which includes `npm`)
*   [Visual Studio Code](https://code.visualstudio.com/)

**Setup:**
1.  Clone the repository.
2.  Navigate to the extension's directory:
    ```bash
    cd pycodeq
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Extension for Development

1.  Open the root folder (`PyCodeQ`) in VS Code.
2.  Press `F5` to open a new VS Code window (the "Extension Development Host") with the PyCodeQ extension running.
3.  You can now open a Python file in the new window to test your changes.

### Building and Testing

You can run these scripts from within the `pycodeq/` directory:

*   **Compile:**
    ```bash
    npm run compile
    ```
*   **Run Tests:**
    ```bash
    npm test
    ```
*   **Lint the code:**
    ```bash
    npm run lint
    ```

### How to Contribute

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Submit a pull request with a clear description of your changes.

We appreciate your help in making PyCodeQ better!

## License

This project is licensed under the MIT License. See the [LICENSE](pycodeq/LICENSE) file for details.
