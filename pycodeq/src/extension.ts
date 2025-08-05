import * as vscode from 'vscode';
import { execFile } from 'child_process';

const diagnosticCollection = vscode.languages.createDiagnosticCollection('pycodestyle');

// core function for PyCodeQ linter
function runPycodeStyleCheck(doc: vscode.TextDocument) {

	const command = 'pycodestyle';
	const filePath = doc.fileName;

	execFile(command, [filePath], (error, stdout, stderr) => {

		if (error && 'code' in error && error.code === 'ENOENT') {
			// if pycodestyle is not installed, show an error message
			vscode.window.showErrorMessage('PyCodeQ: pycodestyle is not installed. Please install it to use this extension.');
			return;

		}

		// delete previous diagnostics
		diagnosticCollection.delete(doc.uri);

		// check for errors
		if (stderr) {
			console.log('PyCodeQ stderr:', stderr);
			return;
		}

		const diagnostics: vscode.Diagnostic[] = [];

		// Regex to parse the output of pycodestyle
		// path:line:column message
		const regex = /^.+?:(\d+):(\d+): (\w\d+) (.+)/gm;
		let match;

		while ((match = regex.exec(stdout)) !== null) {
			const line = parseInt(match[1], 10) - 1;
			const column = parseInt(match[2], 10) - 1;
			const code = match[3];
			const message = match[4];

			const range = new vscode.Range(line, column, line, 100);
			const diagnostic = new vscode.Diagnostic(
				range,
				`${code}: ${message}`,
				vscode.DiagnosticSeverity.Warning
			);

			diagnostics.push(diagnostic);
		}

		// updating the collection with new diagnostics
		diagnosticCollection.set(doc.uri, diagnostics);
	});
}


export function activate(context: vscode.ExtensionContext) {

	console.log('PyCodeQ is now active!');

	// Run check on manually triggered command
	context.subscriptions.push(
		vscode.commands.registerCommand('pycodeq.runPyCodeQ', () => {
			const editor = vscode.window.activeTextEditor;

			if (editor && editor.document.languageId === 'python') {
				// run the PyCodeQ check
				runPycodeStyleCheck(editor.document);
			} else {
				vscode.window.showErrorMessage('PyCodeQ: Please open a Python file to run the check.');
			}
		})
	);

	// Run check on file open
	context.subscriptions.push(
		vscode.workspace.onDidOpenTextDocument(doc => {
			// make sure the document is a Python file
			if (doc.languageId === 'python') {
				// run the PyCodeQ check
				runPycodeStyleCheck(doc);
			}
		})
	);

	// Run check when the file is saved
	context.subscriptions.push(
		vscode.workspace.onDidSaveTextDocument(doc => {

			// make sure the document is a Python file
			if (doc.languageId === 'python') {
				// run the PyCodeQ check
				runPycodeStyleCheck(doc);
			}
		})
	);

	// Clear diagnostics when the file is closed
	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument(doc => {
			diagnosticCollection.delete(doc.uri);
		})
	);

}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('PyCodeQ closed!');
	diagnosticCollection.clear();
}
